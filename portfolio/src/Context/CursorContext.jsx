import { createContext, useContext, useState } from "react";

const cursorContext = createContext();

export const useCursorContext = () => useContext(cursorContext);

export const CursorContextProvider = ({ children }) => {

    const [ cursorVariant, setCursorVariant ] = useState('default');

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');

    return (
        <cursorContext.Provider value={{
            cursorVariant,
            setCursorVariant,
            textEnter,
            textLeave
        }}>
            {children}
        </cursorContext.Provider>
    );
    }