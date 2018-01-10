import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export class Range extends React.Component {
  render () {
    return (
      <div className="range" style={this.props.style}/>
    );
  }
}

Range.propTypes = {
  style: PropTypes.object
};

Range.defaultProps = {
  style: {display: 'none'}
};
