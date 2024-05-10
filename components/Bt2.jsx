import React, { Component } from 'react';

class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 10,
            number2: 5
        };
    }

    // Hàm cộng
    add = () => {
        return this.state.number1 + this.state.number2;
    }

    // Hàm trừ
    subtract = () => {
        return this.state.number1 - this.state.number2;
    }

    // Hàm nhân
    multiply = () => {
        return this.state.number1 * this.state.number2;
    }

    // Hàm chia
    divide = () => {
        return this.state.number1 / this.state.number2;
    }

    render() {
        return (
            <div>
                <h1>Calculation Results</h1>
                <p>Number 1: {this.state.number1}</p>
                <p>Number 2: {this.state.number2}</p>
                <p>Sum: {this.add()}</p>
                <p>Subtraction: {this.subtract()}</p>
                <p>Multiplication: {this.multiply()}</p>
                <p>Division: {this.divide()}</p>
            </div>
        );
    }
}

export default Calculation;
