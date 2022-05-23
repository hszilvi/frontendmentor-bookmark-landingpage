
// hamburger menu / mobile version
const buttonBoxHamburger = document.querySelector('.dropdown_hamburger');
const openHamburger = document.querySelector('#nav_content_mobile');
const buttonBoxHamburger2 = document.querySelector('.dropdown_hamburger_two');
buttonBoxHamburger.addEventListener('click', () => {
    if (openHamburger.style.display === 'block') {
        openHamburger.style.display = 'none';
    } else {
        openHamburger.style.display = 'block';
    }
})
buttonBoxHamburger2.addEventListener('click', () => {
    if (openHamburger.style.display === 'none') {
        openHamburger.style.display = 'block';
    } else {
        openHamburger.style.display = 'none';
    }
});

// tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('clicked');
        });
        target.classList.add('active');
        tab.classList.add('clicked');      
    });
});

// accordion
const accordionBtn = document.querySelectorAll('.accordion__question');
accordionBtn.forEach((item) => {
    item.addEventListener('click', (event) => {
        if (!item.classList.contains('open')) {
            item.nextElementSibling.style.display = 'block';
            setTimeout(() => {
                item.nextElementSibling.style.display = 'block';
            }, 300);
        } else {
            item.nextElementSibling.style.display = 'none';
            setTimeout(() => {
                item.nextElementSibling.style.display = 'none';
            }, 300);
        };
        item.classList.toggle('open');  
    });
});

// email validation
const alertMsg = document.querySelector('.wrong_email');
const validationBtn = document.querySelector('#contact_button');
const emailContainer = document.querySelector('.email_input_container');
const emailField = document.querySelector('.email');
const exclMark = document.querySelector('#excl_mark');

validationBtn.addEventListener('click', e => {
    e.preventDefault();

    const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const email = document.querySelector('.email');

    if (email.value === "") {
        alertMsg.style.display = 'block';
        exclMark.style.display = 'block';
        emailContainer.classList.add('active');
        emailField.classList.add('invalid');
        alertMsg.innerHTML = "Whoops, make sure it's an email";
    } else if (!regex.test(email.value)) {
        alertMsg.style.display = 'block';
        exclMark.style.display = 'block';
        emailContainer.classList.add('active');
        emailField.classList.add('invalid');
        alertMsg.innerHTML = "Whoops, make sure it's an email";
    } else {
        email.value = "";
        alertMsg.innerHTML = "";
        emailContainer.classList.remove('active');
        emailField.classList.remove('invalid');
        alertMsg.style.display = 'none';
        exclMark.style.display = 'none';
    }
});