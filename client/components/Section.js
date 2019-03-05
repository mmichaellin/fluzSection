import React, {Component} from 'react'
import Dropdown from './Dropdown'
import Slider from './Slider'

export default class Homepage extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="section">
        <div className="subsection1">
          <Slider />
        </div>
        <div className="subsection2">
          <span>EARN FOR BEING SOCIAL</span>
          <h1>Strength In Numbers</h1>
          <p>
            The little things add up. We use dozens of apps to connect to each
            other and to brands. At Fluz, we’re trying to bridge the two. Our
            mission is to connect as many shoppers as possible, so that earning
            money becomes as easy as spending it.
          </p>
          <Dropdown />
        </div>
      </div>
    )
  }
}
