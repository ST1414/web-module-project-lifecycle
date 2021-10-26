// Follower.js (for displaying an individual follower) components to efficiently distribute your code. 
import React from 'react';

class Follower extends React.Component {

    render (){
        return (
            
            <div className='follower'>
                <img className='follower-image' width='100px' src={this.props.follower.avatar_url} alt='Avatar'/>
                <p>{this.props.follower.login}</p>
            </div>
        )
    }
}

export default Follower;