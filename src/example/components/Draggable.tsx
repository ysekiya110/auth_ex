
import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export function Draggable(props:{dragId:number,Img:string}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.dragId,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };
  // style={ background: "#e9e9e9", margin: 20, width: 300 }
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <img id="dragImg" src={props.Img} alt="img_1.jpg"/>
    </div>
  );
}
