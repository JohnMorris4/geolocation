import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './SeasonDisplay';
 
class App extends Component {
  constructor(props) {
    // Onetime setup
    super(props);

    this.state = { lat: null, errorMessage: '' };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      // ALLWAYS HAVE A CALLBACK TO THE ERR CALLBACK
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    ); 
  }
  componentDidMount = () => {
    console.log('My component was rendered to the screen');
  }

  componentDidUpdate = () => {
    console.log('My component did update and rerendered');
  }
  
  

  render() {
    // return JSX
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading...</div>
    
  }


}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);