
import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export function ModalImage(props:{dragId:number,Img:string, onClick: (id: number) => void}) {
  return (
    <div onClick={()=>props.onClick(props.dragId)}>
      <img id="dragImg" src={props.Img} alt="img_1.jpg"/>
    </div>
  );
}