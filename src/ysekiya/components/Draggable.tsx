
import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import { useState } from 'react'


export function Draggable(props:{dragId:string, Width: number, Height: number}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.dragId,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  // const [odd, setOdd] = useState(false);


  // if(props.dragId ===101 || props.dragId === 103){
  //   setOdd(true);
  // }

  return (

    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
         <img 
         style={{background: "#e9e9e9", width:props.Width, height:props.Height,}} 
         id="dragImg" 
         src={`/~ysekiya/auth_ex1/img/img_${props.dragId}.jpg`} 
         alt="img_1.jpg" />
       </div>
   
     
    //   <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
    //     <img 
    //     style={{background: "#e9e9e9", margin: 20, width:140, height: 70,}} 
    //     id="dragImg" 
    //     src={props.Img} 
    //     alt="img_1.jpg" />
    //   </div>
    
      
    //   <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
    //     <img 
    //     style={{background: "#e9e9e9", margin: 20, width:70, height: 140,}} 
    //     id="dragImg" 
    //     src={props.Img} 
    //     alt="img_1.jpg" />
    //   </div>

    
    


  );

  
}
