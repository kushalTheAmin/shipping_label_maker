import React from 'react';

const hidden = {
    display: 'none'
}
const Navigation = props => (
    <div className='navigation-container'>

        <button style={props.showPrev ? {} : hidden}
            className="btn--prev"
            onClick={props.prev}>Previous</button>

        <button style={props.showNext ? {} : hidden}
            className="btn--next"
            onClick={props.next}>Next</button>

    </div>
);

export default Navigation;