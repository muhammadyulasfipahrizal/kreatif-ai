firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var uid = user.uid;
      var uidRef = firestore.collection("users").doc(uid);
  
      //sisa kata
      uidRef.get().then(function(doc) {
        if (doc.exists) {
          var remainingWordCredit = doc.data().remainingWordCredit;
          document.querySelector(".usage-word").innerHTML = remainingWordCredit;
          var percentage = (remainingWordCredit / 1500) * 100;
          document.getElementById("progress-bar").style.width = percentage + "%";
          document.getElementById("progress-bar").setAttribute("aria-valuenow", percentage);
        } else {
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    } else {
      // No user is signed in.
    }
  });
  
  
