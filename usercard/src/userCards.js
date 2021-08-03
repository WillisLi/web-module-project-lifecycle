import React from 'react';
import UserCard from './userCard';

class UserCards extends React.Component {
    componentDidMount() {
        console.log("UserCards: App Mounts");
    }

    render() {
        console.log(this.props.userCards);
        return (           
            <div className = "userList">
                {this.props.userCards.map(userCard => (
                <UserCard key = {userCard.id} userCard = {userCard} />
                ))}
            </div>
        );
    }
}

export default UserCards;