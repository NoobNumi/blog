// Fetch the JSON data from the server
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get the latest week
        var weeks = Object.keys(data);
        weeks.sort((a, b) => parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1]));
        var latestWeek = weeks[weeks.length - 1];
        var images = data[latestWeek].images;
        var title = data[latestWeek].title;
        var description = data[latestWeek].description;

        var carouselIndicators = document.querySelector('.carousel-indicators');
        var carouselInner = document.querySelector('.carousel-inner');
        var loadedImages = 0;

        images.forEach(function (image, index) {
            var button = document.createElement('button');
            button.type = 'button';
            button.dataset.bsTarget = '#carouselExampleIndicators';
            button.dataset.bsSlideTo = index;
            button.ariaLabel = 'Slide ' + (index + 1);
            if (index === 0) {
                button.className = 'active';
                button.ariaCurrent = 'true';
            }
            carouselIndicators.appendChild(button);

            var div = document.createElement('div');
            div.className = 'carousel-item' + (index === 0 ? ' active' : '');
            var img = document.createElement('img');
            img.className = 'd-block w-100 home-img';
            img.src = './assets/images/Weeks/' + latestWeek + '/' + image;
            img.alt = '';
            img.addEventListener('load', function () {
                loadedImages++;
                if (loadedImages === images.length) {
                    setTimeout(addSwipeFunctionality, 1000); // Add a delay before adding swipe functionality
                }
            });
            div.appendChild(img);
            carouselInner.appendChild(div);
        });

        var badge = document.querySelector('.badge');
        badge.textContent = latestWeek;

        var titleElement = document.querySelector('.home-title');
        titleElement.textContent = title;
        var descriptionElement = document.querySelector('.description');
        descriptionElement.textContent = description;
    });

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
            $('.carousel').carousel('next');
        } else if (diffX < 0) { // swiped right
            $('.carousel').carousel('prev');
        }
    });
}
