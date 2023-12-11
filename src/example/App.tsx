//import { useState } from 'react'
//import reactLogo from '../assets/react.svg'
//import viteLogo from '/vite.svg'
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
//import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import {Draggable} from "./components/Draggable"
import './App.css'
import { DndContext } from "@dnd-kit/core"
//import sqlite3 from 'sqlite3'

//const db = new sqlite3.Database('/public/user_inf.sqlite3');


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <DndContext onDragEnd={null} >
        <table id="position">
          <tbody>
            <tr>
              <td>
               1
              </td>
                
              <td>
               2
              </td>

              <td>
                3
              </td>

              <td>
                4
              </td>
            </tr>

            <tr>
              <td>
                5
              </td>

              <td>
                6
              </td>

              <td>
                7
              </td>

              <td>
                8
              </td>
            </tr>
            
            <tr>
              <td>
                9
              </td>

              <td>
                10
              </td>

              <td>
                11
              </td>

              <td>
                12
              </td>
            </tr>
            
            <tr>
              <td>
                13
              </td>

              <td>
                14
              </td>

              <td>
                15
              </td>

              <td>
                16
              </td>
            </tr>
          </tbody>
          
        </table>
      
      
            <table>
              
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

              <tr>
                <td>
                  
                </td>

                <td>
                  <Draggable Img={Img10} dragId={10}/>


                </td>

                <td>
                  
                </td>

              </tr>

            </table>
            </DndContext>
    </>
  )
}

export default App

