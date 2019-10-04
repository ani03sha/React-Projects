import React from 'react';
import './App.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div>
    	<Countdown timeTillDate="10 04 2019, 6:00 pm" timeFormat="MM DD YYYY, h:mm a" />
    </div>
  );
}

export default App;