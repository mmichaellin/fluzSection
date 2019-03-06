import React, {Component} from 'react'
import Card from './Card'

export default class Slider extends Component {
  constructor() {
    super()
    this.state = {
      highlights: [
        {
          store: 'Nike',
          jpg: '/3rd-section/feed/nike/nike.jpg',
          svg: '/3rd-section/feed/nike/nike.svg',
          txt: 'You earned $0.91 from highlife18'
        },
        {
          store: 'iTunes',
          jpg: '/3rd-section/feed/itunes/itunes.jpg',
          svg: '/3rd-section/feed/itunes/apple-itunes.svg',
          txt: 'You earned $1.12 from fluzmaster21'
        },
        {
          store: 'Starbucks',
          jpg: '/3rd-section/feed/starbucks/starbucks.jpg',
          svg: '/3rd-section/feed/starbucks/starbucks.svg',
          txt: 'You earned $0.79 from connected26'
        },
        {
          store: 'Panera Bread',
          jpg: '/3rd-section/feed/panera/panera.jpg',
          svg: '/3rd-section/feed/panera/panera-bread.svg',
          txt: 'You earned $0.82 from breezy36'
        }
      ],
      fadeOut: 0,
      transition: 1,
      display: 2,
      mounted: false
      // intID
    }
    this.changeCard = this.changeCard.bind(this)
    // window.setInterval(this.changeCard, 3000)
  }
  changeCard() {
    let newFadeOut = this.state.fadeOut + 1
    let newTransition = this.state.transition + 1
    let newDisplay = this.state.display + 1
    if (newFadeOut > 3) {
      newFadeOut = 0
    }
    if (newTransition > 3) {
      newTransition = 0
    }
    if (newDisplay > 3) {
      newDisplay = 0
    }
    this.setState({
      fadeOut: newFadeOut,
      transition: newTransition,
      display: newDisplay
    })
  }
  componentDidMount() {
    let intID = setInterval(this.changeCard, 3000)
    this.setState({
      intID: intID,
      mounted: true
    })
  }
  componentWillMount() {
    if (this.state.intID) {
      clearInterval(this.state.intID)
    }
    this.setState({
      mounted: false
    })
  }
  render() {
    return (
      <div className="slider">
        {this.state.mounted ? (
          <React.Fragment>
            <Card
              store={this.state.highlights[this.state.display].store}
              jpg={this.state.highlights[this.state.display].jpg}
              svg={this.state.highlights[this.state.display].svg}
              txt={this.state.highlights[this.state.display].txt}
              priority={3}
            />
            <Card
              store={this.state.highlights[this.state.transition].store}
              jpg={this.state.highlights[this.state.transition].jpg}
              svg={this.state.highlights[this.state.transition].svg}
              txt={this.state.highlights[this.state.transition].txt}
              priority={2}
            />
            <Card
              store={this.state.highlights[this.state.fadeOut].store}
              jpg={this.state.highlights[this.state.fadeOut].jpg}
              svg={this.state.highlights[this.state.fadeOut].svg}
              txt={this.state.highlights[this.state.fadeOut].txt}
              priority={1}
            />
          </React.Fragment>
        ) : null}
      </div>
    )
  }
}
