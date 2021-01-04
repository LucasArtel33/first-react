import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component{
  
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', err: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return function (e) {
        let state = {};
        state[key] = e.target.value;
        this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {
    const user = {
      username: "test",
      password: "1234",
    }
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    if(user.username !== data.username){
      let state = {};
      state['err'] = 'User not found';
      this.setState(state);
    }
    if(user.username === data.username && user.password !== data.password){
      let state = {};
      state['err'] = 'Bad Password';
      this.setState(state);
    }
    if(user.username === data.username && user.password === data.password) {
      document.location = "/home"
    }
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username : 
            <input type="text" autoComplete="" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
          <br/><br/>
          <label htmlFor="password"> 
            Password : 
            <input type="password" autoComplete="" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <br/><br/>
          <input type="submit" value="Login" />
          <p>{this.state.err}</p>
        </form>
      </div>
    )
  }
};