import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: "AIzaSyAqVMLLEH3EZgzpHksr2CmM3Sm0YfN6g48",
	authDomain: "showingguide.firebaseapp.com",
	projectId: "showingguide",
	storageBucket: "showingguide.appspot.com",
	messagingSenderId: "760225629266",
	appId: "1:760225629266:web:4563f0d397d115e258cb8b"
};
const app = initializeApp( firebaseConfig );
export const auth = getAuth( app );