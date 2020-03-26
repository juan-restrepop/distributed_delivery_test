import React from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleIdentifierInput = this.handleIdentifierInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);

    }

    handleLogin() {
        alert(JSON.stringify(this.state));
    }

    handleIdentifierInput(event) {
        this.setState({
            identifier: event.target.value
        })
    }

    handlePasswordInput(event) {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div className='login-container'>
                <Card cardClass='login-form' cardId='login-form'>
                    <form onSubmit={this.handleLogin}>
                        <input type="text" id="identifier" name="identifier" placeholder="identifier"
                            value={this.state.identifier} onChange={this.handleIdentifierInput}
                            />
                        <input type="password" id="password" name="password" placeholder="password"
                            value={this.state.password} onChange={this.handlePasswordInput}
                            />
                        <Button onClick={this.handleLogin} type='success' title='log in' />
                    </form>
                </Card>
            </div>
        );
    }
}

export default LogIn;
