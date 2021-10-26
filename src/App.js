// Leave search here
import React from 'react';
import './index.css';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';


class App extends React.Component {
  
  state = {
    search: 'wlongmire',
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
      axios.get(`https://api.github.com/users/${this.state.search}/followers`)
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

  changeHandler = (event) => {
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


  //

  render() {
    return(
      <div className='body-container'>
        <h1>Github Info (App JS)</h1>
        {/* ----- SEARCH CONTAINER ----- */}
        <form className='search-container'>
          <input type='text' name='search' value={this.state.search} onChange={this.changeHandler} placeholder='Search Github Handle...'/>
          <button onClick={this.handleSubmit}>Got Git'em!</button>
        </form>
        {/* ----- USER CONTAINER ----- */}
        <User user={this.state.user}/>
        {/* ----- FOLLOWERS CONTAINER ----- */}
        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
