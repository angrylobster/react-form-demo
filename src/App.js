import React from 'react';
import './App.css';
import { UserForm } from './components';
import { UserList } from './components/UserList';

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
