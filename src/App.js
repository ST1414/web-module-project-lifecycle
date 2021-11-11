// Leave search here
import React from 'react';
import './index.css';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';


class App extends React.Component {
  
  state = {
    search: 'st1414',
    user: {},
    followers: []
  }
  
  componentDidMount(){
    // ----- Initial user state load
    axios.get(`https://api.github.com/users/${this.state.search}`)
      .then( response => {
        this.setState({
          ...this.state,
          user: response.data
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  componentDidUpdate(prevProps, prevState){
    // ----- Initial follower state load
    if (this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/${this.state.user.login}/followers`)
        .then( response => {
          this.setState({
            ...this.state,
            followers: response.data
          })
        })
        .catch( error => {
          console.log(error);
        })
        .finally(
          this.setState({...this.state, search: ''})
        )
    } 
  }

  handleChange = (event) => {
    this.setState({...this.state, search: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.search}`)
      .then(response => {
        this.setState({
          ...this.state,
          user: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleFollowerClick = (followerLogin) => {
    axios.get(`https://api.github.com/users/${followerLogin}`)
      .then(response => {
        this.setState({
          ...this.state,
          user: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return(
      <div className='body-section'>
        <h1>GitHub Grabber</h1>
        <form className='search-section'>
          <input type='text' id='search-bar' value={this.state.search} onChange={this.handleChange} placeholder='Search Git Handle...'/>
          <button onClick={this.handleSubmit}>Go Git'em!</button>
        </form>
        <User user={this.state.user}/>
        <FollowerList 
          followers={this.state.followers} 
          handleFollowerClick={this.handleFollowerClick}
          />
      </div>
    );
  }
}

export default App;
