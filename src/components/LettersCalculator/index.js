import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: '', count: 0}

  onchange = event => {
    console.log(event.target.value)
    this.setState({input: event.target.value, count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    const {input} = this.state
    return (
      <div className="page">
        <div className="content">
          <h1 className="heading">
            Calculate the <br />
            Letters you <br />
            Enter
          </h1>
          <label className="para" htmlFor="text">
            Enter the phrase
          </label>
          <br />
          <input id="text" onChange={this.onchange} value={input} />
          <div>
            <p className="countPara">No.of letters: {count}</p>
          </div>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
