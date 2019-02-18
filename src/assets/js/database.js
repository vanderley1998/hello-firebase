import Firebase from 'firebase'
import 'firebase/database'
import { error } from 'util';

export default class Database {

    constructor(){
        this.config = {
            apiKey: "AIzaSyDS0OPAPWxXzPBsHCk4XkpQrsXcXYJFfH8",
            authDomain: "hello-firebase-cdd76.firebaseapp.com",
            databaseURL: "https://hello-firebase-cdd76.firebaseio.com",
            projectId: "hello-firebase-cdd76",
            storageBucket: "hello-firebase-cdd76.appspot.com",
            messagingSenderId: "906217691288"
          };
          Firebase.initializeApp(this.config);
          this.db = Firebase.database()
    }

    async getContacts(callback){
        return await this.db.ref('/contacts').on('value', (snapshot) => {
            if(callback){
                callback(snapshot)
            }
        })
    }

    deleteContact(id){
        this.db.ref(`/contacts/${id}`).remove()
    }

    createContact(item){
        const id = this.db.ref('/contacts').push().key
        this.db.ref(`/contacts/${id}`).set({
            id,
            ...item
        }, (error) => {
            if(error){
                console.error(error)
            }
        })
    }

}