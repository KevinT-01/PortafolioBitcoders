document.addEventListener("DOMContentLoaded", function () {
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        let currentActiveLink = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentActiveLink = section;
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (currentActiveLink && link.getAttribute('href') === '#' + currentActiveLink.id) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});
