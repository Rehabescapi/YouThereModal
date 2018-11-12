import React from 'react';
import { DragSource } from 'react-dnd';
import { PropTypes } from 'prop-types';
import { ITEM } from './itemTypes';
import WaterCan  from './assets/WateringCan.png'
import Shovel from './assets/Shovel.png'

const Source = ({ color, connectDragSource, isDragging  }) => (
  connectDragSource(
    <div
     className="board__sources__source"
     style={{ 
       backgroundColor: color,
       opacity: isDragging ? 0.25 : 1,
      }}
    >
    {color ==='blue' ? <img src={WaterCan}/> :<img src={Shovel}/>}
   
    </div>
  )
);

Source.propTypes = {
  color: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

const source = {
  beginDrag(props) {
    const { color } = props;
    return ({
      color
      
    });
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }
    const { onDrop } = props;
    const { color } = monitor.getItem();
    const { shape, onClick ,icon } = monitor.getDropResult();

   
    onDrop(color, shape, onClick, icon);
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default DragSource(ITEM, source, collect)(Source);