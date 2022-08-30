import { createContext, useState } from "react";


export const UsernameContext = createContext()


const UsernameProvider =  ({children}) => {
    
    // const username = 'Gerd'

    const [username, setUsername] = useState('')
    
   
    const exportData= {username, setUsername}

    return (
        <UsernameContext.Provider value={ exportData } >
            {children}
        </UsernameContext.Provider>
    )
}

export default UsernameProvider


