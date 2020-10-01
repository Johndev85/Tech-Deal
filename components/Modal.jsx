import ReactDOM from "react-dom"

export default function Modal(props) {
    if (!props.isOpen) {
        return null
    }

    return ReactDOM.createPortal(<p>Hola modal</p>, "modal")
}
