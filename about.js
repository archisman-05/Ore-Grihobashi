document.addEventListener('DOMContentLoaded', function() {
    var aboutSection = document.querySelector('.about-section');
    var screenPosition = window.innerHeight / 1.2;

    function checkAboutSectionPosition() {
        var sectionPosition = aboutSection.getBoundingClientRect().top;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add('visible');
            aboutSection.classList.remove('hidden');
        } else {
            aboutSection.classList.add('hidden');
            aboutSection.classList.remove('visible');
        }
    }

    // Check the position on page load
    checkAboutSectionPosition();

    // Check the position on scroll
    window.addEventListener('scroll', checkAboutSectionPosition);
});
