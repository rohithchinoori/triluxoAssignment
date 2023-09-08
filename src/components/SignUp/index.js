import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

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

  onSubmitFailure = () => {
    this.setState({showSubmitError: true, errorMsg: 'User already exist'})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'http://localhost:3001/signup'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        <img
          src="https://img.freepik.com/free-vector/blogger-concept-sharing-media-content-internet-idea-social-media-network-online-communication-giveaway-advert-isolated-flat-vector-illustration_613284-2022.jpg?w=996&t=st=1694100583~exp=1694101183~hmac=4de7181ced5fb29a531f536fc71fec70ec1bbe907bbd9f1cdd25a3cbf1771eeb"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg?w=996&t=st=1694100809~exp=1694101409~hmac=899fd0583869b420e990b675476204028cb8467ba66b1d31a74227f23d713dd6"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Signup
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <div className="log-cont">
            <p className="par">Already have an account</p>
            <Link to="/login">
              <button type="button" className="login-button1">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
