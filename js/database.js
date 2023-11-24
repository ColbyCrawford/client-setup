import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"
import { getCurrentStep, formsArray } from "/js/utilities.js"
const appSettings = {
    databaseURL: "https://client-setup-fc38c-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

for (const form of formsArray) {
    form.addEventListener("submit", e => {
        e.preventDefault()
        const formData = new FormData(form)
        const formDataObj = Object.fromEntries(formData)
        console.log(formDataObj)
        
        pushFormToDB(formDataObj)
    })
}

function pushFormToDB(form) {
    let formName = getCurrentStep().previousElementSibling.textContent
    set(ref(database, "forms/" + formName), form)
}


