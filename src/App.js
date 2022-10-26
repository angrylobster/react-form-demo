import React from 'react';
import './App.css';
import { UserForm, UserList } from './components';

class App extends React.Component {
    render() {
        return (
            <div style={{ padding: '16px 32px' }}>
                <UserList />
                <UserForm />
            </div>
        );
    }
}

export default App;
