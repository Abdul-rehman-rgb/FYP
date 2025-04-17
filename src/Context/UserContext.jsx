import { createContext,useContext, useState } from "react";

const UserContext = createContext()

export const userData = ()=> useContext(UserContext)

export const UserContextProvider = ({children})=>{
    const [loggedInUserId, setLoggedInUserId] = useState("")
    const [loggedInUser, setLoggedInUser] = useState("Demo User")
    const [loggedInUserPfp, setLoggedInUserPfp] = useState("")
    return(
    <UserContext.Provider value={{loggedInUser,loggedInUserId,
    loggedInUserPfp,setLoggedInUser, setLoggedInUserPfp,setLoggedInUserId}}>
        {children}
    </UserContext.Provider>
    )
}