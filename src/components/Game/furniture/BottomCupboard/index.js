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
      'cupboard-door-left',
      { open: this.state.left }
    );
    const rightClasses = classnames(
      'cupboard-door-right',
      { open: this.state.right }
    );
    const leftInside = this.state.left ? (
      <div className="cupboard-door-left-inside" onClick={this.toggleLeft}/>
    ) : null;
    const rightInside = this.state.right ? (
      <div className="cupboard-door-right-inside" onClick={this.toggleRight}/>
    ) : null;

    return (
      <div className="bottom-cupboard" style={this.props.style}>
        <div className="cupboard" />

        // Doors
        <div className={leftClasses} onClick={this.toggleLeft}/>
        <div className={rightClasses} onClick={this.toggleRight}/>

        // Blank spaces behind open doors. Clicking on this also closes the door
        {leftInside}
        {rightInside}

        <div className="cupboard-feet" />
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
