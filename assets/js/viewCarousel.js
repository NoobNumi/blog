function displayImageForWeek(weekNumber, data) {
    let weekData = data[`Week ${weekNumber}`];
    if (weekData && weekData.images && weekData.images.length > 0) {
        let image = weekData.images[0]; // This will get the first image of the week
        let imageUrl = `./assets/images/Weeks/Week ${weekNumber}/${image}`; // This will create the path to the image

        // Now we create an image element and set its source to the image URL
        let imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.className = "card-img weekly-img w-100";

        // Create other elements
        let cardOverlay = document.createElement('div');
        cardOverlay.className = "card-overlay rounded";

        let cardTitle = document.createElement('h5');
        cardTitle.className = "card-title bottom-0 position-absolute custom-white";
        cardTitle.textContent = 'Week ' + weekNumber;

        let cardImgOverlay = document.createElement('div');
        cardImgOverlay.className = "card-img-overlay";
        cardImgOverlay.appendChild(cardTitle);

        let card = document.createElement('div');
        card.className = "card position-relative rounded";
        card.appendChild(imgElement);
        card.appendChild(cardOverlay);
        card.appendChild(cardImgOverlay);

        let link = document.createElement('a');
        link.href = `view.html?week=Week ${weekNumber}`;
        link.appendChild(card);

        let cardSwiperSlide = document.createElement('div');
        cardSwiperSlide.className = "card swiper-slide rounded";
        cardSwiperSlide.appendChild(link);

        // Finally, we append the new element to the card-wrapper
        let cardWrapper = document.querySelector('.card-wrapper');
        cardWrapper.appendChild(cardSwiperSlide);
    } else {
        console.log(`No images found for Week ${weekNumber}`);
    }
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get the number of weeks from the data
        let numWeeks = Object.keys(data).length;

        // Display an image for each week
        for (let weekNumber = 1; weekNumber <= numWeeks; weekNumber++) {
            displayImageForWeek(weekNumber, data);
        }
    })
    .catch(error => console.error('Error:', error));

