const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("textarea");

let nameOk = false;
let emailOk = false;
let subjectOk = false;
let messageOk = false;

nameInput.addEventListener("blur", function () {
    if (nameInput.value.length < 5) {
        nameOk = false;
        nameInput.parentElement.classList.add("error-name");
        nameInput.parentElement.classList.add("error");
        nameInput.parentElement.classList.remove("success");
    }
});

nameInput.addEventListener("keydown", function () {
    if (nameInput.value.length >= 5) {
        nameOk = true;
        nameInput.parentElement.classList.remove("error-name");
        nameInput.parentElement.classList.remove("error");
        nameInput.parentElement.classList.add("success");
    }
});

email.addEventListener("blur", function () {
    if (email.value.includes("@") && email.value.includes(".")) return;
    else {
        emailOk = false;
        email.parentElement.classList.add("error-email");
        email.parentElement.classList.add("error");
        email.parentElement.classList.remove("success");
    }
});

email.addEventListener("keydown", function () {
    if (email.value.includes("@") && email.value.includes(".")) {
        emailOk = true;
        email.parentElement.classList.remove("error-email");
        email.parentElement.classList.remove("error");
        email.parentElement.classList.add("success");
    }
});

subject.addEventListener("blur", function () {
    if (subject.value.length < 15) {
        subjectOk = false;
        subject.parentElement.classList.add("error-subject");
        subject.parentElement.classList.add("error");
        subject.parentElement.classList.remove("success");
    }
});

subject.addEventListener("keydown", function () {
    if (subject.value.length >= 15) {
        subjectOk = true;
        subject.parentElement.classList.remove("error-subject");
        subject.parentElement.classList.remove("error");
        subject.parentElement.classList.add("success");
    }
});

message.addEventListener("blur", function () {
    if (message.value.length < 25) {
        messageOk = false;
        message.parentElement.classList.add("error-message");
        message.parentElement.classList.add("error");
        message.parentElement.classList.remove("success");
    }
});

message.addEventListener("keydown", function () {
    if (message.value.length >= 25) {
        messageOk = true;
        message.parentElement.classList.remove("error-message");
        message.parentElement.classList.remove("error");
        message.parentElement.classList.add("success");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nameOk || !emailOk || !subjectOk || !messageOk) {
        if (!nameOk) {
            nameInput.parentElement.classList.add("error-name");
            nameInput.parentElement.classList.add("error");
        }
        if (!emailOk) {
            email.parentElement.classList.add("error-email");
            email.parentElement.classList.add("error");
        }
        if (!subjectOk) {
            subject.parentElement.classList.add("error-subject");
            subject.parentElement.classList.add("error");
        }
        if (!messageOk) {
            message.parentElement.classList.add("error-message");
            message.parentElement.classList.add("error");
        }
    } else {
        nameInput.parentElement.classList.remove("success");
        email.parentElement.classList.remove("success");
        subject.parentElement.classList.remove("success");
        message.parentElement.classList.remove("success");

        nameInput.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";

        form.classList.add("success-button");
    }
});

