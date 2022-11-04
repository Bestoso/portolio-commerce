import React, { useContext, createContext, useState } from 'react'

export const Theme = createContext();

export const useThemeContext = () => useContext(Theme);

export const ThemeProvider = ({ children }) => {

    const [ bgColor, setBgColor ] = useState('default')

    return (
        <Theme.Provider value={{
            bgColor,
            setBgColor,
        }}>
            { children }

        </Theme.Provider>
    )
}

