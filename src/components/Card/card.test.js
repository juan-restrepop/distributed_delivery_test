import React from 'react';

import { render, cleanup } from '@testing-library/react';
import Card from '.'

describe('Card component', () => {
    it('should be defined', () => {
        expect(Card).toBeDefined();
    });


    it('should render a component with the proper className', () => {
        const { getByTestId } = render(<Card cardId='test'/>);
        const cardComponent = getByTestId('card-component');

        expect(cardComponent).toHaveClass('card-component');
    });
    it('should pass the cardClass prop', () => {
        const { getByTestId } = render(<Card cardClass='chuck-norris' cardId='test'/>);
        const cardComponent = getByTestId('card-component');

        expect(cardComponent).toHaveClass('chuck-norris');
    });
    it('should render the passed children', () => {
        const { getByTestId } = render(
            <Card cardClass='chuck-norris' cardId='test'>
                <p data-testid='test-p'>LoL</p>
            </Card>
        );
        const cardComponent = getByTestId('card-component');
        const testParagraph = getByTestId('test-p');

        expect(testParagraph).toBeInTheDocument();
    })

})
