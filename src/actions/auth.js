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

/* export const loginWithEmail = (email) => ({
  type: 'LOGIN_WITH_EMAIL',
  email
});

export const startRegisterWithEmail = () => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  };
};
 */