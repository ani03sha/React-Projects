import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {

  getWeather = async (e) => {

    e.preventDefault();

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=API_KEY');

    const response = await api_call.json();

    console.log(response);
  }


  render() {
    return(
        <div>
          <Title />
          <Form loadWeather={this.getWeather}/>
          <Weather />
        </div>
      )
  }
}

export default App;