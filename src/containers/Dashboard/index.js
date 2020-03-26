import React from 'react';

import Card from '../../components/Card/';

import AudienceGraph from './AudienceGraph';
import BandwidthGraph from './BandwidthGraph';

export default function() {
    return (
        <div className='dashboard-container' data-testid='dashboard-container'>
            <Card cardId='dashboard-banner'>
                <h1>This is the dashboard</h1>
                <AudienceGraph />
                <BandwidthGraph />
            </Card>
        </div>
    );
}
