// FollowerList.js (for map through a followers list)
import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    
    render () {
        return (
            // ----- FOLLOWER SECTION ----- 
            <div className='followers-parent'>
                <h2>Followers:</h2>
                <div className='followers-section'>
                    {/* ----- FOLLOWER ICONS ----- */}
                    {this.props.followers.map( follower => {
                        return <Follower 
                            key={follower.id} 
                            follower={follower} 
                            handleFollowerClick={this.props.handleFollowerClick}
                        />
                    })}
                </div>
            </div>
        )
    }
}
export default FollowerList;