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
        const {boxState, color, id, onClick} = this.props;
        return (
            <div className='box'
                style={{ backgroundColor: boxState !== 0 ? color : '#636e72'}}
                onClick={()=>onClick(id)}
            >
            </div>
        )
    }
}

export default Box;