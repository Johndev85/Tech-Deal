import Modal from 'react-modal'
import Register from '../pages/register'
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

  export default function AccessUser () {
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
        <Register />
      </Modal>

      </>
    )
  }