import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App container', () => {
    it('should be defined', () => {
        expect(App).toBeDefined();
    });

    const { getByTestId } = render( <App />);
    const sandboxContainer = getByTestId('sandbox--title');

    it('should render a sandbox container', () => {
        expect(sandboxContainer).not.toBeEmpty();
    })


})
