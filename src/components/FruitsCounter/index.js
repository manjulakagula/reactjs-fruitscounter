import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoClick = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  bananaClick = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="fruits-container">
        <div className="card-container">
          <h1 className="fruits-eat-heading">
            Bob ate <span className="mango-count">{count1}</span> mangoes{' '}
            <span className="banana-count">{count2}</span> bananas
          </h1>
          <div className="fruits-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-image"
            />
          </div>
          <div className="button-container">
            <button
              className="fruit-button"
              type="button"
              onClick={this.mangoClick}
            >
              Eat Mango
            </button>
            <button
              className="fruit-button"
              type="button"
              onClick={this.bananaClick}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
