import React from 'react';

import { render, cleanup } from '@testing-library/react';
import SandBox from '.'

describe('Sandbox component', () => {
    it('should be defined', () => {
        expect(SandBox).toBeDefined();
    });

    const { getByTestId } = render(<SandBox />);

    const sandboxComponent = getByTestId('sandbox-component');
    const sandboxTitle = getByTestId('sandbox--title')

    expect( sandboxComponent ).toBeInTheDocument();

    it('should have the proper className', () => {
        expect(sandboxComponent).toHaveClass('sandbox-component');
    });
    it('should contain a title with the proper class', () => {
        expect(sandboxComponent).toContainElement(sandboxTitle);
        expect(sandboxTitle).toHaveClass('sandbox--title')
        expect(sandboxTitle).toHaveTextContent('hello world')
    })

})
