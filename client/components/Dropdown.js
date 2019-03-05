import React, {Component} from 'react'

class Dropdown extends Component {
  constructor() {
    super()

    this.state = {
      displayMenu: false
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
  }

  showDropdownMenu(event) {
    event.preventDefault()
    this.setState({displayMenu: true}, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu() {
    this.setState({displayMenu: false}, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })
  }

  render() {
    return (
      <div className="dropdown">
        <div className="button" onClick={this.showDropdownMenu}>
          <img
            src="/3rd-section/dollar-sign.svg"
            alt="Dollar Sign"
            className="dollar-sign pulse"
          />
          <span className="drop-header"> Where's the money coming from?</span>
        </div>

        {this.state.displayMenu ? (
          <p className="drop-text">
            Retailers pay Fluz to bring them customers, i.e. our network of
            shoppers. We divide up that sum and distribute it across the
            network.
          </p>
        ) : null}
      </div>
    )
  }
}

export default Dropdown
