import React, { Component } from 'react';
import Box from './box';
import './App.css';

const NUM_BOXES = 16;
const BoxState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2   
};

class App extends Component {
  constructor(props){
    super(props);
    let boxes = [
      {id:0, boxState: BoxState.HIDING, backgroundColor: '#00b894'},
      {id:1, boxState: BoxState.HIDING, backgroundColor: '#00b894'},
      {id:2, boxState: BoxState.HIDING, backgroundColor: '#00cec9'},
      {id:3, boxState: BoxState.HIDING, backgroundColor: '#00cec9'},
      {id:4, boxState: BoxState.HIDING, backgroundColor: '#0984e3'},
      {id:5, boxState: BoxState.HIDING, backgroundColor: '#0984e3'},
      {id:6, boxState: BoxState.HIDING, backgroundColor: '#6c5ce7'},
      {id:7, boxState: BoxState.HIDING, backgroundColor: '#6c5ce7'},
      {id:8, boxState: BoxState.HIDING, backgroundColor: '#ffeaa7'},
      {id:9, boxState: BoxState.HIDING, backgroundColor: '#ffeaa7'},
      {id:10, boxState: BoxState.HIDING, backgroundColor: '#fab1a0'},
      {id:11, boxState: BoxState.HIDING, backgroundColor: '#fab1a0'},
      {id:12, boxState: BoxState.HIDING, backgroundColor: '#ff7675'},
      {id:13, boxState: BoxState.HIDING, backgroundColor: '#ff7675'},
      {id:14, boxState: BoxState.HIDING, backgroundColor: '#fd79a8'},
      {id:15, boxState: BoxState.HIDING, backgroundColor: '#fd79a8'}
    ]
    this.state = {boxes: shuffleBoxes(boxes)}
    this.onClick = this.onClick.bind(this);
  }

  onClick(id){
    let boxes = this.state.boxes;
    boxes.forEach(box => {
      box.boxState = box.id === id ? BoxState.SHOWING : box.boxState;
    })

    let flippedBoxes = [];

    boxes.forEach(box => {
      if(box.boxState === BoxState.SHOWING){
        flippedBoxes.push(box);
      }
    })

    if(flippedBoxes.length > 1){
      if(flippedBoxes[0].backgroundColor === flippedBoxes[1].backgroundColor){
        boxes.forEach(box => {
          box.boxState = box.id === flippedBoxes[0].id ? BoxState.MATCHING : box.boxState;
          box.boxState = box.id === flippedBoxes[1].id ? BoxState.MATCHING : box.boxState;
        })
      }
      else {
        boxes.forEach(box => {
          box.boxState = box.id === flippedBoxes[0].id ? BoxState.HIDING : box.boxState;
          box.boxState = box.id === flippedBoxes[1].id ? BoxState.HIDING : box.boxState;
        })
      }
    }

    this.setState({boxes});
  }

  render() {
    const boxes = this.state.boxes.map((box, i) => (
      <Box key={i} id={box.id} boxState={box.boxState} color={box.backgroundColor} onClick={this.onClick}/>
    ));
    
    return (
      <div>
        <div className='gameboard'>
          {boxes}
        </div>
      </div>
    );
  }

}

function shuffleBoxes(boxes){
  // To shuffle an array a of n elements (indices 0..n-1):
  // for i from n - 1 downto 1 do
  //      j = random integer with 0 <= j <= i
  //      exchange a[j] and a[i]
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


export default App;
