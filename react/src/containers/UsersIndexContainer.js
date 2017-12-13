import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import UsersIndexTile from "../components/UsersIndexTile"

class UsersIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: null
    }
    this.onDelete = this.onDelete.bind(this)
  }

  getUsers(){
    fetch('/api/v1/users', {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        users: body.users,
        currentUser: body.current_user
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  onDelete(id) {
    fetch(`/api/v1/users/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.getUsers();
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    let users;

    if(this.state.currentUser !== null && this.state.currentUser.role === 'admin'){
      users = this.state.users.map((user) => {
        return(
          <UsersIndexTile
            onDelete={this.onDelete}
            key={user.id}
            id={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
            role={user.role}
          />
        )
      })
    }

    return(
      <div>
        {users}
      </div>
    )
  }
}
export default UsersIndexContainer;
