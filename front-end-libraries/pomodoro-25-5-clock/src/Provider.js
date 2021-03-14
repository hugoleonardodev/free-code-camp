import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClockContext from './Context';

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: {
        start: false,
        breakLength: '5',
        sessionLength: '25',
        timer: { min: '2.5', sec: '0.0' },
      },
    };
  }

  render() {
    const context = {
      ...this.state,
    };

    const { children } = this.props;

    return (
      <ClockContext.Provider value={context}>{children}</ClockContext.Provider>
    );
  }
}

Provider.proppTypes = { children: PropTypes.node.isRequired };

export default Provider;
