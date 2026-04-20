const BOOKING_CONFIG = {
    provider: "microsoft-bookings",
    // Replace this single URL with the final Cal.com event link when migration is ready.
    url: "https://outlook.office.com/bookwithme/user/e350f7fd08f34efeba9088672e26bbe6@SimonicTechSolutions.onmicrosoft.com/meetingtype/tH17irHtLkCkYUdYjc98Fw2?anonymous&ismsaljsauthenabled&ep=mlink",
};

function getBookingUrl() {
    return BOOKING_CONFIG.url;
}

function openBooking(event) {
    if (event) {
        event.preventDefault();
    }

    const bookingUrl = getBookingUrl();
    if (!bookingUrl) {
        console.error("STS booking URL is not configured.");
        return;
    }

    window.open(bookingUrl, "_blank", "noopener,noreferrer");
}

window.STSBooking = {
    config: BOOKING_CONFIG,
    getUrl: getBookingUrl,
    open: openBooking,
};

window.openBooking = openBooking;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-booking-trigger]").forEach((trigger) => {
        trigger.addEventListener("click", openBooking);
    });
});
