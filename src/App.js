import React from 'react';
import './App.css';
import Countdown from 'react-countdown-now';
import moment from 'moment'

const customCountdown = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
  return (
    <div className="countdown">
      <span className="number">{days}</span> <small>días</small>&nbsp;
      <span className="number">{hours}</span> <small>horas</small>&nbsp;
      <span className="number">{minutes}</span> <small>minutos</small>&nbsp;
      <span className="number">{seconds}</span> <small>segundos</small>&nbsp;
    </div>)
}

function App() {
  console.log(new Date(2019, 10, 31))
  console.log(moment('20191031').local())
  return (
    <div className="App">
      <h1>Xantolo</h1>
      <p>vivos y muertos estaremos de fiesta en...</p>
      <Countdown date={moment('20191031').local()} renderer={customCountdown}>
        <div>Xantolo ha comenzado!</div>
      </Countdown>
      <footer>
        <p>Queremos dar a conocer más información y los eventos que se llevarán acabo en Xantolo en la región Huasteca.</p>
        creado con amor por <a rel="noopener noreferrer" href="https://www.facebook.com/KualliSoft" target="_blank">KualliSoft</a>
      </footer>
    </div>
  );
}

export default App;
