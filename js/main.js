const nextButton = document.getElementById("next-button")
const backButton = document.getElementById("back-button")

const steps = [1, 2, 3, 4]

nextButton.addEventListener("click", () => {
    let currentStep = getCurrentStep()
    let nextStep = currentStep.nextElementSibling

    if (nextStep != null) {
        currentStep.removeAttribute("aria-current")
        nextStep.setAttribute("aria-current", "step")
    }
})

backButton.addEventListener("click", () => {
    let currentStep = getCurrentStep()
    let prevStep = currentStep.previousElementSibling

    if (prevStep != null) {
        currentStep.removeAttribute("aria-current")
        prevStep.setAttribute("aria-current", "step")
    }
})

function getCurrentStep() {
    return document.querySelector("[aria-current='step']")
}



