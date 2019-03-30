import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import belle from 'belle';
import { withRouter } from 'react-router-dom'
import Client from './Client'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            isLogged: "false"
        };
        this.client = new Client();
    }




    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted username:", this.state.username);
        console.log("You have submitted password:", this.state.password);

        this.client.login(this.state.username,this.state.password).then();
    };



    render() {
        const BButton = withRouter(({ history }) => (
            <belle.Button
                type='submit'
                onClick={() => { history.push('/main') }}
            >
                Sign in
            </belle.Button>
        ));
    return (
      <div className="App">
          <div id="header">
              <p>Наквасин Н. и Трав<button hidden="hidden">denis</button>ин Д. </p>
              <p>группа 3211</p>
              <p>Вариант 21142</p>
          </div>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div>
              <form onSubmit={this.handleFormSubmit}>
                  <belle.TextInput onUpdate={(username) => this.setState({username})}
                                   placeholder="username"
                                   value={this.state.username.value}/>
                  <belle.TextInput onUpdate={(password) => this.setState({password})}
                                   placeholder="password"
                                   value={this.state.password.value}/>
                  <BButton/>
              </form>
          </div>
      </div>
    );
  }
}

export default App;
