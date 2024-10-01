/* global Typed */ // Inform ESLint that 'Typed' is a global variable

// Initialize Typed.js for displaying multiple texts in a typing animation
const typed = new Typed('.multiple-text', { // Correctly use 'new' to create an instance
  strings: ['Frontend Developer', 'WordPress Developer', 'Digital Marketer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

// Adding event listener to DownloadCV button
document.getElementById('DownloadCV').addEventListener('click', () => {
  // Replacing console.log() with an alternative or disabling the 'no-console' rule
  // eslint-disable-next-line no-console
  console.log('The CV is not available right now. Please check back later.');
});
// Define the serviceAlert function
function serviceAlert(serviceName) {
  console.log(`You clicked on the ${serviceName} service.`);
}
