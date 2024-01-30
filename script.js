function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
} 




window.onscroll = function() {
    var scrollUpBtn = document.getElementById('scroll-up-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = 'block';
    } 
    
    else {
        scrollUpBtn.style.display = 'none';
    }
};

function sendEmail(){  
    var name=document.getElementById("name").value;  
    var email=document.getElementById("email").value;  
    var body=document.getElementById("body").value;
    window.open('index.html');  
}
