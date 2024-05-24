document.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate the new opacity
    let opacity = 1 - (scrollPosition / windowHeight);
    
    // Ensure the opacity value is within the valid range
    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;
    
    // Apply the new opacity to the hero section
    heroSection.style.opacity = opacity;
});

// Make categories images react to mouse click

document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            const url = category.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

// Make navbar shrink with scroll effect

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust the value as needed
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });

    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            const url = category.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

 // Scroll function
 function scrollToCategories() {
    const categoriesSection = document.getElementById('categories');
    // Scroll smoothly to the categories section
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Add click event listener to the button
  document.getElementById('shopNowBtn').addEventListener('click', scrollToCategories);

   // Scroll function
   function scrollToCategories() {
    const categoriesSection = document.getElementById('categories');
    // Scroll smoothly to the categories section
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Add click event listener to the button
  document.getElementById('shopNowBtn').addEventListener('click', scrollToCategories);