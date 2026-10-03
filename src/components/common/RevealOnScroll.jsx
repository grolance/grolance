import { useEffect, useRef, useState } from "react";

function RevealOnScroll({
    children,
    className = "",
    threshold = 0.12,
}) {
    const elementRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    return (
        <div
            ref={elementRef}
            className={`reveal-on-scroll ${visible ? "is-visible" : ""
                } ${className}`.trim()}
        >
            {children}
        </div>
    );
}

export default RevealOnScroll;