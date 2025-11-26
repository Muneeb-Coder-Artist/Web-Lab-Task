// Form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  alert("Thank you! Your message has been sent.");
  this.reset(); 
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  // Change button icon
  if(document.body.classList.contains("light-theme")){
    themeToggle.textContent = "🌙"; // Moon for dark mode
  } else {
    themeToggle.textContent = "🌞"; // Sun for light mode
  }
});
