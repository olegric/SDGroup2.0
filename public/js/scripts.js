const carousel = new bootstrap.Carousel('#myCarousel');

    // Дублюємо елементи для створення ефекту безкінечної каруселі з кількома слайдами
   
  
function scrollToFooter() {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });

};

function showServiceDetails(index) {
    const services = i18next.t('services.servicesList', { returnObjects: true });
    const service = services[index];

    $('#service-title').text(service.title);
    $('#service-description').text(service.description);
    $('.service-details').fadeIn();
};



$(document).ready(function() {
    const track = document.querySelector('.comment-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const comments = Array.from(track.children);

let currentIndex = 0;

function updateTrackPosition() {
const trackWidth = track.clientWidth;
const currentTranslateX = -currentIndex * (comments[0].clientWidth + 20); // Adjust 20px for margin
track.style.transform = `translateX(${currentTranslateX}px)`;
}

prevBtn.addEventListener('click', () => {
if (currentIndex > 0) {
currentIndex--;
updateTrackPosition();
}
});

nextBtn.addEventListener('click', () => {
if (currentIndex < comments.length - 1) {
currentIndex++;
updateTrackPosition();
}
});

window.addEventListener('resize', updateTrackPosition);
});

$(document).ready(function() {
    const track = $('.carousel-track');
    const cars = $('.car-card');
    let currentIndex = 0;
    const totalCars = cars.length;
    const carWidth = cars.outerWidth(true);

    let startX = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;
    let dragging = false;

    function updateCars() {
        track.css('transform', `translateX(${currentTranslate}px)`);
    }

    // Початок свайпу
    $('.car-overflow').on('touchstart', function(e) {
        startX = e.touches[0].clientX;
        dragging = true;
    });

    // Рух під час свайпу
    $('.car-overflow').on('touchmove', function(e) {
        if (!dragging) return;

        const currentX = e.touches[0].clientX;
        const deltaX = currentX - startX;
        currentTranslate = previousTranslate + deltaX;

        track.css('transform', `translateX(${currentTranslate}px)`);
    });

    // Завершення свайпу
    $('.car-overflow').on('touchend', function() {
        dragging = false;

        // Оновлюємо позицію попереднього свайпу
        previousTranslate = currentTranslate;

        // Перевірка на межі каруселі
        if (currentTranslate > 0) {
            currentTranslate = 0;
        } else if (Math.abs(currentTranslate) > (totalCars - 1) * carWidth) {
            currentTranslate = -(totalCars - 1) * carWidth;
        }

        // Анімуємо фінальне положення
        updateCars();
        previousTranslate = currentTranslate;
    });

    updateCars();
});

$(document).ready(function() {
    const track = $('.carousel-track');
    const cars = $('.car-card');
    const prevBtn = $('.carousel-btn.prev');
    const nextBtn = $('.carousel-btn.next');
    let currentIndex = 0;
    const carsToShow = 1; // Show one car at a time
    const totalCars = cars.length;
    const carWidth = cars.outerWidth(true);

    function updateCars() {
        const offset2 = -currentIndex * carWidth;
        track.css('transform', `translateX(${offset2}px)`);
    }

    nextBtn.click(function() {
        if (currentIndex < totalCars - carsToShow) {
            currentIndex++;
            updateCars();
        }
    });

    prevBtn.click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCars();
        }
    });

    updateCars();
});


