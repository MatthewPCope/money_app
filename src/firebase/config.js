import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBLOQm7rAdCZ4-9nzQX7SFxsEUI7zTuGOM",
    authDomain: "mymoney-91c45.firebaseapp.com",
    projectId: "mymoney-91c45",
    storageBucket: "mymoney-91c45.appspot.com",
    messagingSenderId: "998994293177",
    appId: "1:998994293177:web:fb60329b27db901df54668"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp =  firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}