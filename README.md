# Navrose-
Stitch as you wish 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ladies Suit Tailoring</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Ladies Suit Stitching Tailor Shop</h1>
        <p>Exclusive stitching for ladies' suits — custom fit, elegant designs.</p>
    </header>
    <main>
        <section id="about">
            <h2>About Us</h2>
            <p>We specialize only in ladies’ suit stitching. Bring your fabric and design ideas, and we will craft the perfect outfit just for you!</p>
        </section>
        <section id="booking">
            <h2>Book an Appointment</h2>
            <form id="bookingForm">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required pattern="[0-9\-+ ]{7,15}">

                <label for="date">Preferred Date:</label>
                <input type="date" id="date" name="date" required>

                <label for="details">Suit Details / Special Instructions:</label>
                <textarea id="details" name="details" rows="4"></textarea>

                <button type="submit">Book Now</button>
            </form>
            <div id="confirmation" style="display:none;">
                <h3>Thank you!</h3>
                <p>Your appointment request has been submitted. We will contact you soon.</p>
            </div>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>Call: 12345-67890</p>
            <p>Email: info@ladiessuitstitching.com</p>
            <p>Visit: 123, Main Market, Your City</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Ladies Suit Stitching Tailor Shop</p>
    </footer>
    <script src="app.js"></script>
</body>
</html>
