// Leave search here
import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Github Info (App JS)</h1>
        <div className='seach-container'>
          <input />
          <button>Search</button>
        </div>
        <div className='user-container'>
          <img className='user-image' width='200px' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Person'/>
          <div className='user-info'>
            <h2>Name</h2>
            <h4>(Handle)</h4>
            <p>Total Repos: Number</p>
            <p>Total Followers: Number</p>
          </div>
          <div className='followers-container'>
            <h2>Followers:</h2>
            <div className='follower-images'>
              <div>
                <img className='user-image' width='200px' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Person'/>
                <h4>Name</h4>
                <img className='user-image' width='200px' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Person'/>
                <a href='www.motortrend.com'>Name</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
