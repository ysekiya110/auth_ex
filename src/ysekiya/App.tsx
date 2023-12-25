//import reactLogo from '../assets/react.svg'
//import viteLogo from '/vite.svg'
import { useState } from 'react'
import Img1 from "../../public/img/img_1.jpg"
import Img2 from "../../public/img/img_2.jpg"
import Img3 from "../../public/img/img_3.jpg"
import Img4 from "../../public/img/img_4.jpg"
import Img5 from "../../public/img/img_5.jpg"
import Img6 from "../../public/img/img_6.jpg"
import Img7 from "../../public/img/img_7.jpg"
import Img8 from "../../public/img/img_8.jpg"
import Img9 from "../../public/img/img_9.jpg"
import Img10 from "../../public/img/img_10.jpg"

import Img1_1 from "../../public/img/img_1_1.jpg"
import Img2_1 from "../../public/img/img_2_1.jpg"
import Img3_1 from "../../public/img/img_3_1.jpg"
import Img4_1 from "../../public/img/img_4_1.jpg"

import Img1_2 from "../../public/img/img_1_2.jpg"
import Img2_2 from "../../public/img/img_2_2.jpg"
import Img3_2 from "../../public/img/img_3_2.jpg"
import Img4_2 from "../../public/img/img_4_2.jpg"

import Img1_3 from "../../public/img/img_1_3.jpg"

import { ModalImage } from "./components/ModalImage"
// import { Droppable } from "./components/Droppable"
import './App.css'
import { DndContext, DragOverEvent, DragStartEvent, DragEndEvent } from "@dnd-kit/core"
import { Modal, Stack } from "@fluentui/react"
import { Draggable } from './components/Draggable'
import { useDroppable } from'@dnd-kit/core';
//import Modal from "react-modal"
//import { useLocation} from 'react-router-dom';


function App() {

  // const search = useLocation().search;

  // const query2 = new URLSearchParams(search);

  const searchParams = new URLSearchParams(window.location.search)

  const ImgList = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
  ];

  let selectedList =[""]

  const [username, setName] = useState('');
  const [secret, setSecret] = useState('');

  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [over, setOver] = useState(["0", "0"])
  const [dragVertical, setDragVertical] = useState(false);

  const [select_1, setSelect_1] = useState(["0", "0"]);
  const [select_2, setSelect_2] = useState(["0", "0"]);
  const [select_3, setSelect_3] = useState(["0", "0"]);

  const [selectList, setSelectList] = useState<string[][]>([]);

  // const [fetchButton, set] = useState<JSX.Element | null>(null)

  // const fetchButton= document.getElementById('submit');

  // fetchButton.addEventListener('click', () => {
  //   const phpFileUrl ='http://localhost:5173/src/ohyu/register.php?usernaem=&secret';



  //   fetch(phpFileUrl)
  //     .then(response => {
  //       if (!response.ok){
  //         throw new Error('HTTP error! Status: ${response.status}');
  //       }
  //       return response.text();
  //     })

  //     .then(data => {
  //       console.log(data);
  //     })

  //     .catch(error=> {
  //       console.error('Fetch error:', error);
  //     });
  // });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over) {


      if (selectList.length < 3) {
        const tmp = selectList;
        tmp.push([String(active.id), String(over.id)]);
        setSelectList(tmp);
        // console.log(selectList.length)
        // console.log(tmp[selectList.length-1])
      }
      setModal(false)
    }
    setOver(["0", "0"]);
  }

  function handleDragOver(event: DragOverEvent) {
    const { over } = event;
    if (over) {
      setOver(String(over.id).split("_"));


    }
    //console.log(over)
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    const id = String(active.id).split("_")[1];



    if (id === "2" || id === "4") {
      setDragVertical(true);
    } else {
      setDragVertical(false);
    }
  }

  function modalEvent(Id: number) {
    setModal(true);
    setModalId(Id);
  }

  function DropBack(props: { backId: string, over: string[], select: string[][] }) {//分割画像の場所：画像の配置場所
    const isOver = props.over.includes(props.backId);
    let position = ""
  
    if (props.select.length > 0) {
      // const isSelected = props.select[props.select.length - 1][1].split("_").includes(props.backId)
      const selected = props.select.filter((elem) => elem[1].split("_").includes(props.backId))//3つの画像の配置場所とbackIdが一致しているもの
      const isSelected = selected.length > 0;//上の条件を満たしたら必ず1になる
  
      //objectPositionとobjectFit:"cover"正方形

      // console.log(props.select.map((elem) => elem[1].split("_")).flat())

      selectedList = props.select.map((elem) => elem[1].split("_")).flat()

      // console.log(selectedList)
      
      
  
      if (isSelected) {
        const side = selected[0][1].split("_")//必ず1つの要素しかないから0

        
  
        if (side[0] === props.backId) {//左か上
          if (Number(side[1]) - Number(side[0]) === 1) {//横か縦か
  
            position = "0% 0%"
          } else {
            position = "0% 0%"
  
          }
  
        } else {//右か下
          if (Number(side[1]) - Number(side[0]) === 1) {//横か縦か
            position = " 100% 0%"
          } else {
            position = "0% 100%"
          }
        }
  
        return (
          <img src={`/img/img_${selected[0][0]}.jpg`} style={{ height: 70, width: 70, objectFit: "cover", objectPosition: position }} />
        )
      }
    }
  
    if (isOver) {
      return (
        <div style={{ height: 70, width: 70, background: "#4FD8EA99" }} />
      );
    } else {
      return (
        <div style={{ height: 70, width: 70, background: "#e9e9e9",}}><br/>{props.backId}</div>
      )
    }
  }

  function Droppable(props: { dropId: string , select: string[][]}) {//select現在の画像の配置場所
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


  
    // console.log(selectedList)
    // console.log(props.select)

    // console.log(props.select.filter((elem)=> elem[1].split("_").includes(selectedList)))
    // selectedList.includes(props.select.filter((elem)=> elem[1].split("_")))
    const isSelected = selectedList.includes(dropId_0) || selectedList.includes(dropId_1)

    if (isSelected){
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

  function NextButton(){
    if (selectList.length === 3){
      console.log(selectList)
    }else{
      console.log("No")
    }
  }
  

  return (
    <>
      <h3>
        {(new URL(location.href)).searchParams.get("username")}
      </h3>

      <DndContext onDragEnd={handleDragEnd} onDragOver={handleDragOver} onDragStart={handleDragStart} >
        <Stack horizontal horizontalAlign='center' style={{ position: "relative" }}>
          <Stack verticalAlign='center'>
            <Stack horizontal horizontalAlign='center'>
              <DropBack backId={"1"} over={over} select={selectList} />
              <DropBack backId={"2"} over={over} select={selectList} />
              <DropBack backId={"3"} over={over} select={selectList} />
              <DropBack backId={"4"} over={over} select={selectList} />
            </Stack>
            <Stack horizontal horizontalAlign='center'>
              <DropBack backId={"5"} over={over} select={selectList} />
              <DropBack backId={"6"} over={over} select={selectList} />
              <DropBack backId={"7"} over={over} select={selectList} />
              <DropBack backId={"8"} over={over} select={selectList} />
            </Stack>
            <Stack horizontal horizontalAlign='center'>
              <DropBack backId={"9"} over={over} select={selectList} />
              <DropBack backId={"10"} over={over} select={selectList} />
              <DropBack backId={"11"} over={over} select={selectList} />
              <DropBack backId={"12"} over={over} select={selectList} />
            </Stack>
            <Stack horizontal horizontalAlign='center'>
              <DropBack backId={"13"} over={over} select={selectList} />
              <DropBack backId={"14"} over={over} select={selectList} />
              <DropBack backId={"15"} over={over} select={selectList} />
              <DropBack backId={"16"} over={over} select={selectList} />
            </Stack>

          </Stack>

          {dragVertical ?
            <div style={{ position: 'absolute', top: 35 }}>
              <table id="position" >
                <tbody>
                  <tr>
                    <td id="pos1"> <Droppable dropId={"1_5"} select={selectList}></Droppable> </td>
                    <td id="pos2"> <Droppable dropId={"2_6"} select={selectList}></Droppable> </td>
                    <td id="pos3"> <Droppable dropId={"3_7"} select={selectList}></Droppable> </td>
                    <td id="pos3"> <Droppable dropId={"4_8"} select={selectList}></Droppable> </td>
                  </tr>
                  <tr>
                    <td id="pos5"> <Droppable dropId={"5_9"} select={selectList}></Droppable> </td>
                    <td id="pos6"> <Droppable dropId={"6_10"} select={selectList}></Droppable> </td>
                    <td id="pos7"> <Droppable dropId={"7_11"} select={selectList}></Droppable> </td>
                    <td id="pos7"> <Droppable dropId={"8_12"} select={selectList}></Droppable> </td>
                  </tr>
                  <tr>
                    <td id="pos9"> <Droppable dropId={"9_13"} select={selectList}></Droppable> </td>
                    <td id="pos10"> <Droppable dropId={"10_14"} select={selectList}></Droppable> </td>
                    <td id="pos11"> <Droppable dropId={"11_15"} select={selectList}></Droppable> </td>
                    <td id="pos11"> <Droppable dropId={"12_16"} select={selectList}></Droppable> </td>
                  </tr>
                </tbody>
              </table>
            </div>
            :
            <div style={{ position: 'absolute' }}>
              <table id="position" >
                <tbody>
                  <tr>
                    <td id="pos1"> <Droppable dropId={"1_2"} select={selectList}></Droppable> </td>
                    <td id="pos2"> <Droppable dropId={"2_3"} select={selectList}></Droppable> </td>
                    <td id="pos3"> <Droppable dropId={"3_4"} select={selectList}></Droppable> </td>
                  </tr>
                  <tr>
                    <td id="pos5"> <Droppable dropId={"5_6"} select={selectList}></Droppable> </td>
                    <td id="pos6"> <Droppable dropId={"6_7"} select={selectList}></Droppable> </td>
                    <td id="pos7"> <Droppable dropId={"7_8"} select={selectList}></Droppable> </td>
                  </tr>
                  <tr>
                    <td id="pos9"> <Droppable dropId={"9_10"} select={selectList}></Droppable> </td>
                    <td id="pos10"> <Droppable dropId={"10_11"} select={selectList}></Droppable> </td>
                    <td id="pos11"> <Droppable dropId={"11_12"} select={selectList}></Droppable> </td>
                  </tr>
                  <tr>
                    <td id="pos13"> <Droppable dropId={"13_14"} select={selectList}></Droppable> </td>
                    <td id="pos14"> <Droppable dropId={"14_15"} select={selectList}></Droppable> </td>
                    <td id="pos15"> <Droppable dropId={"15_16"} select={selectList}></Droppable> </td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        </Stack>

        {!modal ?
          <table id="images">
            <tr>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_1.jpg"} dragId={1} /> </td>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_2.jpg"} dragId={2} /> </td>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_3.jpg"} dragId={3} /> </td>
            </tr>
            <tr>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_4.jpg"} dragId={4} /> </td>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_5.jpg"} dragId={5} /> </td>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_6.jpg"} dragId={6} /> </td>
            </tr>
            <tr>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_7.jpg"} dragId={7} /> </td>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_8.jpg"} dragId={8} /> </td>
              <td> <ModalImage onClick={modalEvent} Img={"/img/img_9.jpg"} dragId={9} /> </td>
            </tr>

            <tr>
              <td>
                <button onClick={() =>
                  location.reload()
                }>
                  Reset
                </button>
              </td>

              <td> <ModalImage onClick={modalEvent} Img={"/img/img_10.jpg"} dragId={10} /> </td>

              <td>
                <button onClick={NextButton
                  // console.log(selectList)//秘密情報
                  // fetch('https://localhost:5173/src/ohyu/register.php?username=${username}&secret=${secret}')
                }>Next
                </button>
              </td>
            </tr>

          </table>
          :
          // <h2>aaa</h2>
          <div className="scrollable-container">
            <table id="selectedImage">
              <tr>

                <td>
                  <button onClick={() =>
                    location.reload()
                  }>
                    Reset
                  </button>
                </td>

                <td> <Draggable dragId={`${modalId}_1`} Width={140} Height={70} /> </td>

                <td>
                  <button onClick={() =>
                    setModal(false)
                  }>
                    Back
                  </button>
                </td>
              </tr>

              <tr>
                <td> <Draggable dragId={`${modalId}_4`} Width={70} Height={140} /> </td>
                <td> <img src={`/img/img_${modalId}.jpg`} style={{ background: "#e9e9e9", margin: 20, width: 140, height: 140, }} /> </td>
                <td> <Draggable dragId={`${modalId}_2`} Width={70} Height={140} /> </td>
              </tr>

              <tr>
                <td> </td>
                <td> <Draggable dragId={`${modalId}_3`} Width={140} Height={70} /> </td>
                <td> </td>
              </tr>
            </table>
          </div>
        }

      </DndContext>
    </>
  )
}



export default App

