export default class Render {
    
    constructor(database){
        this.db = database
    }

    contacts(){
        this.db.getContacts((data) => {
            let count = 1
            document.getElementById('list').innerHTML = ''
            data.forEach(e => {
                if(count == 1){
                    document.getElementById('iId').value = e.val().id
                    count++
                }
                document.getElementById('list').insertAdjacentHTML('beforeend', `<option>ID: ${e.val().id} - ${e.val().name} ${e.val().phone}</option>`)
            })
        })
    }

}