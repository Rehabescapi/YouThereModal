import React from 'react';
import { DropTarget } from 'react-dnd';
import { PropTypes } from 'prop-types';
import { ITEM } from './itemTypes';

const Target = ({ connectDropTarget, highlighted, shape }) => (
  
  connectDropTarget(
    <div
      className={`board__targets__target board__targets__target--${shape}`}
      style={{ backgroundColor: highlighted ? 'black' : 'white' }}
    />
  )
);

Target.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  shape: PropTypes.string.isRequired,
}

const target = {
  drop(props) {
    console.log(props)
    const { shape, onClick } = props;
    //Can Propagate functions north.
    //onClick();
    return ({
      shape,onClick
    });
  }
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
});

export default DropTarget(ITEM, target, collect)(Target);
