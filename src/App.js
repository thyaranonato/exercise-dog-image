import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dados: '',
    };
    this.fetchDogImage = this.fetchDogImage.bind(this);
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => this.setState({ dados: result }));
  }

  render() {
    const { dados } = this.state;
    if (dados === '') return 'Loading...';
    return (
      <div className="App">
        <p>Dogs Image</p>
        <button type="button" onClick={ this.fetchDogImage }>New Dog!</button>
        <div>
          <img src={ dados.message } alt="Dog Aleatório" />
        </div>
      </div>
    );
  }
}

export default App;
