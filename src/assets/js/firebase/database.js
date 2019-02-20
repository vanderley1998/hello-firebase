export default class Database {

    constructor(database) {
        this.db = database
    }

    async get(url, callback, sync = true) {
        if(sync){ return await this.db.ref(url).on('value', (snapshot) => (callback) ? callback(snapshot) : null) }
        else { return await this.db.ref(url).once('value').then((snapshot) => (callback) ? callback(snapshot) : null) }
    }

    async delete(url) {
        let successful = false
        await this.db.ref(url).remove((error) => {
            if (error) { console.log(error) }
            else { successful = true }
        })
        return successful
    }

    async save(url, item) {
        let id = -1
        let successful = false
        if (item.id) {
            id = item.id
            item.name = item.name.concat(' - updated')
        }
        else { id = this.db.ref(url).push().key }
        try {
            await this.db.ref(`/${url}/${id}`).set({ id, ...item }, function (error) {
                if (error) { throw error } 
                else { successful = true }
            })
        } catch (e) {
            console.error(e)
        }
        return successful
    }

}