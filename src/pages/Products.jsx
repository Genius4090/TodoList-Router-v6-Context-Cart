import { useContext } from "react"
import { Context } from "../context/Context"
import Modal from "../components/Modal"

function Products() {
  const { productList, categoryList, openModal, setOpenModal,products,setProducts,cart,setCart} = useContext(Context)


  function handleAdd(item){
   setCart([...cart,item])
  }


  function handleCreate(e) {
    e.preventDefault()
    const categoryFind = productList.find(item => item.categoryId == e.target.category.value)    
    const newData = {
        id: productList.length + 1,
        title: e.target.title.value,
        price:  e.target.price.value,
        categoryId:  e.target.category.value,
        categoryType: categoryFind.categoryType,
        image: e.target.img.value
    }
    setProducts([...products,newData])
    setOpenModal()
  }

  function handleDelete(id){
    const findIndex = products.findIndex(item=> item.id == id)
    products.splice(findIndex,1)    
    setProducts([...products])
  }
 
  function handleSearch(e){
    const result = productList.filter(item=> item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts([...result])   
  }

  return (
    <div className="container flex flex-col items-center ">
      <div className="w-full py-8 flex items-center  justify-center gap-8">
        <input onChange={(e)=> handleSearch(e)} type="text" placeholder="Search" className="outline-none w-[24%] bg-white shadow-md border border-gray-300 py-2 px-4 rounded text-gray-600" />
        <button onClick={()=> setOpenModal(true)} className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer">Create</button>
      </div>

      <ul className="flex flex-wrap justify-center gap-4">
        {products.map(item =>
          <li key={item.id} className="w-[300px] flex relative flex-col items-center justify-between gap-4 py-8 bg-white border-gray-300 border shadow-2xl rounded-md">
            <div className="h-[200px] w-full">
              <img src={item.image} alt="product-image" className="w-full h-full object-contain border-b" /></div>
            <h2 className="font-semibold text-lg px-4 text-center">{item.title}</h2>
            <div className="flex gap-4">
              <p className="px-4 py-1 rounded bg-black text-white font-semibold">${item.price}</p>
              <button onClick={()=> handleAdd(item)} className="bg-green-500 text-white rounded font-semibold px-8 py-1">Add</button>
              
            </div>
            <button onClick={()=> handleDelete(item.id)} className="absolute bg-red-500 text-white rounded font-semibold px-2 cursor-pointer py-1 top-2 right-2">Delete</button>
          </li>)}

      </ul>
      {openModal && <Modal padX="10" padY="10 ">

        <form onSubmit={handleCreate} className="w-full h-full flex flex-col items-center justify-center gap-6 px-6">
          <h2 className="font-semibold text-lg">Create new Product</h2>
          <input name="title" type="text" placeholder="title" className="outline-none border border-gray-400 rounded px-4 py-1 w-full" />
          <input name="price" type="number" placeholder="price" className="outline-none border border-gray-400 rounded px-4 py-1 w-full" />
          <select name="category" className="outline-none border border-gray-400 rounded px-4 py-1 w-full">
           
            {categoryList.map(item=> <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
          <input name="img" type="text" placeholder="image" className="outline-none border border-gray-400 rounded px-4 py-1 w-full" />
          <div className="flex gap-4">
            <button type="button" onClick={()=> setOpenModal()} className="px-8 font-semibold cursor-pointer py-2 bg-red-500 text-white rounded">Cancel</button>
            <button className="px-8 font-semibold cursor-pointer py-2 bg-green-500 text-white rounded">Create</button>
          </div>
        </form>
      </Modal>}
     
    </div>
  )
}

export default Products


// {
//   id: 1,
//   title: "Apple MacBook Air 15\" M2",
//   price: "1399",
//   categoryId: 1,
//   categoryType: "laptop",
//   image: Product1
// },