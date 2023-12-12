
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props:{children:JSX.Element | null , dropId:number}) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.dropId,
  });
  const style = {
   height: 60,
   width: 60
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
  