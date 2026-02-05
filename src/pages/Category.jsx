import { useContext } from "react"
import { Context } from "../context/Context"

function Category() {
  const {categoryBox,setCategoryBox,categoryList} = useContext(Context)
  function handleCatSubmit(e){
    e.preventDefault()
    const newCategory = {
        id:categoryList.length + 1,
        title: e.target.category.value
    }
    setCategoryBox([...categoryList,newCategory])
  }
  return (
    <div className="px-100 container py-10 flex flex-col gap-10 justify-center ">
      <h2 className="text-center font-bold text-lg">Add new Category :</h2>
       <form onSubmit={handleCatSubmit} className=" flex items-center justify-center gap-4 ">
        <input name="category" className="outline-none py-1 rounded w-[240px] border border-gray-300 px-2" type="text" />
        <button className="text-white bg-blue-500 px-4 py-2 rounded font-semibold cursor-pointer">Add Category</button>
      </form>

      <div className=" flex gap-4 justify-center items-center ">{categoryBox.map(item=> 
        <button className="bg-black text-white px-6 py-2 rounded" key={item.id}>{item.title}</button>
        )}</div>
     
    </div>
  )
}

export default Category