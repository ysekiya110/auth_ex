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
import {Draggable} from "./components/Draggable"
import {Droppable} from "./components/Droppable"
import './App.css'
import { DndContext } from "@dnd-kit/core"

function App() {

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
  ];

  const droppableList = [
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
    useState<JSX.Element | null>(null),
  ];


  function handleDragEnd({ active, over }) {
    console.log(active);
    if (active && over) {
      //dragableList[active.id - 1][1](true);
      droppableList[over.id - 1][1](<img src={ImgList[active.id-1]} style={{ background: "#e9e9e9", width: 60, height: 60 }} />);
    }
  }

  

  return (
    <>
      <DndContext onDragEnd={handleDragEnd} >
       
        <table id="position">
          <tbody>
            <tr>
              <td>
               <Droppable dropId={1}>{droppableList[0][0]}</Droppable>
        
              </td>
                
              <td>
               <Droppable dropId={2}>{droppableList[1][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={3}>{droppableList[2][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={4}>{droppableList[3][0]}</Droppable>
              </td>
            </tr>

            <tr>
              <td>
                <Droppable dropId={5}>{droppableList[4][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={6}>{droppableList[5][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={7}>{droppableList[6][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={8}>{droppableList[7][0]}</Droppable>
              </td>
            </tr>
            
            <tr>
              <td>
                <Droppable dropId={9}>{droppableList[8][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={10}>{droppableList[9][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={11}>{droppableList[10][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={12}>{droppableList[11][0]}</Droppable>
              </td>
            </tr>
            
            <tr>
              <td>
                <Droppable dropId={13}>{droppableList[12][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={14}>{droppableList[13][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={15}>{droppableList[14][0]}</Droppable>
              </td>

              <td>
                <Droppable dropId={16}>{droppableList[15][0]}</Droppable>
              </td>
            </tr>
          </tbody>
          
        </table>
      
      
        <table id="images">
              
              <tr>
                
                <td>
                  <Draggable Img={Img1} dragId={1}/>
                </td>
                  
                <td>
                  <Draggable Img={Img2} dragId={2}/>
                </td>
                
                <td>
                  <Draggable Img={Img3} dragId={3}/>
                </td>
                

              </tr>

              <tr>
                <td>
                  <Draggable Img={Img4} dragId={4}/>

                </td>
                

                <td>
                  <Draggable Img={Img5} dragId={5}/>

                </td>

                <td>
                  <Draggable Img={Img6} dragId={6}/>

                </td>
              </tr>

              <tr>
                <td>
                  <Draggable Img={Img7} dragId={7}/>

                </td>

                <td>
                  <Draggable Img={Img8} dragId={8}/>

                </td>

                <td>
                  <Draggable Img={Img9} dragId={9}/>
                  
                </td>

              </tr>

              {/* <tr>
                <td>
                  
                </td>

                <td>
                  <Draggable Img={Img10} dragId={10}/>


                </td>

                <td>
                  
                </td>

              </tr> */}

        </table>

      </DndContext>
    </>
  )
}

export default App

