import { useEffect } from "react";

function SEO({
    title,
    description,
    image,
    url,
}) {
    useEffect(() => {
        const defaultTitle =
            "Grolance — Business Ideas, Insights & Growth";

        const defaultDescription =
            "Business insights, startup stories, AI trends, growth ideas and practical resources for people building the future.";

        const pageTitle = title
            ? `${title} | Grolance`
            : defaultTitle;

        const pageDescription =
            description || defaultDescription;

        document.title = pageTitle;

        const updateMeta = (name, content) => {
            if (!content) return;

            let meta = document.querySelector(
                `meta[name="${name}"]`
            );

            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("name", name);
                document.head.appendChild(meta);
            }

            meta.setAttribute("content", content);
        };

        const updateProperty = (property, content) => {
            if (!content) return;

            let meta = document.querySelector(
                `meta[property="${property}"]`
            );

            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("property", property);
                document.head.appendChild(meta);
            }

            meta.setAttribute("content", content);
        };

        updateMeta("description", pageDescription);

        updateProperty("og:title", pageTitle);
        updateProperty("og:description", pageDescription);
        updateProperty("og:type", "website");

        updateProperty("og:image", image);
        updateProperty("og:url", url);

        updateProperty("twitter:card", "summary_large_image");
        updateProperty("twitter:title", pageTitle);
        updateProperty("twitter:description", pageDescription);
        updateProperty("twitter:image", image);
    }, [title, description, image, url]);

    return null;
}

export default SEO;