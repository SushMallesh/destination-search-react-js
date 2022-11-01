import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const filteredDestinationsList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            onChange={this.onSearchInput}
            type="search"
            placeholder="search"
          />
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>

        <ul className="destinations-container">
          {filteredDestinationsList.map(eachDestination => (
            <DestinationItem
              eachDestination={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
