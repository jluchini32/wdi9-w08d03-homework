import React, { Component } from 'react';
import './App.css';
import GiphyContainer from './GiphyContainer/GiphyContainer';



class App extends Component{
  constructor(){
    super();
    this.state = {
     chosenPage: null
    }
  }

  changePage = (e) => {
    console.log(e.target.id, "this is target for change page");
    this.setState({
      chosenPage: e.target.id
    })
  }

  render(){
    return (
      <div className="App">
        <h4>Giphy Generator</h4>
        <button onClick={this.changePage} id="giphys">Show Searchbar</button>
        {
          this.state.chosenPage === null ?
            null
            :
            this.state.chosenPage === "giphys" ?
              <GiphyContainer></GiphyContainer>
              :
              <App></App>
        }
      </div>
    );
  }
}

export default App;
