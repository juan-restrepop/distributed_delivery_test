import React from 'react';

import LogInPresentational from './LogInPresentational.js';

import { requestLogIn } from '../../api/';

function _onLogIn(id, pwd) {
    const requestParameters = {
        identifiant: id,
        password: pwd
    };

    return requestLogIn(requestParameters);
}

function LogIn() {
    return (
        <LogInPresentational onLogIn={_onLogIn}/>
    )
}

export default LogIn;
