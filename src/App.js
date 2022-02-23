import {Component} from 'react'

import {v4} from 'uuid'

import ListItem from './Components/listItem'

import './App.css'

const classes = ['color2', 'color3', 'color4', 'color5', 'color6']

class App extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    search: '',
    passwordsList: [],
    showPassword: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const colorClassName = classes[Math.floor(Math.random() * classes.length)]
    const details = {
      id: v4(),
      website,
      username,
      password,
      colorClassName,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, details],
      website: '',
      username: '',
      password: '',
      search: '',
    }))
  }

  onDelete = id => {
    const {passwordsList} = this.state
    this.setState({
      passwordsList: passwordsList.filter(eachItem => eachItem.id !== id),
    })
  }

  render() {
    const {
      website,
      username,
      passwordsList,
      showPassword,
      search,
      password,
    } = this.state
    const count = passwordsList.length
    const filteredList = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(search.toLowerCase()),
    )
    let pwdContainer
    if (filteredList.length === 0) {
      pwdContainer = (
        <div className="no-passwords-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt=" no passwords"
            className="no-passwords-image"
          />
          <p className="your-passwords-heading">No Passwords</p>
        </div>
      )
    } else {
      pwdContainer = (
        <ul className="passwords-list">
          {filteredList.map(eachItem => (
            <ListItem
              details={eachItem}
              onDelete={this.onDelete}
              showPassword={showPassword}
              key={eachItem.id}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="add-password-container">
          <div className="form-container">
            <h1 className="add-password-heading">Add New Password</h1>
            <form className="form" onSubmit={this.onClickSubmit}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-logo"
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="passwords-container">
          <div className="your-passwords-heading-search-container">
            <h1 className="your-passwords-heading">
              Your Passwords <p className="count">{count}</p>
            </h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                className="search"
                placeholder="Search"
                value={search}
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show-icon-container">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox"
                onChange={this.onChangeCheckbox}
              />
              <label className="label" htmlFor="checkbox">
                Show Passwords
              </label>
            </div>
          </div>
          {pwdContainer}
        </div>
      </div>
    )
  }
}

export default App
