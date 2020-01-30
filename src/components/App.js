import React, { Component } from 'react';
import './App.css';
import Word from './Word';

class App extends Component {
  state = { 
    words: [],
    // isLoad: false,
  }

  componentDidMount() {
    // setTimeout(this.fetchData, 3000)
    fetch('data/words.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          words: data.words,
          isLoad: true,
        })
      })
  }

  // fetchData = () => {
  //   fetch('data.words.json')...
  // }
  

  render() { 
    const words = this.state.words.map(word => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ))
    return ( 
      <ul>
        {/* {this.state.isLoad ? words : "Wczytuję dane..."} */}
        {words}
      </ul>
     );
  }
}
 
export default App;