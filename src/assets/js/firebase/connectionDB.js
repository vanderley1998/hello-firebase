import Firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import Database from './database'
import Auth from './auth'

export default class ConnectionDB {

    constructor(){
        this.config = {}
        Firebase.initializeApp(this.config)
        this.database = new Database(Firebase.database())
        this.auth = new Auth(Firebase.auth())
    }

}