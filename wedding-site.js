let numberOfNames = 2;

const addNameButton = document.getElementById('addName');
const nameGroup = document.getElementById('nameGroup');

addNameButton.addEventListener('click', (e) => {
    e.preventDefault();

    numberOfNames += 1;

    if (numberOfNames <= 6){
        nameGroup.insertAdjacentHTML('beforeend', `
            <div class="form-group">
                <input type="text" id="name-${numberOfNames}" name="Name ${numberOfNames}" placeholder="Type name here" required/>
                <div class="radio-group">
                    <div class="attending-group">
                        <input type="radio" id="attending-${numberOfNames}" name="Name ${numberOfNames} Status" value="Will attend" checked>
                        <label for="attending-${numberOfNames}">Attending</label>
                    </div>
                    <div class="attending-group">
                        <input type="radio" id="not-attending-${numberOfNames}" name="Name ${numberOfNames} Status" value="Will not attend">
                        <label for="not-attending-${numberOfNames}">Not Attending</label>
                    </div>
                </div>
            </div>
        `);
    } else {
        addNameButton.style.display = 'none';
    }

})

var form = document.getElementById("rsvp");
var formMessage = document.getElementById("form-message");
form.onsubmit = function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.onload = function (e) {
        console.log(xhr);
        if (xhr.status === 200) {
            formMessage.innerHTML = "Thank you! You RSVP has been sent to Ben & Sophie.";
        } else {
            formMessage.innerHTML = "Oops! Something went wrong when submitting the form. Ben probably messed up when he was coding this. Would you mind texting Ben to explain he messed up the form: 717-419-0478.";
        }
    };
    xhr.send(formData);
};