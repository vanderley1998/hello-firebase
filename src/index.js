import Render from './assets/js/render'
import Database from './assets/js/database'

const db = new Database()
const render = new Render(db)

render.contacts()

document.getElementById('bDelete').onclick = () => {
    const id = document.getElementById('iId').value
    console.log(id)
    db.deleteContact(id)
}

document.getElementById('bCreate').onclick = () => {
    const item = {
        name: "Teste",
        phone: "234234"
    }
    db.createContact(item)
}