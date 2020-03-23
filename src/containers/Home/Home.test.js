import React from 'react';

import { render } from '@testing-library/react';

import Home from '.';

describe('Home container', () => {
    it('should be defined', () => {
        expect(Home).toBeDefined();
    });

    const { getByTestId} = render(<Home />);
    const homeContainer = getByTestId('home-container');

    it('should render a home container', () => {
        expect(homeContainer).not.toBeEmpty();
    })

});
