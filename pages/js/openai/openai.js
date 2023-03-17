// Get the API key and store it in the apiKeyValue variable
function getApiKey() {
  return fetch('https://us-central1-salin-c0750.cloudfunctions.net/storeApiKey')
    .then(response => response.text())
    .then(apiKey => {
      apiKeyValue = apiKey; // Store the API key in a variable accessible to the entire module
    })
    .catch(error => console.error(error));
  }
  
    const apiKeyPromise = getApiKey(); // This will fetch the API key and return a promise
  
  // Function to generate content based on the prompt
  function generateContent(prompt, maxTokens) {
    // Disable the submit button
    submitButton.disabled = true;
    
    // Set temperature based on selected kreativitas
    let temperature;
    switch (selectedKreativitas) {
      case "Rendah":
        temperature = 0.25;
        break;
      case "Sedang":
        temperature = 0.5;
        break;
      case "Tinggi":
        temperature = 0.8;
        break; // add this line to cover the case of "tinggi"
      default:
        temperature = 0.5;
        break;
    }
    
    // Show the loading text and make it blink
    document.getElementById("loading").innerHTML = "Berpikir...";
    document.getElementById("loading").style.display = "block";
    document.getElementById("loading").classList.add("blink");
  
    // Check if the remainingWordCredit is already cached
    if (remainingWordCredit === null) {
      // If not, fetch it from Firestore and then proceed with generating the content
      const user = auth.currentUser;
      firestore.collection("users").doc(user.uid).get()
        .then(function(doc) {
          remainingWordCredit = doc.data().remainingWordCredit;
          generateContentWithCache(prompt, maxTokens, temperature);
        });
    } else {
      // If cached, use the cached value instead of fetching it from Firestore
      generateContentWithCache(prompt, maxTokens, temperature);
    }
  }
  
  function generateContentWithCache(prompt, maxTokens, temperature) {
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKeyValue
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: maxTokens,
        temperature: temperature, // Use the temperature variable here
      })
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const responseText = data.choices[0].message.content;
        const wordCount = responseText.split(" ").length;
  
        if (wordCount > remainingWordCredit) {
          alert("Maaf Token Anda Tidak Cukup");
          document.getElementById("loading").innerHTML = "Hasil";
          document.getElementById("loading").classList.remove("blink");
          return;
        }
  
      const wordCountElement = document.getElementById("word-count");
      wordCountElement.innerHTML = `${wordCount}`;
      
      // Split responseText by newline characters to get paragraphs
      const paragraphs = responseText.trim().split("\n");
      let formattedResponse = "";
  
      for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i].trim();
        
        // Only add the paragraph if it's not empty
        if (paragraph.length > 0) {
          // Capitalize the first letter of each paragraph and wrap it in a <p> tag before adding it to the formattedResponse string
          formattedResponse += `<p>${paragraph.charAt(0).toUpperCase() + paragraph.slice(1)}</p>`;
        }
      }
  
      // Set the formatted response as the content of the editor
      editor.setData(formattedResponse);
  
      // Create a batched write
      const batch = firestore.batch();
  
      // Update the cached remainingWordCredit value
      remainingWordCredit -= wordCount;
  
      // Add the remainingWordCredit update and a new entry to the word usage history to the batched write
      const user = auth.currentUser;
      const userRef = firestore.collection("users").doc(user.uid);
      batch.update(userRef, { remainingWordCredit: remainingWordCredit });
      batch.set(userRef.collection("wordUsageHistory").doc(), {
        dateTime: new Date(),
        wordCount: wordCount,
        prompt: prompt,
        response: responseText,
        temperature: temperature
      });
  
      // Commit the batched write
      batch.commit()
      .then(() => {
        // Hide the loading text and change it to "Hasil"
        document.getElementById("loading").innerHTML = "Hasil";
        document.getElementById("loading").classList.remove("blink");
  
        // Enable the submit button
        submitButton.disabled = false;
    })
    .catch(error => {
      console.error('Error:', error);
      responseElement.innerHTML = "An error occurred. Please try again later.";
      
      })
    })
  }
  