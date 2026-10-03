function ToolVisual({ type }) {
    if (type === "ai") {
        return (
            <div className="tool-visual tool-visual-ai">
                <div className="tool-ai-orbit tool-ai-orbit-one"></div>
                <div className="tool-ai-orbit tool-ai-orbit-two"></div>

                <div className="tool-ai-core">
                    <span>AI</span>
                </div>

                <div className="tool-ai-node tool-ai-node-one">
                    ✦
                </div>

                <div className="tool-ai-node tool-ai-node-two">
                    +
                </div>

                <div className="tool-ai-node tool-ai-node-three">
                    ↗
                </div>
            </div>
        );
    }

    if (type === "calculator") {
        return (
            <div className="tool-visual tool-visual-margin">
                <div className="margin-calculator">
                    <div className="margin-header">
                        <span>PROFIT MARGIN</span>
                        <strong>32.5%</strong>
                    </div>

                    <div className="margin-bars">
                        <div>
                            <span>Revenue</span>
                            <i className="margin-bar revenue"></i>
                        </div>

                        <div>
                            <span>Cost</span>
                            <i className="margin-bar cost"></i>
                        </div>

                        <div>
                            <span>Profit</span>
                            <i className="margin-bar profit"></i>
                        </div>
                    </div>

                    <div className="margin-value">
                        <span>₹</span>
                        <strong>24,850</strong>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "growth") {
        return (
            <div className="tool-visual tool-visual-growth">
                <div className="growth-dashboard">

                    <div className="growth-dashboard-top">
                        <div>
                            <span>BUSINESS GROWTH</span>
                            <strong>+42.8%</strong>
                        </div>

                        <div className="growth-period">
                            12M
                        </div>
                    </div>

                    <div className="growth-chart">
                        <div className="growth-grid-lines">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <svg
                            viewBox="0 0 320 130"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <defs>
                                <linearGradient
                                    id="growthLineGradient"
                                    x1="0"
                                    y1="0"
                                    x2="1"
                                    y2="0"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#5b9cff"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#e4b95f"
                                    />
                                </linearGradient>

                                <linearGradient
                                    id="growthAreaGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#5b9cff"
                                        stopOpacity="0.18"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#5b9cff"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>

                            <path
                                d="M8 112 C35 108, 45 98, 67 101 S98 86, 116 90 S145 71, 166 76 S198 57, 216 62 S246 39, 265 46 S291 26, 312 12 L312 130 L8 130 Z"
                                fill="url(#growthAreaGradient)"
                            />

                            <path
                                d="M8 112 C35 108, 45 98, 67 101 S98 86, 116 90 S145 71, 166 76 S198 57, 216 62 S246 39, 265 46 S291 26, 312 12"
                                fill="none"
                                stroke="url(#growthLineGradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />

                            <circle
                                cx="312"
                                cy="12"
                                r="5"
                                fill="#e4b95f"
                            />

                            <circle
                                cx="312"
                                cy="12"
                                r="9"
                                fill="none"
                                stroke="#e4b95f"
                                strokeOpacity="0.18"
                                strokeWidth="4"
                            />
                        </svg>

                        <div className="growth-axis">
                            <span>Jan</span>
                            <span>Apr</span>
                            <span>Jul</span>
                            <span>Oct</span>
                            <span>Dec</span>
                        </div>
                    </div>

                    <div className="growth-metrics">
                        <div>
                            <span>CUSTOMERS</span>
                            <strong>1,428</strong>
                        </div>

                        <div>
                            <span>REVENUE</span>
                            <strong>₹8.4L</strong>
                        </div>

                        <div>
                            <span>GROWTH</span>
                            <strong>+42.8%</strong>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="tool-visual tool-visual-empty">
            <span>GROLANCE</span>
        </div>
    );
}

export default ToolVisual;