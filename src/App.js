import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState} from 'react-firebase-hooks/auth'
import { useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({

  apiKey: "AIzaSyDn2Ok63a_zJZrONv0FoClsZEsaioUiwLo",
  authDomain: "chat-app-282ed.firebaseapp.com",
  projectId: "chat-app-282ed",
  storageBucket: "chat-app-282ed.appspot.com",
  messagingSenderId: "1021414751252",
  appId: "1:1021414751252:web:48751a6a281c8799babb01",
  measurementId: "G-F2VYQ55V9B"

})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>
       
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function ChatRoom() {}

export default App;
