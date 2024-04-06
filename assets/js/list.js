// Fetch the data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let weeks = Object.keys(data).sort((a, b) => b.localeCompare(a));

        // Display the recent posts initially
        let recentWeeks = weeks.slice(1, 6);
        let html = recentWeeks.map(week => generatePostHTML(data, week)).join('');
        document.querySelector('.list-group').innerHTML = html;

        // Add event listener to the button
        var seeAllButton = document.querySelector('.see-all');
        seeAllButton.addEventListener('click', function () {
            if (seeAllButton.textContent === 'See All Archives') {
                let allWeeks = weeks.slice(1); // Exclude the very latest post
                let html = allWeeks.map(week => generatePostHTML(data, week)).join('');
                document.querySelector('.list-group').innerHTML = html; // Replace the existing list
                seeAllButton.textContent = 'See Less'; // Change the button text
            } else {
                let html = recentWeeks.map(week => generatePostHTML(data, week)).join('');
                document.querySelector('.list-group').innerHTML = html; // Show only the recent posts
                seeAllButton.textContent = 'See All Archives'; // Change the button text back
            }
        });
    })
    .catch(error => console.error('Error:', error));

function generatePostHTML(data, week) {
    const words = data[week].description.split(' ').length;
    const readingTime = Math.ceil(words / 100);

    return `
        <li class="list-group-item p-0 mb-2">
            <a href="view.html?week=${week}" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">
                <div class="justify-content-between d-flex align-items-center">
                    <div class="d-flex gap-3 align-items-start ">
                        <img src="assets/images/Weeks/${week}/${data[week].images[0]}" class="image-thumbnail">
                        <div class="text">
                            <span class="badge rounded-pill text-bg-primary fw-1 px-3 py-2">${week}</span>
                            <h6 class="fw-semibold mt-2 text-dark me-3">${data[week].title}</h6>
                            <span class="text-muted" style="font-size: 13px;">${readingTime} min read</span>
                        </div>
                    </div>
                    <div class="d-flex">
                        <i class="fa-solid fa-chevron-right me-3"></i>
                    </div>
                </div>
            </a>
        </li>
    `;
}
