import React from 'react';
import Cookies from 'universal-cookie';
import './s tyle/style.css';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './Chat';

var firebaseConfig = {
    apiKey: "AIzaSyCZe5e6KS2lkCMeaxSEk0Cxfd1X_hAS8Q8",
    authDomain: "dehoctot-9088e.firebaseapp.com",
    projectId: "dehoctot-9088e",
    storageBucket: "dehoctot-9088e.appspot.com",
    messagingSenderId: "18588688778",
    appId: "1:18588688778:web:51c7284741113b9f1c2873",
    measurementId: "G-559MSK4J47"
};  

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const cookies = new Cookies();

function Login(){
    
    const [user] = useAuthState(auth);

    return(
        <div className="login">
            {user ? <SignOut/> : <SignIn/>}
        </div>
    )
}

function SignIn(){
    const signInWithGoogle = async() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
        cookies.set('username',auth.currentUser.displayName,{path:'/'});
    }

    return(
        <>
            <div className="loginForm">
                <div className="title">
                    <p className="big-title">ĐỂ HỌC TỐT</p>
                    <p className="sub-title">ĐĂNG NHẬP</p>
                </div>
                <div className="login-button">
                    <button className="signin" onClick={signInWithGoogle} >
                        <img src="https://img.icons8.com/fluent/144/000000/google-logo.png" alt="google-logo"/>
                    </button>
                </div>
            </div>            
        </>
    )
}

function SignOut(){
    return(
        <>
            <Chat/>
            <img src={auth.currentUser.photoURL} alt="user-logo"/>
            <button onClick={() => auth.signOut()}>thoat from {auth.currentUser.displayName}</button>
        </>
    )
}

export default Login;