import { FOOD_OPTIONS } from './constants';
import React from 'react';
import { createUser as createFirebaseUser } from '../../firebase';

export class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            gender: '',
            favoriteFood: '',
            description: ''
        };
    }

    handleFormChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createUser(e) {
        e.preventDefault();
        createFirebaseUser(this.state);
    }

    render() {
        return (
            <div>
                <h3>Create User Form</h3>

                <form onSubmit={(e) => this.createUser(e)}>
                    <div className="form-item">
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            value={this.state.name}
                            id="name"
                            onChange={(e) => this.handleFormChange(e)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="age">Age</label>
                        <input
                            name="age"
                            value={this.state.age}
                            id="age"
                            onChange={(e) => this.handleFormChange(e)}
                        />
                    </div>

                    <div className="form-item">
                        <label>Gender</label>
                        <input
                            name="gender"
                            value="male"
                            type="radio"
                            onChange={(e) => this.handleFormChange(e)}
                            checked={this.state.gender === 'male'}
                        />
                        Male
                        <input
                            name="gender"
                            value="female"
                            type="radio"
                            onChange={(e) => this.handleFormChange(e)}
                            checked={this.state.gender === 'female'}
                        />
                        Female
                    </div>

                    <div className="form-item">
                        <label>Favorite Food</label>
                        <select
                            onChange={(e) => this.handleFormChange(e)}
                            value={this.state.favoriteFood}
                            name="favoriteFood">
                            {FOOD_OPTIONS.map(({ name, value }, index) => (
                                <option key={index} name={name} value={value}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="description">Description</label>

                        <textarea
                            rows={5}
                            name="description"
                            value={this.state.description}
                            style={{ width: '300px' }}
                            onChange={(e) => this.handleFormChange(e)}></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
