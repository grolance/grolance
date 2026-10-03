import ArticleCard from "../articles/ArticleCard";
import ResourceCard from "../resources/ResourceCard";
import EmptyState from "../common/EmptyState";

function SearchResults({
    results = {
        articles: [],
        resources: [],
        total: 0,
    },
    query = "",
}) {
    const {
        articles = [],
        resources = [],
        total = 0,
    } = results;

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
        return (
            <EmptyState
                title="Start searching"
                description="Search Grolance for business insights, resources and ideas."
            />
        );
    }

    if (total === 0) {
        return (
            <EmptyState
                title="No results found"
                description={`We couldn't find anything matching "${query}". Try another search.`}
            />
        );
    }

    return (
        <div className="search-results">
            <div className="search-results-header">
                <span className="section-kicker">
                    SEARCH RESULTS
                </span>

                <h2>
                    Results for <span>"{query}"</span>
                </h2>

                <p>
                    {total} {total === 1 ? "result" : "results"} found
                </p>
            </div>

            {articles.length > 0 && (
                <section className="search-results-section">
                    <div className="search-results-section-header">
                        <h3>Insights</h3>
                        <span>{articles.length}</span>
                    </div>

                    <div className="article-grid">
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                            />
                        ))}
                    </div>
                </section>
            )}

            {resources.length > 0 && (
                <section className="search-results-section">
                    <div className="search-results-section-header">
                        <h3>Resources</h3>
                        <span>{resources.length}</span>
                    </div>

                    <div className="resource-grid">
                        {resources.map((resource) => (
                            <ResourceCard
                                key={resource.id}
                                resource={resource}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default SearchResults;