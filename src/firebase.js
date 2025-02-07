import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";

import {
    addDoc, collection, getFirestore
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyAL6ZD8d0bmfFSJG6JTtv4WV1FycDDsbTk",
    authDomain: "netmirror-b5808.firebaseapp.com",
    projectId: "netmirror-b5808",
    storageBucket: "netmirror-b5808.firebasestorage.app",
    messagingSenderId: "1099159524373",
    appId: "1:1099159524373:web:eddab875fe13fb8662ea1c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });
    } catch (err){
        console.log(err);
        toast.error(err.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.log(err);
        toast.error(err.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};
