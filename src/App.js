import React from 'react';
import './App.css';
import { Form } from './components';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            gender: '',
            favoriteFood: ''
        };
    }

    handleFormChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <Form
                handleSubmit={(e) => this.handleSubmit(e)}
                handleFormChange={(e) => this.handleFormChange(e)}
                name={this.state.name}
                gender={this.state.gender}
                age={this.state.age}
                favoriteFood={this.state.favoriteFood}
                description={this.state.description}
            />
        );
    }
}

export default App;
