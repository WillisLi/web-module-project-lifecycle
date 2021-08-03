import React from 'react'

class UserCard extends React.Component {
    render() {
        return(
            <div className = "userCard">
                <img src = {this.props.userCard.avatar_url} alt = "userProfilePic" />
                <div className = "userInfo">
                    <p>Username: {this.props.userCard.login}</p>
                    <p>Bio: {this.props.userCard.bio}</p>
                    <p>Location: {this.props.userCard.location}</p>
                </div>
          </div>
        );
    }
}

export default UserCard;