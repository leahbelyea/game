import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

export class Utensils extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      spoonSwinging: false
    };
  }

  swingSpoon = () => {
    this.setState({spoonSwinging: true}, () => {
      setTimeout(() => {
        this.setState({spoonSwinging: false});
      }, 2000);
    });
  }

  render () {
    const spoonClasses = classnames(
      'spoon',
      { swinging: this.state.spoonSwinging }
    );

    return (
      <div className="utensils" style={this.props.style}>
        <div className="utensil-rack" />
        <div className={spoonClasses} onClick={this.swingSpoon}/>
      </div>
    );
  }
}

Utensils.propTypes = {
  style: PropTypes.object
};

Utensils.defaultProps = {
  style: {display: 'none'}
};
