//Main menu - white background on scroll!!
const mainNavbar = document.querySelector('.navbar');

function mainNavbarBackground() {
    const scrollValue = window.scrollY;

    if (scrollValue > 100) {
        mainNavbar.classList.add('active');
    } else {
        mainNavbar.classList.remove('active');
    }
}
document.addEventListener('scroll', mainNavbarBackground);

//Main menu - active section
function activeMenuSection() {

    //Scroll Value 
    const scrollValue = window.scrollY;

    // Get nav__link from Desktop menu
    const navLinks = [...document.querySelectorAll('.nav-item')];

    // Section from Top of the screen (in px)
    const sectionsFromTop = [
        document.querySelector('.header').offsetTop,
        document.querySelector('.about').offsetTop,
        document.querySelector('.services').offsetTop,
        document.querySelector('.gallery').offsetTop,
        document.querySelector('.blog').offsetTop,
        document.querySelector('.contact').offsetTop
    ];

    navLinks.forEach((navLink, i) => {
        if (scrollValue > sectionsFromTop[i] && scrollValue < sectionsFromTop[i + 1]) {
            navLinks[i].classList.add('active');
        } else {
            navLinks[i].classList.remove('active');
        }
    });

};
window.addEventListener('scroll', activeMenuSection);

//Services
btnsServices = document.querySelectorAll('.btn-services');
servicesTextContent = [...document.querySelectorAll('.services .textContent')];

btnsServices.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        if (index == servicesTextContent[index].dataset.content) {
            servicesTextContent[index].classList.toggle('active');
        }
    });
});

//Gallery
var $galleryBtn = $(".gallery .btn.btn-view");
let btnActive = true;

$galleryBtn.on("click", function () {
    $(".wrapper-hide").slideToggle(400);
    if (btnActive) {
        // galleryBtn.textContent = "Show less";
        $galleryBtn.text('Show less');
    } else if (!btnActive) {
        // galleryBtn.textContent = "View more";
        $galleryBtn.text('View more');
    }
    btnActive = !btnActive;
});

//Smooth scroll

//smooth scroll nav items
$(".nav-link").on("click", function () {
    const menuItem = $(this).attr("href");
    $("body, html").animate(
        {
            scrollTop: $(menuItem).offset().top
        },
        2000
    );
});