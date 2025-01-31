import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { CreateUser } from './components/CreateUser';
import { DisplayBoard } from './components/DisplayBoard';
import { Users } from './components/Users';
import { getUsers, addUser } from './services/AppService';
import './App.css';


class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 4
  }

  createUser = (e) => {
    const response = addUser(this.state.user);
    console.log(response);
    this.setState({numberOfUsers: this.state.numberOfUsers + 1})
  }

  getAllUsers = () => {
    const users = getUsers();
    console.log(users);
    this.setState({users: users, numberOfUsers: users.length});
  }

  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      this.setState({user})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}
export default App;
