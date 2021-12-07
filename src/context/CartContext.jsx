import React, {useContext, useEffect, useState} from 'react'
import { products } from '../components/ItemListContainer/Items'

const CartContext = React.createContext()


export function CartContextProvider({ children }) {
    
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setItems(products)
        })
    }, []);

    // Validacion
    const isOnCart = (product) => {
        return cartItems?.findIndex(item => item.id === product.id)
    }

    const addToCart = (item) => {
        if (isOnCart(item) === -1) {
            setCartItems([...cartItems, item])
            alert("El producto se agrego al carrito correctamente")
        } else {
            alert("El producto ya fue agregado")
        }  
    }

    const deleteFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id))
    }

    const deleteItems = () => {
        setCartItems([])
    }
    

    const decrease = id => {
        cartItems.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1
            }
            setCartItems([...cartItems])
        })
    }

    const increase = id => {
        cartItems.forEach(item => {
            if (item.id === id && item.count < item.stock ) {
                item.count += 1
            }
            setCartItems([...cartItems])
        })
    }

    console.log(cartItems)
    
    return (
        <CartContext.Provider 
            value={{ items, addToCart, setItems, cartItems, deleteFromCart, decrease, increase, deleteItems }}>
            {children}
        </CartContext.Provider>
    )
    
}

export function useAddToCart(){
    return useContext(CartContext).addToCart
}

export function useCartItems(){
    return useContext(CartContext).cartItems
}

export function useDeletefromCart(){
    return useContext(CartContext).deleteFromCart
}

export function useCountDecrease(){
    return useContext(CartContext).decrease
}

export function useCountIncrease(){
    return useContext(CartContext).increase
}

export function useDeleteItems(){
    return useContext(CartContext).deleteItems
}

export default CartContext