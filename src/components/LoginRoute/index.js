import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <label className="password-label" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input
          className="password-input-field"
          id="password"
          type={inputType}
          onChange={this.onChangePassword}
          placeholder="Password"
          value={password}
        />
        <br />
        <div className="check-box-container">
          <input
            className="check-box-input"
            type="checkbox"
            id="show-password"
            onChange={this.onShowPassword}
          />
          <label className="show-password-label" htmlFor="show-password">
            Show Password
          </label>
        </div>
      </>
    )
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label className="user-label" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input
          className="user-input-field"
          id="username"
          placeholder="Username"
          onChange={this.onChangeUsername}
          type="text"
          value={username}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch"
            className="nxt-watch-logo"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="login-card">{this.renderUsername()}</div>
            <div className="password-card">{this.renderPassword()}</div>
            <div className="button-card">
              <button className="login-button" type="submit">
                Login
              </button>
            </div>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
