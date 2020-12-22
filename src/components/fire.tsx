import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCw08UoDfe9QMSdHBuTe7U5mnpCBnIN_U4',
  authDomain: 'exchangemaster-28ed6.firebaseapp.com',
  databaseURL:
    'https://exchangemaster-28ed6-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'exchangemaster-28ed6',
  storageBucket: 'exchangemaster-28ed6.appspot.com',
  messagingSenderId: '343397664541',
  appId: '1:343397664541:web:f07eea383363d401c983f4',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
