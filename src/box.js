import React from 'react';
import './box.css'
class Box extends React.Component {

    static defaultProps = {
        isFlipped: true
    }

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        console.log('The box was clicked.');
        console.log(this.props.color, this.props.id);
        console.log(e);
    }

    render(){
        return (
            <div className='box'
                style={{ backgroundColor: this.props.isFlipped ? this.props.color : '#636e72'}}
                onClick={this.handleClick}
            >{this.props.id}</div>
        )
    }
}

export default Box;