import React from 'react';

import Button from '../../components/Button/'

import {requestLogOut} from '../../api/';

function _handleLogOut() {
    return requestLogOut()
        .then(data => alert(JSON.stringify(data)))
        .catch(err => alert('Error', JSON.stringify(err)));
}


export default function() {
    return (
        <div className='home-container' data-testid='home-container'>
            <div className='home-banner' data-testid='home-banner'>
                <h1 className='home-banner--title' data-testid='home-banner--title'>hello world</h1>
                <p className='home-banner-author' data-testid='home-banner--author'>by Juan Restrepo</p>
                <Button type='danger' title='Log Out' onClick={_handleLogOut} />
            </div>
        </div>
    );
}
