import { createContext, useEffect, useState } from "react";
import axios from 'axios'




export const Storecontext = createContext(null)

const StoreContextProvider = (props) =>{

    const[cartitems , setCartitems] = useState({});
    const Url = "http://localhost:3000"
    const [token , setToken] = useState("");
    const [food_list,setFood_list] = useState([])

    const addTocart = async(itemId) =>{
        if(!cartitems[itemId] ){
            setCartitems((prev) => ({...prev,[itemId]:1}))
        }else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if (token) {
            await  axios.post(Url+"/api/adder",{itemId},{headers:{token}})
            
        }
    }
    const removeTocart =  async (itemId) =>{
            setCartitems((prev)=> ({prev,[itemId]:prev[itemId]-1}))
            if (token) {
                 await axios.post(Url+"/api/removed",{itemId},{headers:{token}})
                
            }
    }

    const getcart = async(token) =>{
        const response = await axios.post(Url+"/api/get",{},{headers:{token}})
        setCartitems(response.data.cartData)
    }

    const TotalcartItems = () => {
        let totalamount = 0;
        for (const item in cartitems){
            if (cartitems[item]> 0) {
                let iteminfo = food_list.find((product) =>  product._id === item)
                totalamount += iteminfo.price*cartitems[item]
                
            }
        }
        return totalamount;
    }


        const fetchFoodlist = async() => {
            const response = await axios.get(Url+"/api/list")
            setFood_list(response.data.data)
        }

    useEffect(() => {

            async function loadData() {
                await fetchFoodlist();
                if (localStorage.getItem("token")) {
                    setToken(localStorage.getItem("token"));
                    await getcart(localStorage.getItem("token"))

                
            }
            
        }
        loadData();
    },[])

    const contextValue = {

    food_list,
    cartitems,
    setCartitems,
    addTocart,
    removeTocart,
    TotalcartItems,
    Url,
    token,
    setToken
    
    }
    return (

        <Storecontext.Provider value={contextValue}  >
            {props.children}
        </Storecontext.Provider>
    )
}


export default StoreContextProvider