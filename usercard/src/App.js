import React from 'react';
import axios from 'axios';
import './App.css';
import UserCards from './userCards';

class App extends React.Component {
  state = {
    userCards: [],
  }

  componentDidMount() {
      axios.get('https://api.github.com/users/WillisLi')
        .then(response => {
          this.setState({
            ...this.state,
            userCards: [response.data]
          })
        })
        .catch(error => {
            console.log(error);
        })
  }

  handleClick = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/WillisLi/followers`)
        .then(response => {
          response.data.map(follower => (
            this.setState({
              userCards: [...this.state.userCards, follower]
            })
          ))
        })
        .catch(error => {
            console.log(error);
        })
  }

  render() {
    return (
      <div className = "userApp">
          <h2>Github UserCards</h2>
          <UserCards userCards = {this.state.userCards} />
          <form>
            <button onClick = {this.handleClick}>
              Followers
            </button>
          </form>
      </div>

    )
  }
}

export default App;
