// Write your JS code here

import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', isValid: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {method: 'POST', body: JSON.stringify(userDetails)}

    const response = await fetch(url, option)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({isValid: true})
    }
  }

  render() {
    const {username, password, isValid} = this.state
    const errorMessage = isValid ? '' : 'error-msg-display'
    return (
      <div className="login-container">
        <img
          className="website-login-img-1"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="login-logo-form-card">
          <img
            className="website-login-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <img
            className="website-login-img-2"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form onSubmit={this.onSubmitForm} className="login-form">
            <label className="form-label" htmlFor="username">
              USERNAME
            </label>
            <input
              onChange={this.onChangeUsername}
              value={username}
              className="form-input"
              id="username"
              type="text"
              placeholder="Username"
            />
            <label className="form-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              onChange={this.onChangePassword}
              value={password}
              className="form-input"
              id="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="form-button">
              Login
            </button>
            <p className={`error-msg ${errorMessage}`}>
              *Username and Password didnt match
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
