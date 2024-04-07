const modeSwitch = document.getElementById('modeSwitch');

function toggleDarkMode() {
    // Get all elements with text-white and text-dark classes before toggling
    const whiteTextElements = document.querySelectorAll('.text-white');
    const darkTextElements = document.querySelectorAll('.text-dark');
    const grayTextElements = document.querySelectorAll('.text-muted');
    const litag = document.querySelectorAll('.list-group-item');

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
}

// Event listener for mode switch
modeSwitch.addEventListener('change', () => {
    toggleDarkMode();
    localStorage.setItem('darkMode', modeSwitch.checked);
});

// Add event listener to the button
var seeAllButton = document.querySelector('.see-all');
seeAllButton.addEventListener('click', function () {
    // Your existing code here...

    // After updating the list, toggle the classes on the new li tags
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
