// JavaScript to trigger a touch animation on skills
document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll('#skills ul li');
  
    skills.forEach(skill => {
      skill.addEventListener('touchstart', function () {
        skill.classList.add('touched');
      });
      
      skill.addEventListener('touchend', function () {
        skill.classList.remove('touched');
      });
    });
  });
  