export function validateEmail(email) {
    if (!email || typeof email !== "string") {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function subscribeToNewsletter(email) {
    const normalizedEmail = email?.trim().toLowerCase();

    if (!validateEmail(normalizedEmail)) {
        return {
            success: false,
            message: "Please enter a valid email address.",
        };
    }

    // Backend / email service will be connected here later.
    // For now, we only validate the subscription request.

    return {
        success: true,
        message: "You're subscribed to the Grolance newsletter.",
        email: normalizedEmail,
    };
}