document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("joinForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        const name = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const sport = document.getElementById("sport").value;

        if (name === "" || email === "" || phone === "" || sport === "") {
            alert("Please fill in all required fields!");
            return;
        }

        alert(`Thank you, ${name}! You have successfully joined Techspire Sports Club.`);
        
        // Optionally reset form after submission
        form.reset();
    });
});
