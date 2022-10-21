import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCawN7URHchO7vk1NEiP1sQXuPDnyXdJ6E",
  authDomain: "graphql-project-1337.firebaseapp.com",
  projectId: "graphql-project-1337",
  storageBucket: "graphql-project-1337.appspot.com",
  messagingSenderId: "1050812297091",
  appId: "1:1050812297091:web:260cc842ee71b293a3d0b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const { uid, displayName, email } = userAuth;
  const userDocRef = doc(db, "users", uid);
  //   console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log("err creating user! : ", err.message);
    }
  }
  return userDocRef;
};