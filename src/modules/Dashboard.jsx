import { Route, Routes, useLocation } from "react-router-dom"
import { Category, Home,Products} from "../pages"
import { CartIcon } from "../assets/icons"
import { Context } from "../context/Context"
import { useContext } from "react"
import { Carts } from "../components"
function Dashboard() {

  const location = useLocation()
  const {cart,setCart,setOpenCart} = useContext(Context)


  const pageTitle = {
    "/" : "Home Page",
    "/products" : "Products",
    "/categories" : "Category List"
  }


  function handleCartDelete(id){
    const findIndex = cart.findIndex(item=> item.id == id)
    cart.splice(findIndex,1)    
    setCart([...cart])
  }


  const title = pageTitle[location.pathname]
  return (
    <div className="w-full bg-white">
      <nav className="h-[60px] w-full bg-white shadow-md flex items-center justify-between px-4 fixed right-0 z-20">
     <div className="flex items-center  justify-between w-full pl-90 pr-10">
     <h3 className=" font-semibold text-lg tracking-wider">{title}</h3>
      <div className="flex items-center justify-center gap-6 ">
    <div className="relative cursor-pointer" onClick={()=> setOpenCart(true)}>
    <CartIcon/>
    <span className="absolute -top-1 -right-3 bg-red-500 text-white px-1.5 text-sm rounded-full">{cart.length}</span>
    </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold cursor-pointer">Contact</button>
      </div>
     </div>
      </nav>
    <div className="pt-14">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/categories" element={<Category/>}/>
    </Routes>
    </div>
    <Carts>
      <button onClick={()=> setOpenCart()} className="bg-red-500 cursor-pointer text-white px-6 py-2 rounded absolute top-2 right-2">Close</button>
     <div className="flex flex-col h-full items-center justify-center gap-4">
     <h2 className="font-bold text-lg">Products in cart:</h2>
     <ul className="flex flex-wrap justify-center gap-4">
     {cart.length > 0 ? (cart.map(item=>  <li key={item.id} className="w-[300px] flex relative flex-col items-center justify-between gap-4 py-8 bg-white border-gray-300 border shadow-2xl rounded-md">
            <div className="h-[200px] w-full">
              <img src={item.image} alt="product-image" className="w-full h-full object-contain border-b" /></div>
            <h2 className="font-semibold text-lg px-4 text-center">{item.title}</h2>
            <div className="flex gap-4">
              <p className="px-4 py-1 rounded bg-black text-white font-semibold">${item.price}</p>
              
            </div>
            <button onClick={()=> handleCartDelete(item.id)} className="absolute bg-red-500 text-white rounded font-semibold px-2 cursor-pointer py-1 top-2 right-2">Delete</button>
          </li>)) : ( <p>No products in cart yet</p>)}
         
     </ul>
     </div>
    </Carts>
    </div>
  )
}

export default Dashboard