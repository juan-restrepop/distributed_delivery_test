import React from 'react';
import PropTypes from 'prop-types';


function Card(props) {
    const {cardClass, cardId } = props;
    return (
            <div className={'card-component ' + cardClass} id={cardId} data-testid='card-component'>
                {props.children}
            </div>
    );
}

Card.propTypes = {
    cardClass: PropTypes.string,
    cardId: PropTypes.string.isRequired,
}

export default Card;
