auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var uid = user.uid;
    var usageRef = firestore.collection("users").doc(uid).collection("wordUsageHistory");
    var uidRef = firestore.collection("users").doc(uid);

    // Initialize the chart
    var ctx = document.getElementById('usageChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [], // Array of dates
        datasets: [{
          label: 'Kata Terpakai',
          data: [], // Array of usage count per day
          backgroundColor: 'rgba(39, 115, 245, 0.8)',
        }]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });


    //sisa kata
    uidRef.get().then(function(doc) {
      if (doc.exists) {
        var remainingWordCredit = doc.data().remainingWordCredit;
        document.getElementById("remaining-word").innerHTML = remainingWordCredit;
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

    //item terbuat
    usageRef.get().then(function(querySnapshot) {
      var docs = querySnapshot.docs;
      document.getElementById("item-generated").innerHTML = docs.length;
    });

    //kata terbuat
    usageRef.get().then(function(querySnapshot) {
      var docs = querySnapshot.docs;
      var wordCountTotal = 0;
      
      docs.forEach(function(doc) {
        // Get data from document
        var data = doc.data();
        wordCountTotal += data.wordCount;
      });
      
      // Update the HTML element with the total word count
      document.getElementById("words-made").innerHTML = wordCountTotal;
    });

// Get data from Firestore and update chart
usageRef.get().then(function(querySnapshot) {
  var docs = querySnapshot.docs;
  // Sort the data by dateTime in ascending order
  docs.sort(function(a, b) {
  return a.data().dateTime.toDate() - b.data().dateTime.toDate();
  });
  
  var latestData = docs.slice(Math.max(docs.length - 6, 0));
  var dataLength = latestData.length;
  
  // Fill the chart with empty data from the right
  for (var i = dataLength; i < 4; i++) {
  chart.data.labels.unshift("");
  chart.data.datasets[0].data.unshift(null);
  }
  
  latestData.forEach(function(doc) {
  // Get data from document
  var data = doc.data();
  var date = new Date(data.dateTime.toDate());
  var formattedDate = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `;
  var usageCount = data.wordCount;

    // Add data to chart
    chart.data.labels.unshift(formattedDate);
    chart.data.datasets[0].data.unshift(usageCount);
  });

  // Update chart
  chart.update();
});

  } else {
    // No user is signed in.
  }
});