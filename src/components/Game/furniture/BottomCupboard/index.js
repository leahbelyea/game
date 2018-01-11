import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

export class BottomCupboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      left: false,
      right: false
    };
  }

  toggleLeft = () => {
    this.setState({left: !this.state.left});
  }

  toggleRight = () => {
    this.setState({right: !this.state.right});
  }

  render () {
    const leftClasses = classnames(
      'door left',
      { open: this.state.left }
    );
    const rightClasses = classnames(
      'door right',
      { open: this.state.right }
    );
    const leftInside = this.state.left ? (
      <div className="inside left" onClick={this.toggleLeft}/>
    ) : null;
    const rightInside = this.state.right ? (
      <div className="inside right" onClick={this.toggleRight}/>
    ) : null;

    return (
      <div className="bottom-cupboard" style={this.props.style}>
        <div className={leftClasses} onClick={this.toggleLeft}/>
        <div className={rightClasses} onClick={this.toggleRight}/>
        {leftInside}
        {rightInside}
      </div>
    );
  }
}

BottomCupboard.propTypes = {
  style: PropTypes.object
};

BottomCupboard.defaultProps = {
  style: {display: 'none'}
};
