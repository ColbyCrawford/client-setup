const nextButton = document.getElementById("next-button")
const backButton = document.getElementById("back-button")
const formHeadlinesArray = 
Array.from(document.querySelectorAll(".client-form__headline"))
const formContentsArray = 
Array.from(document.querySelectorAll(".client-form__content"))

changeStep()

nextButton.addEventListener("click", () => {
    let currentStep = getCurrentStep()
    let nextStep = currentStep.nextElementSibling

    if (nextStep != null) {
        currentStep.removeAttribute("aria-current")
        currentStep.setAttribute("data-complete", "true")
        nextStep.setAttribute("aria-current", "step")
        changeStep()
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
    }
})

function getCurrentStep() {
    return document.querySelector("[aria-current='step']")
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


