//import { initializeApp } from "firebase/app";
//import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


//const firebaseConfig = {
//    apiKey: "AIzaSyCpjehQMmIOY0VKb034wOt0UFicOcCwYw4",
//    authDomain: "aliraadportfolio.firebaseapp.com",
//    projectId: "aliraadportfolio",
//    storageBucket: "aliraadportfolio.appspot.com",
//    messagingSenderId: "941766089500",
//    appId: "1:941766089500:web:bcffb29d289786aefb78d9",
//    measurementId: "G-7HQL97FGF3"
//};



//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);




//// Show the modal when clicking the "I'm Ali" link
//document.getElementById('signInBtn').addEventListener('click', () => {
//    document.getElementById('signInModal').style.display = 'block';
//});

//// Close the modal when clicking the close button
//document.querySelector('.close-btn').addEventListener('click', () => {
//    document.getElementById('signInModal').style.display = 'none';
//});

//// Sign in with Google when clicking the "Sign In with Google" button
//document.getElementById('googleSignIn').addEventListener('click', () => {
//    const provider = new GoogleAuthProvider();
//    signInWithPopup(auth, provider)
//        .then((result) => {
//            console.log('User signed in:', result.user);
//            enableEditing(); // A function to enable editing mode
//            // Close the modal after successful sign-in
//            document.getElementById('signInModal').style.display = 'none';
//        })
//        .catch((error) => {
//            console.error('Error signing in:', error);
//        });
//});

