import { useMemo, useState } from "react";

import ToolLayout from "../../components/tools/ToolLayout";
import NumberStepper from "../../components/tools/NumberStepper";

function BusinessGrowthCalculator() {
    const [startingCustomers, setStartingCustomers] = useState(100);
    const [monthlyGrowth, setMonthlyGrowth] = useState(10);
    const [averageRevenue, setAverageRevenue] = useState(1000);
    const [months, setMonths] = useState(12);

    const results = useMemo(() => {
        const customers = Number(startingCustomers) || 0;
        const growth = Number(monthlyGrowth) || 0;
        const revenue = Number(averageRevenue) || 0;
        const period = Number(months) || 0;

        const projectedCustomers =
            customers * Math.pow(1 + growth / 100, period);

        const startingRevenue = customers * revenue;
        const projectedRevenue = projectedCustomers * revenue;

        const customerIncrease =
            projectedCustomers - customers;

        const revenueIncrease =
            projectedRevenue - startingRevenue;

        return {
            projectedCustomers,
            startingRevenue,
            projectedRevenue,
            customerIncrease,
            revenueIncrease,
        };
    }, [
        startingCustomers,
        monthlyGrowth,
        averageRevenue,
        months,
    ]);

    const formatCurrency = (value) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);

    const formatNumber = (value) =>
        new Intl.NumberFormat("en-IN", {
            maximumFractionDigits: 0,
        }).format(value);

    return (
        <ToolLayout
            title="Business Growth Calculator"
            category="GROWTH TOOL"
            description="Understand how customers and revenue could change over time based on a monthly growth rate."
        >
            <div className="tool-calculator">

                <div className="tool-calculator-panel">

                    <div className="tool-form-grid">

                        <div className="tool-field">
                            <span>Starting Customers</span>

                            <NumberStepper
                                value={startingCustomers}
                                onChange={setStartingCustomers}
                                min={1}
                                max={100000000}
                                step={10}
                            />
                        </div>

                        <div className="tool-field">
                            <span>Monthly Growth</span>

                            <NumberStepper
                                value={monthlyGrowth}
                                onChange={setMonthlyGrowth}
                                min={0}
                                max={1000}
                                step={1}
                                suffix="%"
                            />
                        </div>

                        <div className="tool-field">
                            <span>Average Revenue / Customer</span>

                            <NumberStepper
                                value={averageRevenue}
                                onChange={setAverageRevenue}
                                min={0}
                                max={100000000}
                                step={100}
                                prefix="₹"
                            />
                        </div>

                        <div className="tool-field">
                            <span>Growth Period</span>

                            <NumberStepper
                                value={months}
                                onChange={setMonths}
                                min={1}
                                max={120}
                                step={1}
                                suffix="months"
                            />
                        </div>

                    </div>

                </div>

                <div className="tool-result">

                    <div className="tool-result-top">
                        <div>
                            <h2>Projected Growth</h2>
                        </div>

                        <span className="tool-result-badge">
                            CALCULATED
                        </span>
                    </div>

                    <div className="tool-result-grid">

                        <div className="tool-result-card">
                            <span>PROJECTED CUSTOMERS</span>

                            <strong>
                                {formatNumber(
                                    results.projectedCustomers
                                )}
                            </strong>
                        </div>

                        <div className="tool-result-card">
                            <span>CUSTOMER INCREASE</span>

                            <strong>
                                {formatNumber(
                                    results.customerIncrease
                                )}
                            </strong>
                        </div>

                        <div className="tool-result-card">
                            <span>STARTING MONTHLY REVENUE</span>

                            <strong>
                                {formatCurrency(
                                    results.startingRevenue
                                )}
                            </strong>
                        </div>

                        <div className="tool-result-card">
                            <span>PROJECTED MONTHLY REVENUE</span>

                            <strong>
                                {formatCurrency(
                                    results.projectedRevenue
                                )}
                            </strong>
                        </div>

                        <div className="tool-result-card tool-result-card-wide">
                            <span>REVENUE INCREASE</span>

                            <strong>
                                {formatCurrency(
                                    results.revenueIncrease
                                )}
                            </strong>
                        </div>

                    </div>

                    <div className="tool-result-note">
                        <strong>NOTE</strong>

                        <span>
                            This calculator assumes the same monthly
                            growth rate continues throughout the selected
                            period. Actual business growth can vary.
                        </span>
                    </div>

                </div>

            </div>
        </ToolLayout>
    );
}

export default BusinessGrowthCalculator;