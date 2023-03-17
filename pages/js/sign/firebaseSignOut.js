function signOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.location.href = "./daftar.html";
    }).catch(function(error) {
      // An error happened.
      alert(error.message);
    });
  }