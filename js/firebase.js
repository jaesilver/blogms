let firebaseConfig = {
    apiKey: "AIzaSyBwsUBGEIy90Lun_zq0wZGyi0zCcAyYvvw",
    authDomain: "blogger-website-d1e61.firebaseapp.com",
    projectId: "blogger-website-d1e61",
    storageBucket: "blogger-website-d1e61.appspot.com",
    messagingSenderId: "845334547985",
    appId: "1:845334547985:web:9a4c0e95cd7444774a6bb0"
  };

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let auth = firebase.auth();
 