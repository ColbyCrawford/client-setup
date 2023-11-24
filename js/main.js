import { getCurrentStep, formHeadlinesArray, nextButton } from "/js/utilities.js"

const selectElementsArray = Array.from(document.querySelectorAll("select"))
const backButton = document.getElementById("back-button")
const formContentsArray = 
Array.from(document.querySelectorAll(".client-form__content"))

changeStep()

selectElementsArray.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("is-open")
    })
})

nextButton.addEventListener("click", () => {
    let currentStep = getCurrentStep()
    let nextStep = currentStep.nextElementSibling

    if (nextStep != null) {
        currentStep.removeAttribute("aria-current")
        currentStep.setAttribute("data-complete", "true")
        nextStep.setAttribute("aria-current", "step")
        changeStep()
        syncFormToNextButton()
    }
})

backButton.addEventListener("click", () => {
    let currentStep = getCurrentStep()
    let prevStep = currentStep.previousElementSibling

    if (prevStep != null) {
        currentStep.removeAttribute("aria-current")
        prevStep.removeAttribute("data-complete")
        prevStep.setAttribute("aria-current", "step")
        changeStep()
        syncFormToNextButton()
    }
})


function syncFormToNextButton() {
    let formName = getCurrentStep().textContent.toLowerCase()
    formName = formName.replaceAll(" ", "-")

    setTimeout(() => {
        nextButton.setAttribute("form", `${formName}-form`)
    }, "1000")
}

function getCurrentStepIndex() {
    let stepElement = getCurrentStep()

    for (let i = 0; i < formHeadlinesArray.length; i++) {
        if (stepElement === formHeadlinesArray[i]) {
            return i
        }
    }
}

function changeStep() {
    let currentStepIndex = getCurrentStepIndex()
    for (let i = 0; i < formContentsArray.length; i++) {
        if (i !== currentStepIndex) {
            formContentsArray[i].style.display = "none"
        } else {
            formContentsArray[i].style.display = "block"
        }
    }
}


