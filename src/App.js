import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 16;

const Box = ({color}) => {
  const style = {
    backgroundColor: color,
    padding: '5px',
    width: '10vw',
    height: '10vw',
    margin: '5px'
  }

  return <div style={style} />;
}

class App extends Component {
  
  render() {
    const boxes = this.shuffleBoxes().map((color, i) => (
      <Box key={i} color={color} />
    ));
    
    return (
      <div>
        <div>
          <p>Render 16 tiles, 8x2 pairs</p>
          <p>Tile state: showTile</p>
          <p>Tile props: color</p>
          <p>App funcs: flip, isMatched, shuffleColors</p>
        </div>
        <div className='gameboard'>
          {boxes}
        </div>
      </div>
    );
  }

  shuffleBoxes(){
    // To shuffle an array a of n elements (indices 0..n-1):
    // for i from n - 1 downto 1 do
    //      j = random integer with 0 <= j <= i
    //      exchange a[j] and a[i]
    let boxes = this.props.colors;
    console.log('hello')
    for(let i=boxes.length-1; i>=1; i--){
      console.log('hi')
      let j = Math.floor(Math.random() * NUM_BOXES);
      let box = boxes[j];
      let holdBox = boxes[i];
      boxes[i] = box;
      boxes[j] = holdBox;
    }

    return boxes;
  }

}

App.defaultProps  = {
  colors: ['#00b894', '#00cec9', '#0984e3', '#6c5ce7', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8', '#00b894', '#00cec9', '#0984e3', '#6c5ce7', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8']
}


export default App;
