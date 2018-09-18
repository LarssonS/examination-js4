import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB2yWbFkO3w8H9LRONGeEbsPpaxqGx0F5s",
  authDomain: "movie-hub-a9f70.firebaseapp.com",
  databaseURL: "https://movie-hub-a9f70.firebaseio.com",
  projectId: "movie-hub-a9f70",
  storageBucket: "movie-hub-a9f70.appspot.com",
  messagingSenderId: "956507158734"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
