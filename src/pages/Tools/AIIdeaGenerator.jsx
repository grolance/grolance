import { useMemo, useState } from "react";

import ToolLayout from "../../components/tools/ToolLayout";

const businessTypes = [
    "Retail",
    "Food & Beverage",
    "Technology",
    "Education",
    "Services",
    "E-commerce",
    "Manufacturing",
];

const budgets = [
    "Under ₹50,000",
    "₹50,000 – ₹2 Lakh",
    "₹2 Lakh – ₹5 Lakh",
    "₹5 Lakh+",
];

const experienceLevels = [
    "Beginner",
    "Some Experience",
    "Experienced",
];

const goals = [
    "Start a new business",
    "Build a side business",
    "Create an online business",
    "Scale an existing business",
];

const ideaTemplates = {
    Retail: {
        title: "Niche Local Commerce Store",
        problem:
            "Customers often struggle to find specialised products locally with reliable availability and quick service.",
        customer:
            "Local consumers looking for convenient access to specialised products.",
        revenue:
            "Product margins, repeat purchases and local delivery fees.",
        firstSteps: [
            "Choose a specific product category.",
            "Interview 10–15 potential customers.",
            "Test demand with a small inventory.",
            "Create a simple local-first sales channel.",
        ],
        challenge:
            "Inventory management and consistent customer demand.",
    },

    "Food & Beverage": {
        title: "Focused Food Brand",
        problem:
            "Many customers want convenient food options built around a specific taste, diet or use case.",
        customer:
            "Local customers looking for convenient and specialised food options.",
        revenue:
            "Direct product sales, subscriptions and repeat orders.",
        firstSteps: [
            "Choose one focused product category.",
            "Validate demand with small batches.",
            "Calculate unit economics carefully.",
            "Build a repeat-order system.",
        ],
        challenge:
            "Maintaining quality while keeping unit economics healthy.",
    },

    Technology: {
        title: "Small Business Automation Tool",
        problem:
            "Small businesses still spend significant time handling repetitive operational tasks manually.",
        customer:
            "Small businesses and teams looking to reduce repetitive work.",
        revenue:
            "Monthly subscriptions, usage-based pricing or business plans.",
        firstSteps: [
            "Choose one repetitive business workflow.",
            "Talk to 10–20 potential users.",
            "Build a narrow MVP.",
            "Measure whether the tool saves meaningful time.",
        ],
        challenge:
            "Finding a painful enough problem that customers will pay to solve.",
    },

    Education: {
        title: "Practical Skill Learning Platform",
        problem:
            "Many learners want practical skills but struggle to find focused, affordable and outcome-oriented learning.",
        customer:
            "Students, professionals and career-switchers.",
        revenue:
            "Courses, memberships, workshops and digital products.",
        firstSteps: [
            "Choose one high-demand skill.",
            "Create a small learning module.",
            "Test it with a small group.",
            "Collect feedback before expanding.",
        ],
        challenge:
            "Creating measurable learning outcomes and maintaining engagement.",
    },

    Services: {
        title: "Specialised Business Service",
        problem:
            "Businesses often need specialised help but do not have enough demand to hire a full-time specialist.",
        customer:
            "Small and growing businesses that need specialised support.",
        revenue:
            "Project fees, retainers and recurring service packages.",
        firstSteps: [
            "Choose one specific business problem.",
            "Define a clear service package.",
            "Find the first few customers manually.",
            "Document the delivery process.",
        ],
        challenge:
            "Turning a service into a repeatable and scalable process.",
    },

    "E-commerce": {
        title: "Niche E-commerce Brand",
        problem:
            "Large marketplaces offer many products but often lack specialised brands built around specific customer needs.",
        customer:
            "Online customers with a clear niche requirement.",
        revenue:
            "Product margins, bundles and repeat purchases.",
        firstSteps: [
            "Select a narrow product niche.",
            "Research competitors and customer reviews.",
            "Test a small product range.",
            "Build a simple acquisition channel.",
        ],
        challenge:
            "Customer acquisition costs and repeat purchases.",
    },

    Manufacturing: {
        title: "Specialised B2B Manufacturing",
        problem:
            "Smaller businesses often struggle to source specialised products in suitable quantities and specifications.",
        customer:
            "Retailers, distributors and other small businesses.",
        revenue:
            "Wholesale orders, repeat contracts and custom manufacturing.",
        firstSteps: [
            "Identify a recurring B2B supply problem.",
            "Talk to potential buyers.",
            "Validate minimum order requirements.",
            "Test a small production batch.",
        ],
        challenge:
            "Managing production costs, quality and working capital.",
    },
};

function AIIdeaGenerator() {
    const [businessType, setBusinessType] = useState("Retail");
    const [budget, setBudget] = useState("Under ₹50,000");
    const [experience, setExperience] = useState("Beginner");
    const [goal, setGoal] = useState("Start a new business");
    const [market, setMarket] = useState("");

    const idea = useMemo(() => {
        const template =
            ideaTemplates[businessType] || ideaTemplates.Retail;

        return {
            ...template,
            market:
                market.trim() ||
                "Your selected market and local customer segment.",
            budget,
            experience,
            goal,
        };
    }, [
        businessType,
        budget,
        experience,
        goal,
        market,
    ]);

    return (
        <ToolLayout
            title="AI Business Idea Generator"
            category="AI TOOL"
            description="Explore practical business ideas based on markets, customer problems and your available resources."
        >
            <div className="tool-generator">

                <div className="tool-generator-intro">
                    <h2>
                        Find a business idea worth
                        <span> exploring.</span>
                    </h2>

                    <p>
                        Tell us about your market, budget and goals.
                        The generator will create a structured starting
                        point for your business research.
                    </p>
                </div>

                <div className="tool-generator-form">

                    <div className="tool-form-grid">

                        <div className="tool-field">
                            <span>Business Type</span>

                            <select
                                value={businessType}
                                onChange={(event) =>
                                    setBusinessType(event.target.value)
                                }
                            >
                                {businessTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="tool-field">
                            <span>Budget</span>

                            <select
                                value={budget}
                                onChange={(event) =>
                                    setBudget(event.target.value)
                                }
                            >
                                {budgets.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="tool-field">
                            <span>Experience</span>

                            <select
                                value={experience}
                                onChange={(event) =>
                                    setExperience(event.target.value)
                                }
                            >
                                {experienceLevels.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="tool-field">
                            <span>Goal</span>

                            <select
                                value={goal}
                                onChange={(event) =>
                                    setGoal(event.target.value)
                                }
                            >
                                {goals.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="tool-field tool-field-full">
                            <span>
                                Target Market
                            </span>

                            <input
                                type="text"
                                value={market}
                                onChange={(event) =>
                                    setMarket(event.target.value)
                                }
                                placeholder="Example: small retailers in Rajasthan"
                            />
                        </div>

                    </div>

                </div>

                <div className="tool-result">

                    <div className="tool-result-top">
                        <div>
                            <h2>{idea.title}</h2>
                        </div>

                        <span className="tool-result-badge">
                            IDEA
                        </span>
                    </div>

                    <div className="tool-result-summary">
                        <p>
                            <strong>Goal:</strong>{" "}
                            {idea.goal}
                        </p>

                        <p>
                            <strong>Budget:</strong>{" "}
                            {idea.budget}
                        </p>

                        <p>
                            <strong>Target market:</strong>{" "}
                            {idea.market}
                        </p>
                    </div>

                    <div className="tool-result-grid">

                        <div className="tool-result-card tool-result-card-wide">
                            <span>PROBLEM</span>

                            <p>
                                {idea.problem}
                            </p>
                        </div>

                        <div className="tool-result-card">
                            <span>TARGET CUSTOMER</span>

                            <p>
                                {idea.customer}
                            </p>
                        </div>

                        <div className="tool-result-card">
                            <span>REVENUE MODEL</span>

                            <p>
                                {idea.revenue}
                            </p>
                        </div>

                        <div className="tool-result-card tool-result-card-wide">
                            <span>FIRST STEPS</span>

                            <p>
                                {idea.firstSteps.map(
                                    (step, index) => (
                                        <span
                                            key={step}
                                            style={{
                                                display: "block",
                                                marginBottom:
                                                    index ===
                                                        idea.firstSteps.length - 1
                                                        ? 0
                                                        : 7,
                                            }}
                                        >
                                            {index + 1}. {step}
                                        </span>
                                    )
                                )}
                            </p>
                        </div>

                        <div className="tool-result-card tool-result-card-wide">
                            <span>KEY CHALLENGE</span>

                            <p>
                                {idea.challenge}
                            </p>
                        </div>

                    </div>

                    <div className="tool-result-note">
                        <strong>NOTE</strong>

                        <span>
                            This is a structured idea-generation tool,
                            not a guarantee of market demand or
                            business success. Validate the idea with
                            real customers before investing heavily.
                        </span>
                    </div>

                </div>

            </div>
        </ToolLayout>
    );
}

export default AIIdeaGenerator;