import React from 'react';

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
                if (!referrer) {
                    return props.history.push('/')
                } else {
                    return props.history.push(location);
                }
            })
    }

    return (
        <LogInPresentational onLogIn={_onLogIn} {...props}/>
    )
}

export default LogIn;
