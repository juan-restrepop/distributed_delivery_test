import React from 'react';

import { render, cleanup } from '@testing-library/react';
import SandBox from '.'

describe('Sandbox container', () => {
    it('should be defined', () => {
        expect(SandBox).toBeDefined();
    });

    const { getByRole } = render(<SandBox />);

    const sandboxContainer = getByRole('sandbox-container');
    const sandboxTitle = getByRole('sandbox--title')

    expect( sandboxContainer ).toBeInTheDocument();

    it('should have the proper className', () => {
        expect(sandboxContainer).toHaveClass('sandbox-container');
    });
    it('should contain a title with the proper class', () => {
        expect(sandboxContainer).toContainElement(sandboxTitle);
        expect(sandboxTitle).toHaveClass('sandbox--title')
        expect(sandboxTitle).toHaveTextContent('hello world')
    })

})
