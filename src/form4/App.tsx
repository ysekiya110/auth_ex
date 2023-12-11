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
import './App.css'
//import sqlite3 from 'sqlite3'

//const db = new sqlite3.Database('/public/user_inf.sqlite3');


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      
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
                      <img src={Img1} id="img" alt="img_1.jpg"/>
                    </td>
                  
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
          
    </>
  )
}

export default App
