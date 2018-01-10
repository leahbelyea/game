import React from 'react';
import PropTypes from 'prop-types';
import { Ball } from '../Ball/';
import classnames from 'classnames';
import _ from 'lodash';

export class Room extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      balls: this.props.balls
    };
  }

  collect = (id) => {
    const balls = _.clone(this.state.balls);
    _.pullAt(balls, id);
    this.setState({balls});
    this.props.collect();
  }

  render () {
    const ballNodes = _.map(this.state.balls, (style, index) => {
      return <Ball id={index} key={index} style={style} collect={this.collect}/>;
    });

    const furnitureNodes = _.map(this.props.furniture, ({type, style}, key) => {
      return React.createElement(type, {style, key});
    });

    const roomClasses = classnames(this.props.type, 'room');

    return (
      <div className={roomClasses}>
        {ballNodes}
        {furnitureNodes}
        <div className="floor" />
      </div>
    );
  }
}

Room.propTypes = {
  type: PropTypes.string,
  balls: PropTypes.array,
  furniture: PropTypes.array,
  collect: PropTypes.func
};

Room.defaultProps = {
  type: '',
  balls: [],
  furniture: [],
  collect: _.noop
};
