document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("[data-contact-form]");
    if (!form) {
        console.error("STS contact form not found.");
        return;
    }

    const status = document.querySelector("[data-contact-status]");

    if (!status) {
        console.error("STS contact status element not found.");
        return;
    }

    const fields = Array.from(form.querySelectorAll("input, textarea"));

    function setStatus(message, tone) {
        status.textContent = message;
        status.className = `contact-status${tone ? ` is-${tone}` : ""}`;
    }

    function clearInvalidStates() {
        fields.forEach((field) => field.classList.remove("is-invalid"));
        form.querySelectorAll(".privacy-check").forEach((item) => item.classList.remove("is-invalid"));
    }

    function markInvalid(field) {
        field.classList.add("is-invalid");

        if (field.name === "privacy") {
            field.closest(".privacy-check")?.classList.add("is-invalid");
        }
    }

    function validate(formData) {
        clearInvalidStates();

        const requiredFields = ["name", "email", "issue", "privacy"];
        const firstMissing = requiredFields.find((name) => {
            const value = formData.get(name)?.toString().trim() || "";
            return !value;
        });

        if (firstMissing) {
            const field = form.querySelector(`[name="${firstMissing}"]`);
            if (field) {
                markInvalid(field);
                field.focus();
            }

            if (firstMissing === "privacy") {
                return "Bitte bestätigen Sie die Datenschutzerklärung, bevor Sie die Anfrage senden.";
            }

            return "Bitte füllen Sie mindestens Name, E-Mail und Ihr aktuelles Anliegen aus.";
        }

        const email = formData.get("email")?.toString().trim() || "";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            const emailField = form.querySelector('[name="email"]');
            if (emailField) {
                markInvalid(emailField);
                emailField.focus();
            }
            return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        }

        const honeypot = formData.get("_honeypot")?.toString().trim() || "";
        if (honeypot) {
            return "Die Anfrage konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut oder nutzen Sie die E-Mail-Adresse unter dem Formular.";
        }

        return "";
    }

    fields.forEach((field) => {
        const eventName = field.type === "checkbox" ? "change" : "input";
        field.addEventListener(eventName, () => {
            field.classList.remove("is-invalid");
            if (field.name === "privacy") {
                field.closest(".privacy-check")?.classList.remove("is-invalid");
            }
        });
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const validationError = validate(formData);

        if (validationError) {
            setStatus(validationError, "error");
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalLabel = submitButton ? submitButton.textContent : "";

        try {
            setStatus("Anfrage wird gesendet...", "info");

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Wird gesendet...";
            }

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            await response.text();

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            form.reset();
            clearInvalidStates();
            setStatus("Ihre Anfrage wurde übermittelt. Wir melden uns strukturiert mit einem nächsten Schritt.", "success");
        } catch (error) {
            console.error("STS contact form error:", error);
            setStatus("Die Anfrage konnte gerade nicht zugestellt werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an david@simonictech.com.", "error");
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalLabel || "Anfrage senden";
            }
        }
    });
});
