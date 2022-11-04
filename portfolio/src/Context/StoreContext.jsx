import React, { createContext, useContext, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const StoreContext = createContext();

export const useStoreContext = () => useContext(StoreContext);

export const StoreContextProvider = ({ children}) => {

    const [ product, setProduct ] = useState([]);

    // get all the collection

    const getFireElements = () => {
        const db = getFirestore();
        const queryCollection = collection(db, 'products');
        getDocs(queryCollection)
            .then(resp => setProduct(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))
            ))
        }

    return (
        <StoreContext.Provider value={{
            product,
            setProduct,
            getFireElements
        }}>
            { children }
        </StoreContext.Provider>
    )
}