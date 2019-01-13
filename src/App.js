import React, { Component } from 'react';
import Box from './box';
import './App.css';

const NUM_BOXES = 16;
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2   
};
let cards = [
  {id:0, cardState: CardState.HIDING, backgroundColor: '#00b894'},
  {id:1, cardState: CardState.HIDING, backgroundColor: '#00b894'},
  {id:2, cardState: CardState.HIDING, backgroundColor: '#00cec9'},
  {id:3, cardState: CardState.HIDING, backgroundColor: '#00cec9'},
  {id:4, cardState: CardState.HIDING, backgroundColor: '#0984e3'},
  {id:5, cardState: CardState.HIDING, backgroundColor: '#0984e3'},
  {id:6, cardState: CardState.HIDING, backgroundColor: '#6c5ce7'},
  {id:7, cardState: CardState.HIDING, backgroundColor: '#6c5ce7'},
  {id:8, cardState: CardState.HIDING, backgroundColor: '#ffeaa7'},
  {id:9, cardState: CardState.HIDING, backgroundColor: '#ffeaa7'},
  {id:10, cardState: CardState.HIDING, backgroundColor: '#fab1a0'},
  {id:11, cardState: CardState.HIDING, backgroundColor: '#fab1a0'},
  {id:12, cardState: CardState.HIDING, backgroundColor: '#ff7675'},
  {id:13, cardState: CardState.HIDING, backgroundColor: '#ff7675'},
  {id:14, cardState: CardState.HIDING, backgroundColor: '#fd79a8'},
  {id:15, cardState: CardState.HIDING, backgroundColor: '#fd79a8'}
]

class App extends Component {

  render() {
    const cards = this.shuffleBoxes().map((box, i) => (
      <Box key={i} id={box.id} cardState={box.cardState} color={box.backgroundColor} />
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
          {cards}
        </div>
      </div>
    );
  }

  shuffleBoxes(){
    // To shuffle an array a of n elements (indices 0..n-1):
    // for i from n - 1 downto 1 do
    //      j = random integer with 0 <= j <= i
    //      exchange a[j] and a[i]
    console.log('hello')
    for(let i=cards.length-1; i>=1; i--){
      console.log('hi')
      let j = Math.floor(Math.random() * NUM_BOXES);
      let box = cards[j];
      let holdBox = cards[i];
      cards[i] = box;
      cards[j] = holdBox;
    }

    return cards;
  }

}

App.defaultProps  = {
  colors: ['#00b894', '#00cec9', '#0984e3', '#6c5ce7', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8', '#00b894', '#00cec9', '#0984e3', '#6c5ce7', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8']
}


export default App;
