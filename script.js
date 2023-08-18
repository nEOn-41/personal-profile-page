document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    var name = document.getElementById("name").value; // Get the name value
    alert("Thank you, " + name + ", for your message!"); // Show the alert
});
