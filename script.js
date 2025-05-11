// Display a welcome message and current date/time in the console using modern syntax
const displayDateTime = () => {
  const now = new Date();
  console.log(`Welcome to Shashank's Portfolio!`);
  console.log(`Current Date and Time: ${now.toLocaleString()}`);
};
displayDateTime();

// Change the background color of the body after 3 seconds using modern syntax
setTimeout(() => {
  document.body.style.backgroundColor = "#f0f8ff";
  console.log("Background color changed to light blue!");
}, 3000);

// Add an interactive button to toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  console.log("Dark mode toggled!");
};

// Create and append the button to the body
const button = document.createElement("button");
button.textContent = "Toggle Dark Mode";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.addEventListener("click", toggleDarkMode);
document.body.appendChild(button);

// Add dark mode styles
const style = document.createElement("style");
style.textContent = `
  .dark-mode {
    background-color: #121212;
    color: #ffffff;
  }
`;
document.head.appendChild(style);
window.addEventListener("load", () => {
  console.log("Welcome to Shashank's Portfolio!");
});
