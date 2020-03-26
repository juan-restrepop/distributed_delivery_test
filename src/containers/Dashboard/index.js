import React from 'react';

import {requestLogOut} from '../../api/';

import Card from '../../components/Card/';
import Button from '../../components/Button/';


import AudienceGraph from './AudienceGraph';
import BandwidthGraph from './BandwidthGraph';

export default function(props) {
    function _handleLogOut() {
        return requestLogOut()
            .then(data => props.history.push('/login'));
    }

    return (
        <div className='dashboard-container' data-testid='dashboard-container'>
            <Card cardId='dashboard-banner'>
                <BandwidthGraph />
                <AudienceGraph />
            </Card>
            <Button title='Log Out' type='danger' onClick={_handleLogOut} />
        </div>
    );
}
