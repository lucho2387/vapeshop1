import Header from '../../components/Header/Header';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Loader from '../../components/Loader/Loader'
import React, { useState} from 'react'
import './productos.css'

const Productos = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return (
        <>
            <Header />
            { isLoading ? <Loader /> : <ItemListContainer />}  
        </>  
    )
}

export default Productos