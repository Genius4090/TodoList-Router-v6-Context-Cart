import { createContext, useState } from "react";
import { CartIcon, CategoryIcon, HomeIcon } from "../assets/icons"
import {Product1,Product2,Product3,Product4,Product5,Product6,Product7,Product8,Product9,Product10,Product11,Product12} from "../assets/images"



const Context = createContext()


const GlobalContext = ({children}) => {
  const [openModal,setOpenModal] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [cart,setCart] = useState([])
  const [openCart,setOpenCart] = useState(false)

    const sideList = [
      {
        id: 1,
        link: "/",
        title: "Home",
        icon: <HomeIcon />
      }, {
        id: 2,
        link: "/products",
        title: "Products",
        icon: <CartIcon />
      }, {
        id: 3,
        link: "/categories",
        title: "Categories",
        icon: <CategoryIcon />
      }
    ]
   const categoryList = [
    {
      id:1,
      title:"laptop"
    },
    {
      id:2,
      title:"console"
    }, 
    {
      id:3,
      title:"keyboard"
    }, 
    {
      id:4,
      title:"mouse"
    },
   ]

   const productList = [
    {
      id: 1,
      title: "Apple MacBook Air 15\" M2",
      price: "1399",
      categoryId: 1,
      categoryType: "laptop",
      image: Product1
    },
    {
      id: 2,
      title: "ROG Zephyrus G14",
      price: "1299",
      categoryId: 1,
      categoryType: "laptop",
      image: Product2
    },
    {
      id: 3,
      title: "Sony PlayStation 5",
      price: "499",
      categoryId: 2,
      categoryType: "console",
      image: Product3
    },
    {
      id: 4,
      title: "Xbox Series X",
      price: "499",
      categoryId: 2,
      categoryType: "console",
      image: Product4
    },
    {
      id: 5,
      title: "Logitech G915 TKL Wireless",
      price: "229",
      categoryId: 3,
      categoryType: "keyboard",
      image: Product5
    },
    {
      id: 6,
      title: "Corsair K70 RGB MK.2 Keyboard",
      price: "179",
      categoryId: 3,
      categoryType: "keyboard",
      image: Product6
    },
    {
      id: 7,
      title: "Logitech MX Master 3 Mouse",
      price: "99",
      categoryId: 4,
      categoryType: "mouse",
      image: Product7
    },
    {
      id: 8,
      title: "Razer DeathAdder V3 Pro",
      price: "129",
      categoryId: 4,
      categoryType: "mouse",
      image: Product8
    },
    {
      id: 9,
      title: "HP Omen 16 Gaming Laptop",
      price: "1499",
      categoryId: 1,
      categoryType: "laptop",
      image: Product9
    },
    {
      id: 10,
      title: "Nintendo Switch OLED",
      price: "349",
      categoryId: 2,
      categoryType: "console",
      image: Product10
    },
    {
      id: 11,
      title: "Razer Huntsman Elite Keyboard",
      price: "199",
      categoryId: 3,
      categoryType: "keyboard",
      image: Product11
    },
    {
      id: 12,
      title: "Logitech G502 HERO",
      price: "59",
      categoryId: 4,
      categoryType: "mouse",
      image: Product12
    }
  ];
  const [products,setProducts] = useState(productList)
  console.log(cart);
  const [categoryBox,setCategoryBox] = useState(categoryList)



    return (
        <Context.Provider value={{sideList,openSidebar,setOpenSidebar,productList,categoryList,openModal,setOpenModal,products,setProducts,cart,setCart,openCart,setOpenCart,categoryBox,setCategoryBox}}>{children}</Context.Provider>
    )
}

export {GlobalContext,Context}