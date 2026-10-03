import { useState } from "react";

function ArticleShare({ title = "", url = "" }) {
    const [copied, setCopied] = useState(false);

    const shareUrl =
        url ||
        (typeof window !== "undefined"
            ? window.location.href
            : "");

    const shareText = `Read "${title}" on Grolance`;

    const handleCopy = async () => {
        if (!shareUrl) return;

        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch {
            setCopied(false);
        }
    };

    const handleLinkedIn = () => {
        if (!shareUrl) return;

        const linkedInUrl =
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                shareUrl
            )}`;

        window.open(
            linkedInUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const handleX = () => {
        if (!shareUrl) return;

        const xUrl =
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                shareText
            )}&url=${encodeURIComponent(shareUrl)}`;

        window.open(
            xUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div className="article-share">
            <span className="article-share-label">
                SHARE
            </span>

            <div className="article-share-actions">
                <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={
                        copied
                            ? "Article link copied"
                            : "Copy article link"
                    }
                    title={
                        copied
                            ? "Copied"
                            : "Copy article link"
                    }
                >
                    {copied ? "Copied ✓" : "Copy"}
                </button>

                <button
                    type="button"
                    onClick={handleLinkedIn}
                    aria-label="Share article on LinkedIn"
                >
                    LinkedIn
                </button>

                <button
                    type="button"
                    onClick={handleX}
                    aria-label="Share article on X"
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default ArticleShare;