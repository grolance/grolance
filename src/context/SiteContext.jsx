import { createContext, useContext, useMemo } from "react";

import { site } from "../data/site";
import { categories } from "../data/categories";
import { authors } from "../data/authors";
import { articles } from "../data/articles";
import { resources } from "../data/resources";
import { tools } from "../data/tools";

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
    const value = useMemo(
        () => ({
            site,
            categories,
            authors,
            articles,
            resources,
            tools,
        }),
        []
    );

    return (
        <SiteContext.Provider value={value}>
            {children}
        </SiteContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSite() {
    const context = useContext(SiteContext);

    if (!context) {
        throw new Error("useSite must be used inside SiteProvider");
    }

    return context;
}