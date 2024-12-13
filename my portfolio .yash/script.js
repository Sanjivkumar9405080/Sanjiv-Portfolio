
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Software Engineer', 'Aspiring Artificial Intelligence'],
    typeSpeed: 100,
    loop: true,
    });
  
  
  
  
  
  
  
  
  
  
  
  
  //for auto hide slidebar on click
  
    document.addEventListener('DOMContentLoaded', () => {
      const navbarToggle = document.getElementById('hamburger');
      const navbarLinks = document.getElementById('nav-links');
      const navItems = navbarLinks.querySelectorAll('a'); // Select all navigation links
    
      // Toggle menu visibility
      navbarToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
      });
    
      // Hide menu when a link is clicked
      navItems.forEach((item) => {
        item.addEventListener('click', () => {
          navbarLinks.classList.remove('active');
        });
      });
    });
    