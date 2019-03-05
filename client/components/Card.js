import React, {Component} from 'react'

export default class Card extends Component {
  render() {
    const {store, jpg, svg, txt, priority} = this.props
    return (
      <div className={`card${priority}`}>
        <img src={jpg} className="card-jpg" />
        <div className="new">NEW</div>
        <div className="card-txt">{txt}</div>
        <img src={svg} className="card-svg" />
      </div>
    )
  }
}
