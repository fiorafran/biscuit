import firebase from '../../../firebase-config'

export const GoogleAuthLogin = () => {
  firebase.signInWithPopup(firebase.auth, firebase.GoogleProvider).then(result => {
    const credential = firebase.GoogleAuthProvider.credentialFromResult(result);
    console.log('credential :', credential);
    const token = credential.accessToken;
    console.log('token :', token);
    const user = result.user
    console.log('user :', user);
  })
  .catch(e => console.log(e))
}
