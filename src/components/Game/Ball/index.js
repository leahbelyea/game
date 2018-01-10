import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './styles.scss';

export class Ball extends React.Component {
  collect = () => {
    this.props.collect(this.props.id);
  }

  render () {
    return <div className="ball" style={this.props.style} onClick={this.collect}/>;
  }
};

Ball.propTypes = {
  id: PropTypes.number,
  style: PropTypes.object,
  collect: PropTypes.func
};

Ball.defaultProps = {
  style: {display: 'none'},
  collect: _.noop
};
