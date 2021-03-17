import React, { useContext } from 'react';
import Context from './Context';

const Timer = (props) => {
  const {
    clock: {
      start,
      breakLength,
      sessionLength,
      timer: { min, sec },
    },
  } = useContext(Context);
  return (
    <section id="timer-label">
      <h2 id="time-left">
        {min.split('.')}:{sec.split('.')}
      </h2>
      <h3>Session</h3>
      <label htmlFor="start_stop">
        <input type="button" value="Start/Stop" id="start_stop" />
      </label>
      <label htmlFor="reset">
        <input type="button" value="Reset" id="reset" />
      </label>
    </section>
  );
};

export default Timer;
