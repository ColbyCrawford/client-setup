import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"
import { generalInfoForm } from "/js/forms.js"

const appSettings = {
    databaseURL: "https://client-setup-fc38c-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const formsInDB = ref(database, "forms")

generalInfoForm.addEventListener("submit", e => {
    e.preventDefault()

    const formData = new FormData(generalInfoForm)
    const formDataObj = Object.fromEntries(formData)

    push(formsInDB, formDataObj)
})