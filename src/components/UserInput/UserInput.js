import React, { useState } from 'react';

import classes from './UserInput.module.css';

const initialUserInput = {
    'current-savings': 500,
    'yearly-contribution': 150000,
    'expected-return': 7.1,
    // 'duration': 15
    duration: 15
}

const UserInput = (props) => {

    // State Management

    // const [userInput, setUserInput] = useState({
    //     'current-savings': 500,
    //     'yearly-contribution': 150000,
    //     'expected-return': 7.1,
    //     'duration': 15
    // });
    const [userInput, setUserInput] = useState(initialUserInput);

    // Event Handlers
    const inputChangeHandler = (input, value) => {
        // console.log(input, value);
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                // [input]: value, //identifire = value work respectivally {BUG}
                [input]: +value, //identifire = value work respectivally
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log("Calculate/Submit Button Clicked");
        props.onCalculate(userInput);
    }

    const resetHandler = () => {
        // console.log("Reset Button Clicked");
        setUserInput(initialUserInput);
    }

    return (
        // <form onSubmit={submitHandler} className="form">
        <form onSubmit={submitHandler} className={classes.form}>
            {/* <div className="input-group"> */}
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings (₹)</label>
                    <input onChange={(event) => inputChangeHandler('current-savings', event.target.value)}
                        value={userInput['current-savings']} //two-way binding [for reflect the value on UI]
                        type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
                    <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)}
                        value={userInput['yearly-contribution']} type="number" id="yearly-contribution" />
                </p>
            </div>
            {/* <div className="input-group"> */}
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)}
                        value={userInput['expected-return']} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangeHandler('duration', event.target.value)}
                        // value={userInput.duration} 
                        value={userInput['duration']} type="number" id="duration" />
                </p>
            </div>

            {/* Reset button to reset the form */}
            {/* <p className="actions"> */}
            <p className={classes.actions}>
                <button onClick={resetHandler} 
                type="reset" 
                // className="buttonAlt">
                className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" 
                // className="button">
                className={classes.button}>
                    Calculate
                </button>
            </p>

        </form>
    )
}

export default UserInput