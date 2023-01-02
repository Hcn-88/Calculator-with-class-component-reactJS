import React from "react";

class Calc extends React.Component {

  operators = [".", "/", "*", "+", "-"];

  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }

  createNumbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => this.getValue(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };

  getValue = (value) => {
    if (this.operators.includes(value) && this.state.result === "") return;
    if (
      this.operators.includes(value) &&
      this.operators.includes(this.state.result.slice(-1))
      )
      return;

    const newValue = this.state.result + value;
    this.setState({
      result: newValue
    });
  };

  deleteValue = () => {
    const deletedValue = this.state.result.slice(0, -1);
    this.setState({
      result: deletedValue
    });
  };

  doTheMath = () => {
    if (
      this.operators.includes(this.state.result.slice(-1)) ||
      this.state.result === ""
    )
      return;

    const evaluate = eval(this.state.result);
    this.setState({
      result: evaluate
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Calculator</h1>
        <div className="display">
          <input disabled type="text" value={this.state.result || "0"} />
        </div>
        <section>
          <div>
            <button onClick={this.deleteValue}>Del</button>
            <button onClick={() => this.getValue(".")}>.</button>
            <button onClick={() => this.getValue("/")}>/</button>
            <button onClick={() => this.getValue("*")}>*</button>
            <button onClick={() => this.getValue("+")}>+</button>
            <button onClick={() => this.getValue("-")}>-</button>
          </div>
          <div>{this.createNumbers()}</div>
          <div>
            <button onClick={() => this.getValue("0")}>0</button>
            <button onClick={() => this.getValue("00")}>00</button>
            <button onClick={this.doTheMath}>=</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Calc;
