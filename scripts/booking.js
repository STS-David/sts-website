const BOOKING_URL = "https://outlook.office.com/bookwithme/user/e350f7fd08f34efeba9088672e26bbe6@SimonicTechSolutions.onmicrosoft.com/meetingtype/tH17irHtLkCkYUdYjc98Fw2?anonymous&ismsaljsauthenabled&ep=mlink";

function openBooking() {
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
}

window.openBooking = openBooking;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-booking-trigger]").forEach((trigger) => {
        trigger.addEventListener("click", openBooking);
    });
});
