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