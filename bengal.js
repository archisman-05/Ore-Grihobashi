 // Adding some parallax scrolling effect
 window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const background = document.querySelector('.memorial-background');
    const iframeContainer = document.querySelector('.iframe-container');
    
    // Parallax background movement
    background.style.transform = `translateY(${scrollY / 5}px)`;

    // Slightly move the iframe container on scroll
    iframeContainer.style.transform = `translateY(${scrollY / 10}px)`;
  });