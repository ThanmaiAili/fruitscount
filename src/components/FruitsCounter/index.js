// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="fruitscounter-bg-container">
        <div className="fruits-card-container">
          <h1 className="heading">
            Bob ate <span className="value-count">{mango}</span> mangoes{' '}
            <span className="value-count">{banana}</span> bananas
          </h1>
          <div className="card-container">
            <div className="fruits-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruits-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
