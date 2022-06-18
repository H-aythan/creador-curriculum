import { initializeApp} from 'firebase/app';
import {getAuth}from 'firebase/auth'
import {getFirestore,doc,setDoc,getDoc,collection,getDocs}from 'firebase/firestore'
import {getStorage,ref,uploadString,getDownloadURL}from 'firebase/storage'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const fire =initializeApp(config);
const auth =getAuth(fire)
const db=getFirestore(fire)
export {db,auth,doc,setDoc,getDoc,collection,getDocs,uploadString,ref,getStorage,getDownloadURL}
export default fire;
