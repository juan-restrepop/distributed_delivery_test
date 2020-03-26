import React from 'react';
import PropTypes from 'prop-types';

import LogInPresentational from './LogInPresentational.js';

import { requestLogIn } from '../../api/';

function LogIn(props) {
    function _onLogIn(id, pwd) {
        const requestParameters = {
            identifiant: id,
            password: pwd
        };

        let referrer, location;
        if (!props.location.state) {
            referrer = false;
            location = '';
        } else {
            referrer = props.location.state.referrer;
            location = props.location.state.fromLocation;
        }

        return requestLogIn(requestParameters)
            .then(data => {
                debugger
                if (!referrer) {
                    debugger
                    return props.history.push('/')
                } else {
                    debugger
                    return props.history.push(location);
                }
            })
    }

    debugger

    return (
        <LogInPresentational onLogIn={_onLogIn} {...props}/>
    )
}

export default LogIn;
