import React from 'react';

import classes from './ResultsTable.module.css';

const formattedCurrency = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
    return (
        // <table className="result">
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
                {/* <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                </tr> */}
                {props.data.map((yearData) => (
                    <tr key={yearData.year}>

                        <td>{yearData.year}</td>

                        {/* <td>{props.intialInvestment + yearData.yearlyContribution * yearData.year}</td> */}
                        <td>
                            {formattedCurrency.format(props.intialInvestment +
                                yearData.yearlyContribution * yearData.year)}
                        </td>

                        {/*<td>{yearData.yearlyInterest}</td> */}
                        <td>{formattedCurrency.format(yearData.yearlyInterest)}</td>

                        <td>
                            {/* {yearData.savingsEndOfYear -props.intialInvestment - yearData.yearlyContribution * yearData.year} */}
                            {formattedCurrency.format(yearData.savingsEndOfYear -
                                props.intialInvestment -
                                yearData.yearlyContribution * yearData.year)}
                        </td>

                          {/* <td>{yearData.savingsEndOfYear}</td>*/}
                        <td>{formattedCurrency.format(yearData.savingsEndOfYear)}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResultsTable