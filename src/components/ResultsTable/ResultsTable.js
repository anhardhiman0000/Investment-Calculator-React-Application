import React from "react";

import classes from "./ResultsTable.module.css";

const formattedCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested Capital</th>
                    <th>Interest (Per-Year)</th>
                    <th>Total Interest Earning</th>
                    <th>Total Savings</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>
                            {formattedCurrency.format(
                                props.intialInvestment +
                                yearData.yearlyContribution * yearData.year
                            )}
                        </td>

                        <td>{formattedCurrency.format(yearData.yearlyInterest)}</td>

                        <td>
                            {formattedCurrency.format(
                                yearData.savingsEndOfYear -
                                props.intialInvestment -
                                yearData.yearlyContribution * yearData.year
                            )}
                        </td>
                        <td>{formattedCurrency.format(yearData.savingsEndOfYear)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ResultsTable;
