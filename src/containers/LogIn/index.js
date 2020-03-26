import React from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';

import { requestLogIn, requestLogOut } from '../../api/';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifiant: '',
            password: '',
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLazyLogin = this.handleLazyLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleIdentifierInput = this.handleIdentifierInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.getLoginParametersFromState = this.getLoginParametersFromState.bind(this);


    }

    getLoginParametersFromState() {
        return {
            identifiant: this.state.identifiant,
            password: this.state.password,
        };
    }

    handleLogin() {
        const loginParameters = this.getLoginParametersFromState();
        return requestLogIn(loginParameters)
            .then(data => alert(JSON.stringify(data)))
            .catch(err => alert('Error', JSON.stringify(err)))
    }

    handleLogout() {
        return requestLogOut()
            .then(data => alert(JSON.stringify(data)))
            .catch(err => alert('Error', JSON.stringify(err)))
    }

    handleLazyLogin() {
        const lazyLoginParameters = {
            identifiant: 'urtoob',
            password: 'ToobRU',
        }

        return requestLogIn(lazyLoginParameters)
            .then(data => alert(JSON.stringify(data)))
            .catch(err => alert('Error', JSON.stringify(err)))
    }

    handleIdentifierInput(event) {
        this.setState({
            identifiant: event.target.value
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
                        <input type="text" id="identifiant" name="identifiant" placeholder="identifiant"
                            value={this.state.identifiant} onChange={this.handleIdentifierInput}
                            />
                        <input type="password" id="password" name="password" placeholder="password"
                            value={this.state.password} onChange={this.handlePasswordInput}
                            />
                    </form>
                    <Button onClick={this.handleLogin} type='success' title='log in' />
                    <Button onClick={this.handleLazyLogin} type='action' title='Lazy log in' />
                    <Button onClick={this.handleLogout} type='danger' title='Log Out' />
                </Card>
            </div>
        );
    }
}

export default LogIn;
