import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import SearchBar from "../../components/search/SearchBar";
import SearchResults from "../../components/search/SearchResults";
import SEO from "../../components/common/SEO";

import { useSearch } from "../../hooks/useSearch";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(initialQuery);

    const { results } = useSearch(initialQuery);

    const handleSearch = (value) => {
        const trimmedValue = value.trim();

        setQuery(trimmedValue);

        if (trimmedValue) {
            setSearchParams({ q: trimmedValue });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div className="app">
            <SEO
                title="Search"
                description="Search Grolance for business insights, startup stories, resources and ideas."
            />

            <Navbar />

            <main>
                <section className="page-header search-page-header">
                    <PageContainer>
                        <div className="search-page-intro">
                            <span className="section-kicker">
                                GROLANCE SEARCH
                            </span>

                            <h1>
                                Find what you’re
                                <span> looking for.</span>
                            </h1>

                            <p>
                                Search business insights, startup stories,
                                resources and practical ideas from Grolance.
                            </p>
                        </div>

                        <SearchBar
                            value={query}
                            onChange={setQuery}
                            onSubmit={handleSearch}
                            placeholder="Search Grolance..."
                            autoFocus
                        />
                    </PageContainer>
                </section>

                <section className="search-page-content">
                    <PageContainer>
                        <SearchResults
                            results={results}
                            query={initialQuery}
                        />
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Search;