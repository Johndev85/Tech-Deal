import Modal from 'react-modal'
import {useState} from 'react'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  Modal.setAppElement('#__next')

  export default function AccessSucess () {
    const [OpenRegister, setOpenRegister] = useState(false)
  

  function openModalR () {
      setOpenRegister(true)
   }
        
    function closeModal () {
       if (OpenRegister) {
         setOpenRegister(false)
    }
  }

    return (
        <>
        <button onClick={openModalR}>Register</button>
        <Modal
        isOpen={OpenRegister
        }
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Register"
      >
        <button onClick={closeModal}>X</button>
        <div>
          <span>Successful registration</span>
        </div>
        <style jsx>
        {`
          div {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
          }
          span {
            font.size: 1.2rem;
            color: $color-second;
          }
        `}
        </style>
      </Modal>

      </>
    )
  }