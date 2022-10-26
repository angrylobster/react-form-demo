import React from 'react';

export class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    name: 'Banana',
                    age: 42,
                    gender: 'male',
                    favoriteFood: 'Chicken',
                    description: 'Some description'
                }
            ]
        };
    }
    render() {
        return (
            <>
                <h3>User List</h3>
                {this.state.users.map(({ name, age, gender, favoriteFood, description }, index) => (
                    <div key={index}>
                        <h4 style={{ marginBottom: 8 }}>{name}</h4>
                        <div>Age: {age}</div>
                        <div>Gender: {gender}</div>
                        <div>Favorite food: {favoriteFood}</div>
                        <div>Description: {description}</div>
                    </div>
                ))}
            </>
        );
    }
}
