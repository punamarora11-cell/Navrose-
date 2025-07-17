document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Here, you can add AJAX to send form data to a backend if you want.
    // For now, just show confirmation message and reset form.
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
});