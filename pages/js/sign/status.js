firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // user is authenticated, so you can use user.uid in your code
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    const userRef = firestore.collection('users').doc(user.uid);
    
    userRef.get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const status = data.status;
          // use status value here
          if (status === "free trial") {
            dropdownMenus.forEach(menu => {
              menu.style.display = "none"; // Hide the element
            });
          } else {
            dropdownMenus.forEach(menu => {
              menu.style.display = "block"; // Show the element
            });
          }
        }
      })
      .catch((error) => {
        // error getting document
      });
  } else {
    // user is not authenticated
  }
});
