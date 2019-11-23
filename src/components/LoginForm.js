import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    const { username } = this.state
    const { password } = this.state
    return (
      <form onSubmit={this.handleSubmit}> 
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form> 
    );
  }
}

export default LoginForm;

//   <LoginForm handleLogin={this.login} />

