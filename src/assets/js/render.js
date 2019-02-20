export default class Render {
    
    constructor(database){
        this.db = database
    }

    contacts(){
        this.db.get('/contatos', (data) => {
            let count = 1
            document.getElementById('list').innerHTML = ''
            data.forEach(e => {
                document.getElementById('list').insertAdjacentHTML('beforeend', `<option value="${e.val().id}">${e.val().name} ${e.val().phone}</option>`)
            })
        })
    }

}