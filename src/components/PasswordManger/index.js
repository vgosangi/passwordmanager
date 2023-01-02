import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: [],
    searchInput: '',
    count: 0,
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPasswordItem = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordItem],
      website: '',
      username: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      website,
      username,
      password,
      passwordList,
      searchInput,
      count,
    } = this.state
    const searchResults = passwordList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="add-container">
          <div>
            <h1>Add New Password</h1>
            <form
              className="password-form-container"
              onSubmit={this.onAddPassword}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />
              <input
                type="text"
                value={website}
                onChange={this.onChangeWebsite}
                className="input"
                placeholder="Enter Website"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
              <input
                type="text"
                className="input"
                value={username}
                onChange={this.onChangeUsername}
                placeholder=" Enter Username"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />
              <input
                type="password"
                className="input"
                value={password}
                onChange={this.onChangePassword}
                placeholder="Enter Password"
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <img
            className="passwordManger"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="add-container">
          <h1>Your Passwords {count}</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="input-icon"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          {searchResults.length === 0 ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="passwordManger"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <PasswordItem searchResults={searchResults} />
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
