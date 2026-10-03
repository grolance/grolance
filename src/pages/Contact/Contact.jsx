import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import SEO from "../../components/common/SEO";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="app">
            <SEO
                title="Contact Grolance"
                description="Contact Grolance for questions, partnerships, collaborations, advertising and business enquiries."
            />

            <Navbar />

            <main>
                <section className="page-header contact-page-header">
                    <PageContainer>
                        <div className="contact-intro">
                            <span className="section-kicker">
                                GET IN TOUCH
                            </span>

                            <h1>
                                Let’s talk
                                <span>.</span>
                            </h1>

                            <p>
                                Have a question, partnership idea, collaboration
                                proposal or something you think Grolance should
                                cover? We’d love to hear from you.
                            </p>
                        </div>
                    </PageContainer>
                </section>

                <section className="contact-content">
                    <PageContainer>
                        <div className="contact-grid">
                            <div className="contact-info">
                                <span className="section-kicker">
                                    CONTACT GROLANCE
                                </span>

                                <h2>
                                    Tell us
                                    <span> what’s on your mind.</span>
                                </h2>

                                <p>
                                    Whether you have a question, want to collaborate,
                                    have a business opportunity or simply want to
                                    share an idea, send us a message and we’ll take
                                    a look.
                                </p>

                                <div className="contact-links">
                                    <a href="mailto:grolance.media@gmail.com">
                                        grolance.media@gmail.com
                                    </a>

                                    <a
                                        href="https://www.instagram.com/grolance_?stkn=bzJzbW9obGV3M2Vo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram ↗
                                    </a>
                                </div>

                                <div className="contact-note">
                                    <span>PARTNERSHIPS &amp; ADVERTISING</span>

                                    <p>
                                        Interested in featuring your business,
                                        product or story on Grolance?
                                    </p>

                                    <Link
                                        to="/advertise"
                                        className="contact-secondary-link"
                                    >
                                        Explore advertising →
                                    </Link>
                                </div>
                            </div>

                            <div className="contact-form-wrap">
                                {submitted ? (
                                    <div className="contact-success">
                                        <span className="section-kicker">
                                            MESSAGE RECEIVED
                                        </span>

                                        <h2>
                                            Thanks for reaching out.
                                        </h2>

                                        <p>
                                            Your message has been received.
                                            We appreciate you taking the time
                                            to contact Grolance.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setSubmitted(false)}
                                        >
                                            Send another message →
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        className="contact-form"
                                        onSubmit={handleSubmit}
                                    >
                                        <label>
                                            <span>Name</span>

                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                autoComplete="name"
                                                required
                                            />
                                        </label>

                                        <label>
                                            <span>Email</span>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                autoComplete="email"
                                                required
                                            />
                                        </label>

                                        <label>
                                            <span>Subject</span>

                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="What is this about?"
                                                required
                                            />
                                        </label>

                                        <label>
                                            <span>Message</span>

                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message..."
                                                rows="7"
                                                required
                                            />
                                        </label>

                                        <button
                                            type="submit"
                                            className="contact-submit"
                                        >
                                            Send message
                                            <span>→</span>
                                        </button>

                                        <small className="contact-form-note">
                                            We only use the information you provide
                                            to respond to your enquiry.
                                        </small>
                                    </form>
                                )}
                            </div>
                        </div>
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Contact;