// Firebase Connect
document.addEventListener('DOMContentLoaded', function() {
const firebaseConfig = {
    apiKey: "AIzaSyB5GRSAqafOC0lqo6CHvugGcfSfMT-UZtw",
    authDomain: "final-project-praetorian.firebaseapp.com",
    databaseURL: "https://final-project-praetorian-default-rtdb.firebaseio.com",
    projectId: "final-project-praetorian",
    storageBucket: "final-project-praetorian.appspot.com",
    messagingSenderId: "63654235283",
    appId: "1:63654235283:web:6ac8678b95da22e28c1166",
    measurementId: "G-JDPM46Q96K"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactForm')

  document.getElementById('contactForm').addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailId = getElementVal('email');
    var msgContent = getElementVal('msg');
    var telephone = getElementVal('phone');

    saveMessages(name, emailId, msgContent, telephone);
  }

  const saveMessages = (name, emailId, msgContent, telephone) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailId : emailId,
        msgContent : msgContent,
        telephone : telephone
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
});

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
    },

    breakpoints: {
        576:  {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768:  {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

document.getElementById('contactForm').addEventListener('submit', (event)=>{
    event.preventDefault()
    // console.log("test");
    const useremail= document.getElementById('email').value

    const username=document.getElementById('name').value

    if(!useremail.endsWith('@gmail.com')){
        alert('Email must ends with @gmail.com')
        return
    }

    if(username.length < 1){
        alert('Name length must be more than 1 character')
        return
    }

    alert('Registration Success')
    window.location.href = 'index.html';
})

var errorName = document.getElementById('err-name');
var errorEmail = document.getElementById('err-email');
var errorPhone = document.getElementById('err-phone');
var errorMessage = document.getElementById('err-msg');
var errorForm = document.getElementById('contactForm');

function validateName(){
    var username = document.getElementById('name').value;

    if(username.length <= 1){
        errorName.innerHTML = '*Name must be more than 1 character';
        return false;
    }
    errorName.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phonenumber = document.getElementById('phone').value;

    if(phonenumber.length > 14){
        errorPhone.innerHTML = '*Phone number must not be more than 14 digits';
        return false;
    }
    if (!phonenumber.match(/^08[0-9]{0,12}$/)) {
        errorPhone.innerHTML = '*Phone number must start with "08" and contain only digits';
        return false;
    }

    errorPhone.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var usermail = document.getElementById('email').value;

    if(!usermail.endsWith('gmail.com')){
        errorEmail.innerHTML = '*Email invalid';
        return false;
    }

    errorEmail.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateComment(){
    var message = document.getElementById('msg').value;

    if(message.length <= 5){
        errorMessage.innerHTML = '*Message must be 5 characters or more';
        return false;
    }
    if(message.length > 100){
        errorMessage.innerHTML = '*Message must be less than 100 characters';
        return false;
    }
    errorMessage.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        errorForm.innerHTML = '*Please enter correct data';
        return false;
    }
}

ScrollReveal().reveal('.section', {
    duration: 1000, 
    origin: 'bottom', 
    distance: '20px', 
    delay: 200, 
    easing: 'ease', 
    reset: true, 
});



