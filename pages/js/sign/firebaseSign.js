//google sign up
function googleSignUp() {
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // Get the user information
    var user = result.user;
    var email = user.email;
    var name = user.displayName;
    
    // Add this user to Firestore
    firestore.collection("users").doc(user.uid).set({
      email: email,
      nama: name,
      remainingWordCredit: 100,
      last_login: Date.now()
    })
    .then(function() {
        alert('User Created!!');
        window.location.href = "./dasbor.html";
    })
    .catch(function(error) {
        alert(error.message);
    });
  })
  .catch(function(error) {
    // Handle errors here
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

//google sign in 
function googleSignIn() {
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // Get the user information
    var user = result.user;
    var email = user.email;
    
    // Add this user to Firestore
    firestore.collection("users").doc(user.uid).update({
      last_login: Date.now()
    })
    .then(function() {
        window.location.href = "./dasbor.html";
    })
    .catch(function(error) {
        alert(error.message);
    });
  })
  .catch(function(error) {
    // Handle errors here
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}


// Set up our register function
function register() {
  // Get all our input fields
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const nama = document.getElementById('nama').value;

  // Validate input fields
  if (!validate_email(email) || !validate_password(password)) {
    alert('Email or Password is invalid!');
    return;
  }

  if (!validate_field(nama)) {
    alert('One or More Extra Fields is invalid!');
  }

  // Create user with email and password
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Send email verification
      return userCredential.user.sendEmailVerification();
    })
    .then(() => {
      // Declare user variable
      const user = auth.currentUser;

      // Add user data to Firestore
      return firestore.collection('users').doc(user.uid).set({
        email,
        nama,
        remainingWordCredit: 100,
        status: 'free trial',
        last_login: Date.now(), 
      });
    })
    .then(() => {
      alert('Akun dibuat, periksa email anda dan klik link verifikasi yang kami kirimkan.');
      window.location.href = './masuk.html';
    })
    .catch((error) => {
      alert(error.message);
    });
}


// Set up our login function
function login() {
  // Get all our input fields
  const email = document.getElementById('in-email').value;
  const password = document.getElementById('in-password').value;

  // Validate input fields
  if (!validate_email(email)) {
    alert('Invalid email format!');
    return;
  }

  if (!validate_password(password)) {
    alert('Password should be at least 6 characters!');
    return;
  }

  // Sign in user with email and password
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      // Declare user variable
      const user = auth.currentUser;

      // Update user's last login time in Firestore
      return firestore.collection('users').doc(user.uid).update({
        last_login: Date.now(),
      });
    })
    .then(() => {
      // Redirect to dashboard if user is authenticated and verified
      const user = auth.currentUser;
      if (user && user.emailVerified) {
        window.location.href = './dasbor.html';
      } else {
        alert('Mohon Verifikasi Email Anda!');
      }
    })
    .catch((error) => {
      // Handle error
      const error_code = error.code;
      const error_message = error.message;
      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  console.log(password) 
  if (password.length < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}


