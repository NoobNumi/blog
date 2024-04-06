const modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('change', () => {
    if (document.body.classList.contains('bg-dark') && document.body.classList.contains('text-white')) {
        document.body.classList.add('text-dark');
        document.body.classList.add('bg-white');
        document.body.classList.remove('text-white');
        document.body.classList.remove('bg-dark');

        // Change text-dark to text-white
        document.querySelectorAll('.text-dark').forEach(element => {
            element.classList.remove('text-dark');
            element.classList.add('text-white');
        });
    } else {
        document.body.classList.add('text-white');
        document.body.classList.add('bg-dark');
        document.body.classList.remove('text-dark');
        document.body.classList.remove('bg-white');

        // Change text-white to text-dark
        document.querySelectorAll('.text-white').forEach(element => {
            element.classList.remove('text-white');
            element.classList.add('text-dark');
        });
    }
});
