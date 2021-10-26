// FollowerList.js (for map through a followers list)
import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    
    render () {
        return (
            // ----- FOLLOWER SECTION ----- 
            <div className='followers-container'>
                <h2>Followers:</h2>
                <div className='follower-icons'>
                    {/* ----- FOLLOWER ICONS ----- */}
                    {this.props.followers.map( follower => {
                        return <Follower key={follower.id} follower={follower}/>
                    })}
                </div>
            </div>
        )
    }
}
export default FollowerList;