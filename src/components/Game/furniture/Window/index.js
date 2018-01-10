import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export class Window extends React.Component {
  render () {
    return (
      <div className="window" style={this.props.style} />
    );
  }
}

Window.propTypes = {
  style: PropTypes.object
};

Window.defaultProps = {
  style: {display: 'none'}
};
