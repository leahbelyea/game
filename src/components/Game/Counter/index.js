import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const ball = require('../Ball/ball.png');

export class Counter extends React.Component {
  render () {
    return (
      <div className="counter">
        <span className="count">{this.props.count}</span>
        <img src={ball} />
      </div>
    );
  }
};

Counter.propTypes = {
  count: PropTypes.number
};

Counter.defaultProps = {
  count: 0
};
