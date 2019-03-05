import React, {Component} from 'react'
import Section from './Section'

export default class Homepage extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="page">
        <div><br/><br/></div>
        <Section />
      </div>
    )
  }
}
