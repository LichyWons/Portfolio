
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navContent = document.getElementById('navContent');

    if (hamburger && navContent) {
      hamburger.addEventListener('click', () => {
        navContent.classList.toggle('active');
      });
    }
  });
