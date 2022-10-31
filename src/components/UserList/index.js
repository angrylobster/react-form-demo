import { onValue, orderByChild, query, ref, remove } from 'firebase/database';
import React from 'react';
import { db } from '../../firebase';

export class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    deleteUser(id) {
        console.log(`Deleting user with ID ${id}`);

        remove(ref(db, `users/${id}`));
    }

    componentDidMount() {
        const usersRef = query(ref(db, 'users'), orderByChild('age'));

        onValue(usersRef, (snapshot) => {
            const users = [];
            snapshot.forEach((childSnapshot) => {
                users.push({ ...childSnapshot.val(), id: childSnapshot.key });
            });

            this.setState({
                users
            });
        });
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
