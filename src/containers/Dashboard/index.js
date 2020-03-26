import React from 'react';

import Card from '../../components/Card/';

export default function() {
    return (
        <div className='dashboard-container' data-testid='dashboard-container'>
            <Card cardId='dashboard-banner'>
                <h1>This is the dashboard</h1>
            </Card>
        </div>
    );
}
