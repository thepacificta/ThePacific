document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form
    const checkinDate = document.getElementById('checkin_date').value;
    const checkoutDate = document.getElementById('checkout_date').value;
    const priceLimit = document.getElementById('price_limit').value;

    // Construct the Booking.com URL
    const baseURL = 'https://www.booking.com/searchresults.html';
    const searchURL = `${baseURL}?checkin=${encodeURIComponent(checkinDate)}&checkout=${encodeURIComponent(checkoutDate)}&price_limit=${encodeURIComponent(priceLimit)}`;

    // Redirect to the constructed URL
    window.location.href = searchURL;
});