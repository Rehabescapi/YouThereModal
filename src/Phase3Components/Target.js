import React from 'react';
import { DropTarget } from 'react-dnd';
import { PropTypes } from 'prop-types';
import { ITEM } from './itemTypes';

import Angry from './assets/FloweyDeathNeutral.png'
import Hurt from './assets/FloweyHurt.png'
import Dead from './assets/FloweyDead.png'

const Target = ({ connectDropTarget, highlighted, shape ,icon}) => (
  
  connectDropTarget(
    <div
      className={`board__targets__target board__targets__target--${shape}`}
      style={{ backgroundColor: highlighted ? (icon === Angry? 'red': 'blue') : 'white' }}
    >
   
    <img alt="WaterCan" src={icon}/>

    </div>
  )
);

Target.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  shape: PropTypes.string.isRequired,
}

const target = {
  canDrop(props, monitor){

    let source = monitor.getItem();
    
    if( (source.color === "red" && (props.icon ===Angry || props.icon===Dead)) || (source.color==="blue" && props.icon ===Hurt)){
     return true;
    }
    return false;
  },
  drop(props) {
   
    const { shape, onClick, icon } = props;
    //Can Propagate functions north.
    //onClick();
    return ({
      shape, onClick, icon
    });
  }
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
});

export default DropTarget(ITEM, target, collect)(Target);
