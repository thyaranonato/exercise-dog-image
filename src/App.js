import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
    this.fetchDogImage = this.fetchDogImage.bind(this);
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem('urlOfDogImage', this.state.data.message);
    const racaDog = this.state.data.message.split('/')[4];
    alert(racaDog);
  }

  fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => this.setState({ data: result }));
  }

  render() {
    const { data } = this.state;
    if (data === '') return 'Loading...';
    return (
      <div className="App">
        <p>Dogs Image</p>
        <button type="button" onClick={ this.fetchDogImage }>New Dog!</button>
        <div>
          <img src={ data.message } alt="Dog Aleatório" />
        </div>
      </div>
    );
  }
}

export default App;
