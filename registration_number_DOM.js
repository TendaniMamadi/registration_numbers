// DOM element references
var textArea = document.querySelector(".inputArea");
var BtnElem = document.querySelector(".addingButton");
var CityElem = document.querySelector(".Towns");
var showBtn = document.querySelector(".DisplayBtn");


// create Factory Function instance

const RegistrationApp = registrationApp();


// DOM events

BtnElem.addEventListener('click', function () {

    RegistrationApp = registrationApp();

    textArea.innerHTML = RegistrationApp.setDisplayRegistration();
});

showBtn.addEventListener('click', function () {

    RegistrationApp = registrationApp();

    CityElem.innerHTML = RegistrationApp.getDisplayRegistration();
});

