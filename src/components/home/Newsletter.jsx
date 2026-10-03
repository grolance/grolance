import SectionHeader from "../common/SectionHeader";
import RevealOnScroll from "../common/RevealOnScroll";
import { useNewsletter } from "../../hooks/useNewsletter";

function Newsletter() {
    const {
        email,
        setEmail,
        submit,
        isLoading,
        isSuccess,
        isError,
        message,
    } = useNewsletter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await submit();
    };

    return (
        <section className="newsletter-section" id="newsletter">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="newsletter-card">
                        <div className="newsletter-content">
                            <SectionHeader
                                kicker="GROLANCE NEWSLETTER"
                                title="Ideas worth"
                                highlight="your inbox."
                                description="Get useful business insights, startup stories, AI trends and practical ideas delivered occasionally."
                            />
                        </div>

                        <form
                            className="newsletter-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="newsletter-input-wrap">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="Your email address"
                                    aria-label="Email address"
                                    disabled={isLoading}
                                    required
                                />

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Joining..." : "Subscribe"}
                                    <span>→</span>
                                </button>
                            </div>

                            {message && (
                                <p
                                    className={
                                        isSuccess
                                            ? "newsletter-message success"
                                            : isError
                                                ? "newsletter-message error"
                                                : "newsletter-message"
                                    }
                                    role="status"
                                >
                                    {message}
                                </p>
                            )}

                            <small>
                                No spam. Just useful ideas.
                            </small>
                        </form>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}

export default Newsletter;