'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const subscribeLinks = document.querySelectorAll('.card_link');
    const closeButton = document.getElementById('close');
    const modal = document.getElementById('myModal');

    subscribeLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.add('show');
            modal.focus(); 
        });
    });

    closeButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('show');
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.querySelector('.subscribe');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confimEmail');
    const emailError = document.querySelector('.errorMassage');

    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        validateForm();
    });

    emailInput.addEventListener('input', function () {
        if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email address with @.';
        } else {
            emailError.textContent = '';
        }
    });

    confirmEmailInput.addEventListener('input', function () {
        if (confirmEmailInput.value !== emailInput.value) {
            emailError.textContent = 'Emails do not match.';
        } else {
            emailError.textContent = '';
        }
    });

    function validateForm() {
        if (emailInput.value === '' || confirmEmailInput.value === '') {
            emailError.textContent = 'Please fill out email.';
        } else if (emailInput.value !== confirmEmailInput.value) {
            emailError.textContent = 'Emails do not match.';
        } else {
            subscribeForm.submit();
        }
    }

});

const MenuButton = document.querySelector("#menu_button");
const dropdown_menu = document.querySelector(".dropdown_content");
let isOpen = true;
function toggleMenu() {
    if (isOpen) {
        dropdown_menu.classList.add("open");
        dropdown_menu.focus(); 
    } else {
        dropdown_menu.classList.remove("open");
    }
    isOpen = !isOpen;
}
MenuButton.addEventListener("click", toggleMenu);
MenuButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        toggleMenu();
    }
});
MenuButton.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (isOpen) {
            dropdown_menu.classList.remove("open");
        }
    }
});

