
let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}





let sideMenu = document.getElementById("sideMenu");

function openmenu() {
    sideMenu.style.right = "0";
}

function closemenu() {
    sideMenu.style.right = "-200px";
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbxk4C_HfvgigYpfKb_Ftq1i1UFRDWQpiKTcLHLL_utwRT184j7d5_wBB0QO65U9CowlaA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully."
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


/* Animation for name */

let typed = new Typed('.name', {
    strings: [`Ankit Kapoor`],
    typeSpeed: 100,
    backSpeed: 0,
    // backDelay: 100,
    startDelay: 600,
    // fadeOut:100;
    fadeOut:true,        
    loop: true
});
