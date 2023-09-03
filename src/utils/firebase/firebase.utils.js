// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider } from 'firebase/auth'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
/**
 * This line imports the initializeApp function from the Firebase app module. The initializeApp function
 *  is used to set up 
 * and initialize the Firebase application in your web project.
 */
// Your web app's Firebase configuration
const firebaseConfig = {
  xx: 1,
  apiKey: "AIzaSyBPMcx8TlZryYLVn-dZBXyGSl9LaQv9L1c",
  authDomain: "crown-clothing-db-3d800.firebaseapp.com",
  projectId: "crown-clothing-db-3d800",
  storageBucket: "crown-clothing-db-3d800.appspot.com",
  messagingSenderId: "1041850483979",
  appId: "1:1041850483979:web:b16696f7b45d6bbd964e0e"
};
/**
 * This object, firebaseConfig, contains configuration information for connecting your web application
 *  to a specific Firebase project. Each property corresponds to a different aspect of your Firebase project setup,
 *  such as the API key,
 *  authentication domain, project ID, storage bucket, messaging sender ID, and app ID.
 *  These values are specific to your Firebase project and can be obtained from the Firebase
 *  Console when you create a new project.
 */
// Initialize Firebase
const app = initializeApp(firebaseConfig);
/**
 * This line initializes the Firebase app using the provided configuration object (firebaseConfig).
 *  It creates a connection between your web application and the Firebase project defined by the configuration settings.
 *  The app variable holds the initialized Firebase app instance,
 *  which you can then use to access various Firebase services like authentication, database, storage, etc.
 */
//##################################################
/**
 * getFirestore: This function is used to initialize and access a Firestore database instance.
 * It's typically the starting point for interacting with Firestore.
 */
/**
 * doc: This function is used to reference a specific document within a Firestore collection.
 *  It's often used to perform operations on individual documents,
 *  such as reading or writing data.
 */
/**
 * getDoc: This function is used to retrieve the contents of a specific document as a snapshot.
 *  It's commonly used to read data from a Firestore document.
 * 
  setDoc: This function is used to write data to a specific Firestore document.
  It allows you to set or overwrite the contents of a document with new data.
 */
let googleProvider = new GoogleAuthProvider()
/**
 * googleProvider: This likely refers to an instance of the GoogleAuthProvider class from the Firebase Authentication library.
 * This provider is used for handling authentication using Google accounts.
 */
googleProvider.setCustomParameters({
  prompt: 'select_account'
})
/**
 * setCustomParameters(): This is a method provided by the GoogleAuthProvider class to set custom parameters for the authentication process.
 * these parameters can modify how the authentication interaction occurs.
 *{ prompt: 'select_account' }: This is an object that you're passing to the setCustomParameters() method. In this case, the parameter you're setting is prompt, and you're giving it the value 'select_account'.

  The meaning of this code is to customize the behavior of the Google authentication sign-in flow.
  The prompt parameter, when set to 'select_account', indicates that when a user initiates the Google sign-in process,
  they should be prompted to select the Google account they want to use for signing in.
  This can be useful in scenarios where a user might have multiple Google accounts linked to their device/browser,
  and you want to ensure that they can explicitly choose which account to use for authentication.
 */
export let auth = getAuth()
/**
 * getAuth: This function is used to initialize and access the Firebase Authentication service.
 *  It provides the entry point for various authentication-related operations.
 */
export let signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider)
}
let db = getFirestore()
export let createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  let userDocRef = doc(db, 'users', userAuth.uid)
  /**
   * The userDocRef in the provided code snippet represents a reference to a specific document in a Firestore database collection named "users."
   *  Firestore is a NoSQL database offered by Google Cloud Platform that allows you to store and sync data in real-time between clients
   *  and the cloud
   */
  let userSnapshot = await getDoc(userDocRef)
  /**
   * getDoc(userDocRef): This part of the line is calling the getDoc() function, which is used to
   *  asynchronously fetch the data of a Firestore document. It takes a single argument,
   *  which is the document reference (userDocRef) pointing to the specific document you want to retrieve data from.
   */
  // console.log(userSnapshot)
  /**
   *  you're logging the entire DocumentSnapshot object. This object contains various properties and methods that allow you
   *  to interact with the data and metadata of the snapshot.
   */
  // console.log(userSnapshot.exists())
  /**
   * The exists() method is a method provided by the DocumentSnapshot object. It returns a boolean value that indicates whether the document
   *  associated with the snapshot exists in the database. If the document exists, it returns true;
   */
  console.log(additionalInfo)
  if (!userSnapshot.exists()) {
    let { displayName, email } = userAuth
    let createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt, ...additionalInfo
      })
    } catch (error) {
      console.log('Error')
    }
  }
  return userDocRef
}
export let signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password)
    return
  return await signInWithEmailAndPassword(auth, email, password)
}
export let createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password)
    return;
  return await createUserWithEmailAndPassword(auth, email, password)
}