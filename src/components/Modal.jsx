import { useContext } from "react"
import { Context } from "../context/Context"

function Modal({children, padX,padY}) {
  const {openModal,setOpenModal} = useContext(Context)

  return (
    openModal && <div id="wrapper" onClick={(e)=> e.target.id == "wrapper" && setOpenModal()} className="fixed flex items-center justify-center backdrop-blur-2xl w-full h-full z-200 top-0">
            <div className={`shadow-2xl border border-gray-300 bg-white rounded-[10px] px-${padX} py-${padY}`}>{children}</div>
          </div>
  )
}

export default Modal