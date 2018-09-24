import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const startOnSubmit = (email, password) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(console.log("Created User!"))
    .catch(error => console.log(error));
}

export const startOnLogin = (email, password) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => console.log(error))
}
