import React from 'react';

export default function () {
    return (
        <div className='sandbox-component' data-testid='sandbox-component' role='banner'>
            <h1 className='sandbox--title' data-testid='sandbox--title'>hello world</h1>
            <p className='sandbox-author' data-testid='sandbox--author'>by Juan Restrepo</p>
        </div>
    );
}
