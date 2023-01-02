import {Component} from 'react'
import Password from '../Password'

class PasswordItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
      searchResultsList: props.searchResults,
    }
  }

  onPasswordShow = () => {
    const {selected} = this.state
    this.setState({selected: !selected})
  }

  deleteUser = id => {
    const {searchResults} = this.props
    console.log(searchResults)
    const filteredUsersData = searchResults.filter(each => each.id !== id)
    console.log(searchResults, filteredUsersData)
    this.setState({
      searchResultsList: filteredUsersData,
    })
  }

  render() {
    const {selected, searchResultsList} = this.state
    console.log(searchResultsList)
    return (
      <div className="app-container">
        <input type="checkbox" name="checkbox" onChange={this.onPasswordShow} />
        <label htmlFor="checkbox">Show passwords</label>
        <ul className="list-container">
          {searchResultsList.map(eachUser => (
            <Password
              passwordDetails={eachUser}
              key={eachUser.id}
              selected={selected}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default PasswordItem
