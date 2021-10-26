// Leave search here
import React from 'react';
import './index.css';
import User from './components/User';
import FollowerList from './components/FollowerList';
import Follower from './components/Follower';


class App extends React.Component {
  
  state = {
    search: '',
    user: [],
    followers: []
  }
  
  render() {
    return(
      <div className='body-container'>
        <h1>Github Info (App JS)</h1>
        <div className='search-container'>
          <input placeholder='Seach Github Handle...'/>
          <button>Got Git'em!</button>
        </div>
        <div className='user-container'>
          <img className='user-image' width='200px' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Person'/>
          <div className='user-info'>
            <h2>Name</h2>
            <h4>(Handle)</h4>
            <p>Total Repos: Number</p>
            <p>Total Followers: Number</p>
          </div>
        </div>
        <div className='followers-container'>
          <h2>Followers:</h2>
          <div className='follower-icons'>
            <div className='follower'>
              <img className='follower-image' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Person'/>
              <h4>Name</h4>
            </div>
            <div className='follower'>
              <img className='follower-image' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Person'/>
              <h4>Name</h4>
            </div>
            <div className='follower'>
              <img className='follower-image' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Person'/>
              <h4>Name</h4>
            </div>
            <div className='follower'>
              <img className='follower-image' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Person'/>
              <h4>Name</h4>
            </div>
          </div>
        </div>
        <User />
        <FollowerList />
        <Follower />
      </div>
    );
  }
}

export default App;
