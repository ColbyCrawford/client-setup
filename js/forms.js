export const generalInfoForm = document.getElementById("general-info-form")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phone-number")
const company = document.getElementById("company")
const country = document.getElementById("country")

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(".input-error")

    errorDisplay.innerText = message
    inputControl.classList.add("error")
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(".input-error")

    errorDisplay.innerText = ""
    inputControl.classList.add("success")
    inputControl.classList.remove("error")
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const isValidPhoneNumber = phoneNumber => {
    const re = /[^\d]/g
    return re.test(String(phoneNumber).toLowerCase)
}

firstName.addEventListener("input", () => {
    const firstNameValue = firstName.value.trim()
    if (firstNameValue === "") {
        setError(firstName, "First name is required")
    } else {
        setSuccess(firstName)
    }
})

lastName.addEventListener("input", () => {
    const lastNameValue = lastName.value.trim()
    if (lastNameValue === "") {
        setError(lastName, "Last name is required")
    } else {
        setSuccess(lastName)
    }
})

email.addEventListener("input", () => {
    const emailValue = email.value.trim()
    if(emailValue === "") {
        setError(email, "Email is required")
    } else if (isValidEmail(emailValue) === false) {
        setError(email, "Provide a valid email address")
    } else {
        setSuccess(email)
    }
})



const countryValue = country.value.trim()

phoneNumber.addEventListener("keydown", (e) => {
    const phoneNumberValue = phoneNumber.value.trim()
    const phoneNumberInts = removeNonInts(phoneNumberValue)
    const phoneNumberLength = phoneNumberInts.length

    if (isNaN(e.key) || e.key === " ") {
        if (e.key === "Backspace" || e.key === "ArrowRight" || e.key === "ArrowLeft") {
            return 
        } else {
            e.preventDefault()
            setError(phoneNumber, "Only digits 0-9 accepted")
        }
    } else if (phoneNumberValue === " ") {
        setError(phoneNumber, "Phone number is required")
    } else if (phoneNumberLength === 3) {
        phoneNumber.value = `(${phoneNumberInts.slice(0, 3)}) `
    } else if (phoneNumberLength === 6) {
        phoneNumber.value = `(${phoneNumberInts.slice(0, 3)}) ${phoneNumberInts.slice(3, 6)}-`
    } else if (phoneNumberLength === 9) {
        phoneNumber.value = `(${phoneNumberInts.slice(0, 3)}) ${phoneNumberInts.slice(3, 6)}-${phoneNumberInts.slice(6, 9)}`
        setSuccess(phoneNumber)
    } else if (phoneNumberLength >= 10) {
        e.preventDefault()
    }
})

company.addEventListener("input", () => {
    const companyValue = company.value.trim()
    if (companyValue === "") {
        setError(company, "Company is required")
    } else {
        setSuccess(company)
    }
})

function removeNonInts(string) {
    const valuesArray = Array.from(string)
    const filteredArrayOne = valuesArray.filter((value) => {
        return !isNaN(value)
    })
    const filteredArrayTwo = filteredArrayOne.filter((value) => {
        return value !== " "
    })
    return filteredArrayTwo.join("")
}
