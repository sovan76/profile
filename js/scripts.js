let menuIcon = document.querySelector('#menu-icon');
let closeIcon = document.querySelector('#close-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

function toggleNavbar() {
    navbar.classList.toggle('show');
    // Toggle visibility of close icon
    closeIcon.style.display = navbar.classList.contains('show') ? 'block' : 'none';
}

menuIcon.addEventListener('click', () => {
    toggleNavbar();
});

closeIcon.addEventListener('click', () => {
    toggleNavbar();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleNavbar();
    });
});

const options = {
    rootMargin: '-50px',
    threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.navbar a[href="#${id}"]`).classList.add('active');
        }
    });
}, options);

document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
});
