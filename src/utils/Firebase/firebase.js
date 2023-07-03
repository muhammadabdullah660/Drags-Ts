import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp4-tX7NOnzNMa2I0ROq61tYcCUKH9GUs",
  authDomain: "drags-1d298.firebaseapp.com",
  projectId: "drags-1d298",
  storageBucket: "drags-1d298.appspot.com",
  messagingSenderId: "519013187721",
  appId: "1:519013187721:web:9209977e18db6c76150658",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();
// to add collection and documents to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //to get a collection reference
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    //to get a new document reference
    const newDocRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(newDocRef, object);
  });
  return await batch.commit();
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  // query: A Query refers to a Query which you can read or listen to. You can also construct refined Query objects by adding filters and ordering.
  const q = query(collectionRef);
  // querySnapshot: A QuerySnapshot contains zero or more DocumentSnapshot objects representing the results of a query. The documents can be accessed as an array via the docs property or enumerated using the forEach method. The number of documents can be determined via the empty and size properties.
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((accumulator, doc) => {
    const { title, items } = doc.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
  return categoryMap;
};
//to create a user profile document in firestore
export const createUserProfileDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  //to check if the user is signed in
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnap = await getDoc(userDocRef);
  //console.log(userDocSnap.exists());
  // if the user is not signed in then create a user profile document in firestore
  if (!userDocSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
      //alert("Account created successfully");
    } catch (error) {
      console.log(error);
    }
  }
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutAuthUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
