import React from 'react';
import './box.css'
import { PropTypes } from 'prop-types';

class Box extends React.Component {

    static defaultProps = {
        isFlipped: true
    }

    render(){
        const {showing, color, id, onClick} = this.props;
        let style = {}
        style.backgroundColor = showing ? color : '#636e72'

        return (
            <div className='box'
                style={style}
                onClick={()=>onClick(id)}
            >
            </div>
        )
    }

}

Box.propTypes = {
    showing: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired
}

export default Box;