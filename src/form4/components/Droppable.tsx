
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props:{dropId:number,children:JSX.Element}) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.dropId,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
  