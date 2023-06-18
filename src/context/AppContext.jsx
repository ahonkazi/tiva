import { createContext, useState } from "react";

export const GetContext = createContext()
export const Context = ({ children }) => {

    const [sidebarStatus, setSidebarStatus] = useState(false)
    const [activeNav, setActiveNav] = useState(0)

    return (
        <GetContext.Provider value={{ sidebarStatus, setSidebarStatus, activeNav, setActiveNav }}>
            {children}
        </GetContext.Provider>
    )
}