btnsServices = document.querySelectorAll('.btn-services');
servicesTextContent = [...document.querySelectorAll('.services .textContent')];


btnsServices.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        if (index == servicesTextContent[index].dataset.content) {
            servicesTextContent[index].classList.toggle('active');
        }
    });
});

