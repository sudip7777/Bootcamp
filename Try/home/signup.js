document.addEventListener("DOMContentLoaded", function() {
    // Select all register buttons
    const registerButtons = document.querySelectorAll(".register-btn");

    // Add click event to each button
    registerButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            // Prevent default behavior for now
            event.preventDefault();

            // Get event name
            const eventName = this.getAttribute("data-event");

            // Show confirmation alert
            const userConfirmed = confirm(`Are you sure you want to register for the ${eventName} event?`);

            if (userConfirmed) {
                // Redirect to the registration page
                window.location.href = this.href;
            }
        });
    });
});
