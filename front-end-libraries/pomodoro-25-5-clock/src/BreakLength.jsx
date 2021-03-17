import React, { useContext } from 'react';
import Context from './Context';

const BreakLength = (props) => {
  const {
    clock: { start, breakLength, sessionLength, timer },
  } = useContext(Context);
  return (
    <section>
      <p id="break-label">Break Length</p>
      <p id="break-length">{breakLength}</p>
      <label htmlFor="break-decrement">
        <input type="button" value="Decrement" id="break-decrement" />
      </label>
      <label htmlFor="break-increment">
        <input type="button" value="Increment" id="break-increment" />
      </label>
    </section>
  );
};

export default BreakLength;
