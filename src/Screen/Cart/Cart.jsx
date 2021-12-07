import React, { useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import './cart.css'
import { useCartItems,useDeletefromCart, useCountDecrease, useCountIncrease, useDeleteItems } from '../../context/CartContext'

const Cart = () => {
    
    const cartItems = useCartItems()
    const deleteItem = useDeletefromCart()
    const decrease = useCountDecrease()
    const increase = useCountIncrease()
    const deleteItems = useDeleteItems()
    const [total, setTotal] = useState(0)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const getTotal = () => {
            const res = cartItems.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cartItems])


    return (
        <>
            {   
                cartItems.length === 0
                    ?(<>
                        <Header />
                        <h1 className="tituloCarrito">Carrito de Compras Vacio</h1>
                    </>)
                    :(<>
                        <Header />
                        <div className="container-general">
                            {
                                cartItems?.map((item) => {
                                        const {
                                            id,
                                            name,
                                            image,
                                            detail,
                                            price,
                                            count,
                                        } = item
                                        
                                        return (
                                            <>
                                            <div key={id} className="cart-container">
                                                <img src={image} alt={image} />
                                                <span className="cart-title">{name}</span>
                                                <span className="cart-detail">{detail}</span>
                                                <p className="cart-price">Precio $ <span>{price}</span></p>
                                                <button className="cart-button" onClick={() => deleteItem(item)}>X</button>
                                                <div className="cart-amount">
                                                    <button className="cart-button-decrease" onClick={() => decrease(id)}> - </button>
                                                    <span className="cart-count">{count}</span>
                                                    <button className="cart-button-increase" onClick={() => increase(id)}> + </button>   
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                            <div className="total">
                                <h3 className="cart-total">Total: $ <span>{total}</span></h3>
                                <div className="cart-botones">
                                    <button className="cart-button-pagar">Pagar</button>
                                    <button className="cart-button-todo" onClick={() => deleteItems()}>Limpiar</button>
                                </div>
                            </div>
                        </div>
                    </>)
            }
            
           
           
        </>
     )
}

export default Cart