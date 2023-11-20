export function getCurrentStep() {
    return document.querySelector("[aria-current='step']")
}

export const formHeadlinesArray = Array.from(document.querySelectorAll(".client-form__headline"))

export const generalInfoForm = document.getElementById("general-info-form")

export const nextButton = document.getElementById("next-button")