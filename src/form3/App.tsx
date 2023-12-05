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
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import './App.css'
//import sqlite3 from 'sqlite3'

//const db = new sqlite3.Database('/public/user_inf.sqlite3');


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <DragDropContext>
        <Droppable droppableID="position">
          {(provided) => (
            <table 
              className="origin" 
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              
              <tr>
                <Draggable draggableID="pos1" index={0}>
                  {(provided)} => (
                    <td 
                      className="pos1"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <img src={Img1} id="img" alt="img_1.jpg"/>
                    </td>
                  )}
                </Draggable>

                <td>
                  <img src={Img2} id ="img" alt="img_2.jpg"/>
                </td>
                
                <td>
                  <img src={Img3} id="img" alt="img_3.jpg"/>
                </td>
                

              </tr>

              <tr>
                <td>
                  <img src={Img4} id="img" alt="img_4.jpg"/>

                </td>
                

                <td>
                  <img src={Img5} id="img" alt="img_5.jpg"/>

                </td>

                <td>
                  <img src={Img6} id="img" alt="img_6.jpg"/>

                </td>
              </tr>

              <tr>
                <td>
                  <img src={Img7} id="img" alt="img_7.jpg"/>

                </td>

                <td>
                  <img src={Img8} id="img" alt="img_8.jpg"/>

                </td>

                <td>
                  <img src={Img9} id="img" alt="img_9.jpg"/>
                  
                </td>

              </tr>

              <tr>
                <td>
                  
                </td>

                <td>
                  <img src={Img10} id="img" alt="img_10.jpg"/>


                </td>

                <td>
                  
                </td>

              </tr>

            </table>
          </Droppable>
        )}
      </DragDropContext>
    </>
  )
}

export default App
