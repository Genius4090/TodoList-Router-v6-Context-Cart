import { useContext } from "react"
import { BurgerIcon, ExitIcon } from "../assets/icons"

import { UserImg } from "../assets/images"
import { SidebarItem } from "../components"
import { Context } from "../context/Context"

function Sidebar() {
const {setOpenSidebar,openSidebar,sideList} = useContext(Context) 
  return (
    <div className={`w-[6%] z-100 flex fixed flex-col justify-between items-center py-4 transition-all duration-300 bg-white border border-gray-300 ${openSidebar && "w-[18%]"}`}>
      <div className="flex flex-col gap-4 pb-8 pt-6  justify-between h-screen ">
      <div>
      <div className={`flex items-center justify-center px-4  ${openSidebar && "justify-between! gap-10"}`}>
          <h2 className={`font-semibold  text-2xl hidden ${openSidebar && "inline"}`}>Dashboard</h2>
          <span onClick={() => setOpenSidebar(prev => !prev)} className="pt-1 cursor-pointer">
            <BurgerIcon />
          </span>

        </div>
        <ul className="flex flex-col gap-8 py-6 px-2 ">
          {sideList.map(item => <SidebarItem key={item.title} item={item} openSidebar={openSidebar} />)}
        </ul>
      </div>
        <div className="px-2 ">
        <div className={`flex items-center justify-center  py-4 sidebar-link  ${openSidebar && "justify-center gap-2 items-center "}`}>
         <img src={UserImg} alt="user__img" width={50} height={50} />
          <p className={` text-md font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${openSidebar ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>Jane Doe</p>
        </div>
        <button
          className={`flex items-center justify-center w-[80%] mx-auto rounded-[20px] bg-red-500 px-4 py-2 sidebar-link transition-all duration-300 overflow-hidden ${openSidebar ? "gap-4" : "justify-center gap-0"
            }`}
        >
          <div className={`shrink-0 pt-0.5 transition-transform duration-300 ${openSidebar ? "" : ""
            }`}>
            <ExitIcon />
          </div>
          <p className={`text-white text-lg font-semibold whitespace-nowrap transition-all duration-300 ${openSidebar ? "opacity-100 w-auto" : "opacity-0 w-0"
            }`}>
            Sign Out
          </p>
        </button>
      </div>
      </div>
     
    </div>
  )
}

export default Sidebar