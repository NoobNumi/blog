const modeSwitchNavbar = document.getElementById('modeSwitchNavbar');
const modeSwitchSidebar = document.getElementById('modeSwitchSidebar');

function toggleDarkMode(isPageLoad) {
    // Get all elements with text-white and text-dark classes before toggling
    const whiteTextElements = document.querySelectorAll('.text-white');
    const darkTextElements = document.querySelectorAll('.text-dark');
    const grayTextElements = document.querySelectorAll('.text-muted');
    const litag = document.querySelectorAll('.list-group-item');
    const sidebar = document.getElementById('mySidepanel');

    // Check if dark mode is already enabled
    const isDarkModeEnabled = document.body.classList.contains('bg-dark');

    // If function is called due to page load and dark mode is already enabled, return
    if (isPageLoad && isDarkModeEnabled) return;

    // Toggle dark mode classes
    document.body.classList.toggle('text-dark');
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-muted');

    // Toggle text color classes
    whiteTextElements.forEach(element => {
        element.classList.toggle('text-dark');
        element.classList.toggle('text-white');
    });
    darkTextElements.forEach(element => {
        element.classList.toggle('text-dark');
        element.classList.toggle('text-white');
    });
    grayTextElements.forEach(element => {
        element.classList.toggle('text-muted');
        element.classList.toggle('text-white');
    });

    litag.forEach(element => {
        element.classList.toggle('bg-white');
        element.classList.toggle('bg-dark');
    });

    // Toggle sidebar classes
    sidebar.classList.toggle('bg-dark');
    sidebar.classList.toggle('bg-white');
}

// Initial setup based on localStorage or default
if (localStorage.getItem('darkMode') === 'true') {
    toggleDarkMode(true);
    modeSwitchNavbar.checked = true;
    modeSwitchSidebar.checked = true;
}


// Event listener for navbar switch
modeSwitchNavbar.addEventListener('change', () => {
    toggleDarkMode(false);
    localStorage.setItem('darkMode', modeSwitchNavbar.checked);
});

// Event listener for sidebar switch
modeSwitchSidebar.addEventListener('change', () => {
    toggleDarkMode(false);
    localStorage.setItem('darkMode', modeSwitchSidebar.checked);
});

// Add event listener to the button
var seeAllButton = document.querySelector('.see-all');
seeAllButton.addEventListener('click', function () {
    const litag = document.querySelectorAll('.list-group-item');
    litag.forEach(element => {
        if (document.body.classList.contains('bg-dark')) {
            element.classList.remove('bg-white');
            element.classList.add('bg-dark');
        } else {
            element.classList.remove('bg-dark');
            element.classList.add('bg-white');
        }
    });
});
