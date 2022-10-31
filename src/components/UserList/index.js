import React from 'react';
import {
    deleteUser as deleteFirebaseUser,
    createUsersListener as createFirebaseUsersListener
} from '../../firebase';

export class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        createFirebaseUsersListener((snapshot) => {
            const users = [];
            snapshot.forEach((childSnapshot) => {
                users.push({ ...childSnapshot.val(), id: childSnapshot.key });
            });

            this.setState({
                users
            });
        });
    }

    deleteUser(id) {
        deleteFirebaseUser(id);
    }

    render() {
        return (
            <>
                <h3>User List</h3>
                {this.state.users.map(
                    ({ id, name, age, gender, favoriteFood, description }, index) => (
                        <div key={index}>
                            <div>
                                <h4 style={{ marginBottom: 8 }}>{name}</h4>
                                <div>Age: {age}</div>
                                <div>Gender: {gender}</div>
                                <div>Favorite food: {favoriteFood}</div>
                                <div>Description: {description}</div>

                                <button onClick={() => this.deleteUser(id)}>Delete</button>
                            </div>
                        </div>
                    )
                )}
            </>
        );
    }
}
