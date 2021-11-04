const form = document.getElementById("rsvp-form");
const formMessage = document.getElementById("form-message");
form.onsubmit = function (event) {
    event.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.onload = function (e) {
        console.log(xhr);
        if (xhr.status === 200) {
            formMessage.innerHTML = "Thank you! Your RSVP has been sent to Ben & Sophie.";
        } else {
            formMessage.innerHTML = "Oops! Something went wrong when submitting the form. Ben probably messed up when he was coding this. Would you mind texting Ben to explain he messed up the form: 717-419-0478.";
        }
    };
    xhr.send(formData);
};