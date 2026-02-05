import { useContext } from "react"
import { Context } from "../context/Context"
function Carts({ children }) {
  const { openCart, setOpenCart } = useContext(Context)

  return (
    openCart && (
      <div
        id="cartWrapper"
        onClick={(e) => e.target.id === "cartWrapper" && setOpenCart(false)}
        className="fixed top-0 w-full h-full backdrop-blur-md flex items-center justify-center z-50"
      >
        <div className="relative bg-white border border-gray-300 rounded shadow-md px-8 py-6 max-h-[90vh] overflow-y-auto w-[90%] md:w-[60%] lg:w-[40%]">
          {children}
        </div>
      </div>
    )
  )
}

export default Carts