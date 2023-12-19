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
import { Droppable } from "./components/Droppable"
import './App.css'
import { DndContext, DragOverEvent, DragStartEvent, DragEndEvent } from "@dnd-kit/core"
import { Modal } from "@fluentui/react"
import { Draggable } from './components/Draggable'
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

  // const dragableList = [
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),
  //   useState<JSX.Element | null>(null),

  // ];


  const [username, setName] = useState('');
  const [secret, setSecret] = useState('');

  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);

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

  function handleDragEnd({ active, over }) {
    // console.log(active);
    // console.log(over);
    if (active && over) {
      //dragableList[active.id - 1][1](true);

      droppableList[over.id - 101][1](<img src={`/img/img_${active.id}.jpg`} style={{ background: "#e9e9e9", width: 70, height: 70 }} />);
      setModal(false)
    }
  }

  function handleDragOver(event: DragOverEvent) {
    //console.log("aaa")
    const { active, over } = event;
    // const [Id, setId] =useState(0)
    console.log(active.id)
    // console.log(over?.id)
    //なぜ?

    // if (x % 2 ===1){//画像の上下なら
    //   //縦向きにハイライト

    // }
    // else{//画像の左右なら
    //   //横向きにハイライト

    // }


    if (over && over?.id !== undefined) {
      // const posNum: number = over.id
      // const overId: string = `pos${over.id-100}`

      const highlight = document.getElementById("over.id");
      console.log(highlight)
      //console.log(highlight)
      // droppableList[overId-1][1](<img src={`/img/img_${active.id}.jpg`} style={{ background: "#e9e9e9", width: 70, height: 70 }} />);

      // hightlight.style.backgroundColor =  "#4040FF";

    }



    // droppableList[Id][1](<img src={`/img/img_${active.id}.jpg`} style={{ background: "#e9e9e9", width: 70, height: 70 }} />);





  }

  function modalEvent(Id: number) {
    setModal(true);
    setModalId(Id);
  }

  function seledtImage(Id: number) {

  }

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };



  return (
    <>
      <h3>
        {(new URL(location.href)).searchParams.get("username")}
      </h3>

      {/* <Modal
        isOpen={modal === true }
        isBlocking={false}
        isModeless={true}
        onDismiss={() => setModal(false)}
        onDismissed={() => setModalId(0)}
      >
        <DndContext onDragEnd={handleDragEnd}>
          <Draggable Img={ImgList[modalId-1]} dragId={modalId} />
        </DndContext>
          
      </Modal> */}


      <DndContext onDragEnd={handleDragEnd} onDragOver={handleDragOver} >

        <table id="position">
          <tbody>
            <tr>
              <td id="pos1">
                <Droppable dropId={101}>{droppableList[0][0]}</Droppable>

              </td>

              <td id="pos2">
                <Droppable dropId={102}>{droppableList[1][0]}</Droppable>
              </td>

              <td id="pos3">
                <Droppable dropId={103}>{droppableList[2][0]}</Droppable>
              </td>

              <td id="pos4">
                <Droppable dropId={104}>{droppableList[3][0]}</Droppable>
              </td>
            </tr>

            <tr>
              <td id="pos5">
                <Droppable dropId={105}>{droppableList[4][0]}</Droppable>
              </td>

              <td id="pos6">
                <Droppable dropId={106}>{droppableList[5][0]}</Droppable>
              </td>

              <td id="pos7">
                <Droppable dropId={107}>{droppableList[6][0]}</Droppable>
              </td>

              <td id="pos8">
                <Droppable dropId={108}>{droppableList[7][0]}</Droppable>
              </td>
            </tr>

            <tr>
              <td id="pos9">
                <Droppable dropId={109}>{droppableList[8][0]}</Droppable>
              </td>

              <td id="pos10">
                <Droppable dropId={110}>{droppableList[9][0]}</Droppable>
              </td>

              <td id="pos11">
                <Droppable dropId={111}>{droppableList[10][0]}</Droppable>
              </td>

              <td id="pos12">
                <Droppable dropId={112}>{droppableList[11][0]}</Droppable>
              </td>
            </tr>

            <tr>
              <td id="pos13">
                <Droppable dropId={113}>{droppableList[12][0]}</Droppable>
              </td>

              <td id="pos14">
                <Droppable dropId={114}>{droppableList[13][0]}</Droppable>
              </td>

              <td id="pos15">
                <Droppable dropId={115}>{droppableList[14][0]}</Droppable>
              </td>

              <td id="pos16">
                <Droppable dropId={116}>{droppableList[15][0]}</Droppable>
              </td>
            </tr>
          </tbody>

        </table>

        {!modal ?
          <table id="images">

            <tr>

              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_1.jpg"} dragId={1} />

              </td>

              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_2.jpg"} dragId={2} />
              </td>

              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_3.jpg"} dragId={3} />
              </td>


            </tr>

            <tr>
              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_4.jpg"} dragId={4} />

              </td>


              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_5.jpg"} dragId={5} />

              </td>

              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_6.jpg"} dragId={6} />

              </td>
            </tr>

            <tr>
              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_7.jpg"} dragId={7} />

              </td>

              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_8.jpg"} dragId={8} />

              </td>

              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_9.jpg"} dragId={9} />

              </td>

            </tr>

            <tr>
              <td>
                <button onClick={() =>
                  location.reload()
                }>
                  Reset
                </button>
              </td>

              <td>
                <ModalImage onClick={modalEvent} Img={"/img/img_10.jpg"} dragId={10} />


              </td>

              <td>
                <button onClick={() =>
                  console.log(searchParams.get('username'))
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

                <td>
                  <Draggable dragId={`${modalId}_1`} Width={140} Height={70} />
                  {/* //dragId={modalId} */}
                </td>

                <td>
                  <button onClick={() =>
                    setModal(false)
                  }>
                    Back
                  </button>
                </td>

              </tr>

              <tr>
                <td>
                  <Draggable dragId={`${modalId}_4`} Width={70} Height={140} />

                </td>

                <td>
                  <img src={`/img/img_${modalId}.jpg`} style={{ background: "#e9e9e9", margin: 20, width: 140, height: 140, }} />
                </td>

                <td>
                  <Draggable dragId={`${modalId}_2`} Width={70} Height={140} />

                </td>
              </tr>

              <tr>
                <td>

                </td>

                <td>
                  <Draggable dragId={`${modalId}_3`} Width={140} Height={70} />

                </td>
                <td>

                </td>
              </tr>
            </table>
          </div>
        }

      </DndContext>
    </>
  )
}

export default App

