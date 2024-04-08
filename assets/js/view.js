// Get the week from the URL
const urlParams = new URLSearchParams(window.location.search);
const week = urlParams.get('week');

// Fetch the data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const weekData = data[week];
        const carouselIndicators = document.querySelector('.carousel-indicators');
        const carouselInner = document.querySelector('.carousel-inner');
        const badge = document.querySelector('.badge');
        const titleElement = document.querySelector('.home-title');
        const descriptionElement = document.querySelector('.description');
        carouselIndicators.innerHTML = '';
        carouselInner.innerHTML = '';

        weekData.images.forEach((image, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.bsTarget = '#carouselExampleIndicators';
            button.dataset.bsSlideTo = index;
            button.ariaLabel = 'Slide ' + (index + 1);
            if (index === 0) {
                button.className = 'active';
                button.ariaCurrent = 'true';
            }
            carouselIndicators.appendChild(button);

            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item', 'view-carousel');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = `./assets/images/Weeks/${week}/${image}`;
            img.classList.add('d-block', 'w-100', 'view-img');

            img.addEventListener('load', function () {
                if (index === weekData.images.length - 1) { // Check if it's the last image
                    addSwipeFunctionality();
                }
            });

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });

        badge.textContent = week;
        titleElement.textContent = weekData.title;
        descriptionElement.textContent = weekData.description;
    })
    .catch(error => console.error('Error:', error));

function addSwipeFunctionality() {
    var carouselInner = document.querySelector('.carousel-inner');
    var touchStartX = null;

    carouselInner.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
    });

    carouselInner.addEventListener('touchend', function (e) {
        var touchEndX = e.changedTouches[0].clientX;
        var diffX = touchStartX - touchEndX;
        if (diffX > 0) { // swiped left
            document.querySelector('.carousel-control-next').click();
        } else if (diffX < 0) { // swiped right
            document.querySelector('.carousel-control-prev').click();
        }
    });
}
