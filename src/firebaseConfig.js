import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
	apiKey: "AIzaSyBU1zPfWDlVsKdPHtFZVIAa6pvkLPkkmY4",
	authDomain: "vuegram-3a97c.firebaseapp.com",
	databaseURL: "https://vuegram-3a97c.firebaseio.com",
    projectId: "vuegram-3a97c",
    storageBucket: "vuegram-3a97c.appspot.com",
    messagingSenderId: "1001488218994"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}