// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAQgGskE5oNPTVbfeynnvnwsqbupbwU2-E",
    authDomain: "salin-c0750.firebaseapp.com",
    databaseURL: "https://salin-c0750.firebaseio.com",
    projectId: "salin-c0750",
    storageBucket: "salin-c0750.appspot.com",
    messagingSenderId: "46344923928",
    appId: "1:46344923928:web:5fd22ad00aacbf98304c6d",
    measurementId: "G-K3ZSF8SL9K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = firebase.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

