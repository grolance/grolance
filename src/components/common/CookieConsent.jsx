import { useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "grolance_cookie_consent";

function CookieConsent() {
    const [visible, setVisible] = useState(() => {
        if (typeof window === "undefined") {
            return false;
        }

        return !window.localStorage.getItem(COOKIE_CONSENT_KEY);
    });

    const saveConsent = (choice) => {
        localStorage.setItem(
            COOKIE_CONSENT_KEY,
            JSON.stringify({
                choice,
                savedAt: new Date().toISOString(),
            })
        );

        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <aside
            className="cookie-consent"
            role="dialog"
            aria-label="Cookie consent"
        >
            <div className="cookie-consent-content">
                <div className="cookie-consent-text">
                    <span className="cookie-consent-label">
                        YOUR PRIVACY
                    </span>

                    <h2>We use cookies.</h2>

                    <p>
                        Grolance may use cookies and similar technologies to
                        support website functionality, remember preferences
                        and understand how the website is used.
                    </p>

                    <Link
                        to="/cookies"
                        className="cookie-consent-link"
                    >
                        Read our Cookie Policy →
                    </Link>
                </div>

                <div className="cookie-consent-actions">
                    <button
                        type="button"
                        className="cookie-consent-secondary"
                        onClick={() => saveConsent("necessary")}
                    >
                        Necessary Only
                    </button>

                    <button
                        type="button"
                        className="cookie-consent-primary"
                        onClick={() => saveConsent("all")}
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default CookieConsent;