import Modal from 'react-modal'
import Login from '../pages/login'
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
    const [OpenLogin, setOpenLogin] = useState(false)
  
    
     function openModalL () {
       setOpenLogin(true)
    }
    
    function closeModal () {
       if (OpenLogin) {
        setOpenLogin(false)
    }
  }
    

    return (
        <>
        <button onClick={openModalL} >Login</button>
        <Modal
        isOpen={OpenLogin}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login"
      >
        <button onClick={closeModal}>X</button>
        <Login />
      </Modal>

      </>
    )
  }