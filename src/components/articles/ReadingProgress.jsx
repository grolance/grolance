import { useEffect, useState } from "react";

function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let animationFrame;

        const updateProgress = () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }

            animationFrame = requestAnimationFrame(() => {
                const scrollTop =
                    window.scrollY ||
                    document.documentElement.scrollTop;

                const documentHeight =
                    document.documentElement.scrollHeight -
                    window.innerHeight;

                if (documentHeight <= 0) {
                    setProgress(0);
                    return;
                }

                const percentage =
                    (scrollTop / documentHeight) * 100;

                setProgress(
                    Math.min(100, Math.max(0, percentage))
                );
            });
        };

        updateProgress();

        window.addEventListener(
            "scroll",
            updateProgress,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            updateProgress
        );

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }

            window.removeEventListener(
                "scroll",
                updateProgress
            );

            window.removeEventListener(
                "resize",
                updateProgress
            );
        };
    }, []);

    return (
        <div
            className="reading-progress"
            aria-hidden="true"
        >
            <span
                className="reading-progress-bar"
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    );
}

export default ReadingProgress;