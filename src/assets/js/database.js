import Firebase from 'firebase'
import 'firebase/database'
import { error } from 'util';

export default class Database {

    constructor(){
        this.config = {};
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