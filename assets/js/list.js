function generatePostHTML(data, week) {
    const words = data[week].description.split(' ').length;
    const readingTime = Math.ceil(words / 100);

    const isDarkMode = document.body.classList.contains('bg-dark');

    return `
        <li class="list-group-item p-0 mb-2 ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'}">
            <a href="view.html?week=${week}" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">
                <div class="justify-content-between d-flex align-items-center">
                    <div class="d-flex gap-3 align-items-start ">
                        <img src="assets/images/Weeks/${week}/${data[week].images[0]}" class="image-thumbnail">
                        <div class="text">
                            <span class="badge rounded-pill text-bg-primary fw-1 px-3 py-2">${week}</span>
                            <h6 class="fw-semibold mt-2 me-3 ${isDarkMode ? 'text-white' : 'text-dark'}">${data[week].title}</h6>
                            <span class="${isDarkMode ? 'text-white' : 'text-muted'}" style="font-size: 13px;">${readingTime} min read</span>
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

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let weeks = Object.keys(data).sort((a, b) => {
            let numA = parseInt(a.replace('Week ', ''));
            let numB = parseInt(b.replace('Week ', ''));
            return numB - numA;
        });

        let recentWeeks = weeks.slice(1, 6);
        let html = recentWeeks.map(week => generatePostHTML(data, week)).join('');
        document.querySelector('.list-group').innerHTML = html;

        var seeAllButton = document.querySelector('.see-all');
        seeAllButton.addEventListener('click', function () {
            if (seeAllButton.textContent === 'See All Archives') {
                let allWeeks = weeks.slice(1);
                let html = allWeeks.map(week => generatePostHTML(data, week)).join('');
                document.querySelector('.list-group').innerHTML = html;
                seeAllButton.textContent = 'See Less';
            } else {
                let html = recentWeeks.map(week => generatePostHTML(data, week)).join('');
                document.querySelector('.list-group').innerHTML = html;
                seeAllButton.textContent = 'See All Archives';
            }
        });
    })
    .catch(error => console.error('Error:', error));
