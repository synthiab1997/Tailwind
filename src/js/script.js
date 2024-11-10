// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
  
    // Initialize theme based on localStorage
    const savedTheme = localStorage.getItem('theme');
    console.log("Saved theme on load:", savedTheme); // Debugging log
  
    if (savedTheme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
      htmlElement.classList.toggle('dark');
      const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
      console.log("Theme toggled to:", currentTheme); // Debugging log
      localStorage.setItem('theme', currentTheme);
    });
  });
  
 
  