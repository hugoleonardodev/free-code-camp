import React, { useContext } from 'react';
import Context from './Context';

const SessionLength = (props) => {
  const {
    clock: { start, breakLength, sessionLength, timer },
  } = useContext(Context);

  return (
    <section>
      <p id="session-label">Session Length</p>
      <p id="session-length">{sessionLength}</p>
      <label htmlFor="session-decrement">
        <input type="button" value="Decrement" id="session-decrement" />
      </label>
      <label htmlFor="session-increment">
        <input type="button" value="Increment" id="session-increment" />
      </label>
    </section>
  );
};

export default SessionLength;
