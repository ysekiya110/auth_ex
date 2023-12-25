
import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props: { dropId: string, selected: string[] }) {//select現在の画像の配置場所
  const { isOver, over, setNodeRef } = useDroppable({
    id: props.dropId,
  });

  const style = {
    height: 70,
    width: 70,
    background: "#00000000",
  };

  // const selected = props.select.filter((elem) => elem[1].split("_").includes(props.dropId.split("_")))
  const dropId_0 = props.dropId.split("_")[0]
  const dropId_1 = props.dropId.split("_")[1]

  console.log(props.selected)

  if (props.selected.includes(dropId_0) || props.selected.includes(dropId_1)){
    return (
      <div></div>
    )
  }else{
    return (
      <div ref={setNodeRef} style={style}></div>
    )
  }


  // if(props.select.length ===0){
  //   return (
  //     <div ref={setNodeRef} style={style}></div>
  //   )
  // }

  // const selectId_0 = props.select[props.select.length-1][1].split("_")
  // const selectId_0 = props.select.filter((elem) => elem[1].split("_"))

  // console.log(props.select[props.select.length-1][1])

 
  

  // if (selectedList.includes(dropId_0) && selectedList.includes(dropId_1)){
    

  //   return (
  //     <div ref={setNodeRef} style={style}></div>
  //   )
  // }else{
    
  //   return (
  //     <div></div>
  //   )
  // }



  // if (Number(dropId_0) !== Number(selectId_0[0]) && Number(dropId_0) !== Number(selectId_0[1]) && Number(dropId_1) !== Number(selectId_0[0]) && Number(dropId_1) !== Number(selectId_0[1]) ){
    
  //   // console.log(selectId_0[0])
  //   // console.log(selectId_0[1])
    
   

  //   return (
  //     <div ref={setNodeRef} style={style}></div>
  //   )
  // }else{
    
  //   return (
  //     <div></div>
  //   )
  // }
}
