import React from 'react';
import './App.css'

class JavaScriptCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      input: '0',
      operator: false,
      result: '',
    };
  }

  handleDisplayOperators(e) {
    const { display, input } = this.state;
    this.setState({
      display: display + input,
      input: '',
    });
  }

  inputNumbers(e) {
    const { input, display } = this.state;
    input === '0'
      ? this.setState({ input: e.target.value, display: display + e.target.value })
      : input.match(/[-+*/]/)
        ? this.setState({ input: e.target.value, display: display + e.target.value })
        : e.target.value === '0'
          ? this.setState({ input: e.target.value, })
          : this.setState({ input: input + e.target.value, display: display + e.target.value })
  }

  handleInputNumbers(e) {
    const { input, display } = this.state;
    if(input.match(/[-+*/]/)) {
      this.setState({
        display: display + input,
      })
      this.setState({
        input: e.target.value,
      });
    }
    
    this.setState({
      input: input + e.target.value,
    });
    // this.handleDisplay(e);
  }

  handleInputOperators(e) {
    const { input, display } = this.state;
    this.setState({
      display: display + e.target.value,
      input: e.target.value,
    });
  }

  clearAll() {
    this.setState({
      display: '',
      input: '0',
      operator: false,
      result: '',
    })
  }

  handleDelete(e) {

  }

  evaluateString(e) {

  }

  render() {
    const { display, input, result } = this.state;
    return (
      <div>
        <div>
          <p id="result">{display + result}</p>
          <p id="display">{input}</p>

        </div>
        <div id="board">
          <div id="first-column" onClick={(e) => this.inputNumbers(e, "value")}>
            <button id="seven" value="7">
              7
            </button>
            <button id="four" value="4">
              4
            </button>
            <button id="one"   value="1">
              1
            </button>
            <button id="decimal" value=".">
              .
            </button>
          </div>
          <div id="second-column" onClick={(e) => this.inputNumbers(e, "value")}>
            <button id="eight" value="8">
              8
            </button>
            <button id="five" value="5">
              5
            </button>
            <button id="two" value="2">
              2
            </button>
            <button id="zero" value="0">
              0
            </button>
          </div>
          <div id="third-column" onClick={(e) => this.inputNumbers(e, "value")}>
            <button id="nine" value="9">
              9
            </button>
            <button id="six" value="6">
              6
            </button>
            <button id="three" value="3">
              3
            </button>
            <button onClick={() => this.delete()}>d</button>
          </div>
          <div id="fourth-column">
          <div id="operators"  onClick={(e) => this.handleInputOperators(e, "value")}>
            <button id="add"  value="+">
              +
            </button>
            <button id="subtract" value="-">
              -
            </button>
            <button id="multiply" value="*">
              *
            </button>
            <button id="divide" value="/">
              /
            </button>
          </div>
          <div id="operators" onClick={() => this.clearAll()}>
            <button id="clear">C</button>
          </div>
          <div id="operators" onClick={() => this.evaluateString()}>
            <button id="equals">=</button>
          </div>
        </div>
          <div onClick={(e) => this.handleInput(e, "value")}></div>
        </div>
      </div>
    );
  }
}

export default JavaScriptCalculator;
