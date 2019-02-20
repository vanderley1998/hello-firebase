import Render from './assets/js/render'
import ConnectionDB from './assets/js/firebase/connectionDB';

class Index {

    constructor() {
        this.conn = new ConnectionDB()
        this.render = new Render(this.conn.database)
        this.render.contacts()
        this.eventos()
    }

    eventos() {
        document.getElementById('bDelete').onclick = () => {
            const id = document.getElementById('list').value
            this.conn.database.delete(`/contatos/${id}`)
        }

        document.getElementById('bCreate').onclick = () => {
            const item = {
                name: "Teste",
                phone: new Date().getMilliseconds()
            }
            this.conn.database.save('/contatos', item)
        }

        document.getElementById('bUpdate').onclick = () => {
            const id = document.getElementById('list').value
            this.conn.database.get('/contatos', (data) => {
                const item = data.child(id).val()
                this.conn.database.save('/contatos', item)
            }, false)
        }
    }
}

new Index()