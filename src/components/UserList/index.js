import React from 'react';

export class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Banana',
                    age: 42,
                    gender: 'male',
                    favoriteFood: 'Chicken',
                    description: 'Some description'
                }
            ]
        };
    }

    deleteUser(id) {
        console.log(`Deleting user with ID ${id}`);
    }

    render() {
        return (
            <>
                <h3>User List</h3>
                {this.state.users.map(
                    ({ id, name, age, gender, favoriteFood, description }, index) => (
                        <div key={index}>
                            {id !== this.state.isEditing && (
                                <div>
                                    <h4 style={{ marginBottom: 8 }}>{name}</h4>
                                    <div>Age: {age}</div>
                                    <div>Gender: {gender}</div>
                                    <div>Favorite food: {favoriteFood}</div>
                                    <div>Description: {description}</div>

                                    <button onClick={() => this.deleteUser(id)}>Delete</button>
                                </div>
                            )}
                        </div>
                    )
                )}
            </>
        );
    }
}
