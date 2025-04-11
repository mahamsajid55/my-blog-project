// JavaScript to add a simple fade-in effect when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
  
    // Initially, hide the circles
    circles.forEach(circle => {
      circle.style.opacity = 0;
      circle.style.transform = 'scale(0.5)';
    });
  
    // Use a delay to animate the circles into view
    setTimeout(() => {
      circles.forEach(circle => {
        circle.style.transition = 'all 1s ease-in-out';
        circle.style.opacity = 1;
        circle.style.transform = 'scale(1)';
      });
    }, 500);
  });
  
  // JavaScript to add a click effect (if you want an additional animation after the click)
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
  
    circles.forEach(circle => {
      circle.addEventListener('click', function () {
        // Add a "clicked" class temporarily for extra styling or animation
        circle.classList.add('clicked');
  
        // Remove the "clicked" class after 300ms (to match the duration of the animation)
        setTimeout(() => {
          circle.classList.remove('clicked');
        }, 300);
      });
    });
  });
  