import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Card from '../../components/Card';

class LogInPresentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifiant: '',
            password: '',
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLazyLogin = this.handleLazyLogin.bind(this);

        this.handleIdentifierInput = this.handleIdentifierInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }
    handleLogin() {
        const identifiant = this.state.identifiant;
        const password = this.state.password;

        return this.props.onLogIn(identifiant, password)
            .then(data => alert(JSON.stringify(data)))
            .catch(err => alert('Error', JSON.stringify(err)));
    }

    handleLazyLogin() {
        const identifier = 'urtoob';
        const password = 'ToobRU';

        return this.props.onLogIn(identifier, password)
            .then(data => alert(JSON.stringify(data)))
            .catch(err => alert('Error', JSON.stringify(err)));
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
                </Card>
            </div>
        );
    }
}

LogInPresentational.propTypes = {
    onLogIn: PropTypes.func.isRequired,
}

export default LogInPresentational;
