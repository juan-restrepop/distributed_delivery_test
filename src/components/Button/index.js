import React from 'react';
import  PropTypes from 'prop-types';

const BUTTON_ID = 'button-component';

function _generateButtonClassName(type) {
    if (type === 'success') {
        return `${BUTTON_ID} ${BUTTON_ID}--success`;
    } else if ( type === 'danger') {
        return `${BUTTON_ID} ${BUTTON_ID}--danger`;
    } else if ( type === 'danger') {
            return `${BUTTON_ID} ${BUTTON_ID}--action`;
    } else {
            return `${BUTTON_ID} ${BUTTON_ID}--action`;
    }
}

function Button(props) {
    const {
        title, type,
        onClick
    } = props;

    return (
        <button className={_generateButtonClassName(type)} data-testid={BUTTON_ID}
            onClick={onClick}
        >
            { title }
        </button>
    );
}

Button.propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf(['success', 'danger', 'action']),
    onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
    type: 'success',
}

export default Button;
