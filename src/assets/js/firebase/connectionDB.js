import Firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import Database from './database'
import Auth from './auth'

export default class ConnectionDB {

    constructor(){
        this.config = {
            apiKey: "AIzaSyDS0OPAPWxXzPBsHCk4XkpQrsXcXYJFfH8",
            authDomain: "hello-firebase-cdd76.firebaseapp.com",
            databaseURL: "https://hello-firebase-cdd76.firebaseio.com",
            projectId: "hello-firebase-cdd76",
            storageBucket: "hello-firebase-cdd76.appspot.com",
            messagingSenderId: "906217691288"
        }
        Firebase.initializeApp(this.config)
        this.database = new Database(Firebase.database())
        this.auth = new Auth(Firebase.auth())
    }

}