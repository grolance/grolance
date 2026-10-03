import { useMemo, useState } from "react";

import ToolLayout from "../../components/tools/ToolLayout";
import NumberStepper from "../../components/tools/NumberStepper";

function ProfitMarginCalculator() {
    const [costPrice, setCostPrice] = useState(100);
    const [sellingPrice, setSellingPrice] = useState(150);
    const [quantity, setQuantity] = useState(1);

    const results = useMemo(() => {
        const cost = Number(costPrice) || 0;
        const selling = Number(sellingPrice) || 0;
        const qty = Number(quantity) || 0;

        const totalCost = cost * qty;
        const totalRevenue = selling * qty;
        const totalProfit = totalRevenue - totalCost;

        const profitMargin =
            totalRevenue > 0
                ? (totalProfit / totalRevenue) * 100
                : 0;

        const markup =
            totalCost > 0
                ? (totalProfit / totalCost) * 100
                : 0;

        return {
            totalCost,
            totalRevenue,
            totalProfit,
            profitMargin,
            markup,
        };
    }, [costPrice, sellingPrice, quantity]);

    const formatCurrency = (value) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);

    return (
        <ToolLayout
            title="Profit Margin Calculator"
            category="BUSINESS TOOL"
            description="Calculate your selling price, profit, margin and markup in seconds."
        >
            <div className="tool-calculator">

                <div className="tool-calculator-panel">

                    <div className="tool-form-grid">

                        <div className="tool-field">
                            <span>Cost Price</span>

                            <NumberStepper
                                value={costPrice}
                                onChange={setCostPrice}
                                min={0}
                                max={100000000}
                                step={10}
                                prefix="₹"
                            />
                        </div>

                        <div className="tool-field">
                            <span>Selling Price</span>

                            <NumberStepper
                                value={sellingPrice}
                                onChange={setSellingPrice}
                                min={0}
                                max={100000000}
                                step={10}
                                prefix="₹"
                            />
                        </div>

                        <div className="tool-field">
                            <span>Quantity</span>

                            <NumberStepper
                                value={quantity}
                                onChange={setQuantity}
                                min={1}
                                max={1000000}
                                step={1}
                            />
                        </div>

                    </div>

                </div>

                <div className="tool-result">

                    <div className="tool-result-top">
                        <div>
                            <h2>Your Results</h2>
                        </div>

                        <span className="tool-result-badge">
                            CALCULATED
                        </span>
                    </div>

                    <div className="tool-result-grid">

                        <div className="tool-result-card">
                            <span>TOTAL COST</span>
                            <strong>
                                {formatCurrency(results.totalCost)}
                            </strong>
                        </div>

                        <div className="tool-result-card">
                            <span>TOTAL REVENUE</span>
                            <strong>
                                {formatCurrency(results.totalRevenue)}
                            </strong>
                        </div>

                        <div className="tool-result-card">
                            <span>TOTAL PROFIT</span>
                            <strong>
                                {formatCurrency(results.totalProfit)}
                            </strong>
                        </div>

                        <div className="tool-result-card">
                            <span>PROFIT MARGIN</span>
                            <strong>
                                {results.profitMargin.toFixed(1)}%
                            </strong>
                        </div>

                        <div className="tool-result-card tool-result-card-wide">
                            <span>MARKUP</span>
                            <strong>
                                {results.markup.toFixed(1)}%
                            </strong>
                        </div>

                    </div>

                    <div className="tool-result-note">
                        <strong>NOTE</strong>

                        <span>
                            This calculation does not include taxes,
                            shipping, payment gateway fees or other
                            operating expenses.
                        </span>
                    </div>

                </div>

            </div>
        </ToolLayout>
    );
}

export default ProfitMarginCalculator;