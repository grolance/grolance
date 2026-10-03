import { useState } from "react";
import {
    subscribeToNewsletter,
    validateEmail,
} from "../services/newsletterService";

export function useNewsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    const submit = async () => {
        setMessage("");

        if (!validateEmail(email)) {
            setStatus("error");
            setMessage("Please enter a valid email address.");
            return;
        }

        setStatus("loading");

        try {
            const result = await subscribeToNewsletter(email);

            if (result.success) {
                setStatus("success");
                setMessage(result.message);
                setEmail("");
            } else {
                setStatus("error");
                setMessage(result.message);
            }
        } catch {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    };

    return {
        email,
        setEmail,
        submit,
        status,
        message,
        isLoading: status === "loading",
        isSuccess: status === "success",
        isError: status === "error",
    };
}