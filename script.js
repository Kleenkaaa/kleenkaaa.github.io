document.addEventListener('DOMContentLoaded', function () {
    // Carousel code
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    if (prevButton && nextButton && track && items.length > 0) {
        prevButton.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function () {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        // Initial update
        updateCarousel();
    } else {
        console.log('Carousel elements not found or no items available.');
    }

    // About items animation code
    const aboutItems = document.querySelectorAll('.about-item');

    if (aboutItems.length > 0) {
        aboutItems.forEach((item, index) => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    } else {
        console.log('No about items found.');
    }

    // Appointment modal code
    const modal = document.getElementById('appointmentModal');
    const openModalButtons = document.querySelectorAll('.appointment-btn');
    const closeModalButton = document.querySelector('.close');
    const appointmentForm = document.querySelector('.appointment-form');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = 'block';
        });
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    appointmentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        modal.style.display = 'none';
        showDialog();
    });

    // Dialog modal code
    const dialogModal = document.getElementById('dialogModal');
    const dialogOkButton = document.getElementById('dialogOkButton');

    function showDialog() {
        dialogModal.style.display = 'block';
        setTimeout(() => {
            dialogModal.style.display = 'none';
        }, 10000); // 10 секунд
    }

    dialogOkButton.addEventListener('click', function () {
        dialogModal.style.display = 'none';
    });

    const priceList = document.getElementById('price-list');
    const categoryButtons = document.querySelectorAll('.category-btn');

    function displayServices(filteredServices) {
        priceList.innerHTML = '';
        filteredServices.forEach(service => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${service.name}</td><td>${service.price}</td>`;
            priceList.appendChild(row);
        });
    }

    if (priceList && categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                const filteredServices = services.filter(service => service.category === category);
                displayServices(filteredServices);
            });
        });

        // Відображення всіх послуг за замовчуванням
        displayServices(services);
    } else {
        console.log('Price list or category buttons not found.');
    }
});