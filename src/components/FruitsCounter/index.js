// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, counter: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {count} = this.state

    const {counter} = this.state

    return (
      <div className="bg">
        <div className="container">
          <div className="row">
            <div className="column">
              <h1>
                Bob ate<span className="bg1"> {count} </span>mangoes
                <span className="bg2"> {counter}</span> bananas
              </h1>
              <div className="bo">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                    className="im1"
                    alt="mango"
                  />
                  <div className="b1">
                    <button className="button" onClick={this.onIncrement}>
                      Eat Mango
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                    className="im1"
                    alt="banana"
                  />
                  <div className="b1">
                    <button className="button" onClick={this.onDecrement}>
                      Eat Bananas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
