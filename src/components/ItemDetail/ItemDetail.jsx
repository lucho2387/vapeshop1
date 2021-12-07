import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
    //  const [irAlCarrito, setIrAlCarrito] = useState(false) 
    const [index,setIndex] = useState(0)

    // const onAdd = (numero) => {
    //     // console.log(numero, item);  

    //     console.log({...item, nombre: item.name, cantidad: numero, subtotal: item.price * numero, stock: item.stock - numero})
    //     setIrAlCarrito(true)
    // }
    
    const handleTab = index => {
        setIndex(index)
    }
    
    const {
        id,
        name,
        src,
        detail,
        stock,
        price,
    } = item

    return (
        <>
        <div key={id} className="modalDetalle modalDetalle-open">
            <div className="modal__dialog">
                <Link to="/productos">
                <button className="botonCerrarDetalle">
                    X
                </button>
                </Link>
                <h1 className="tituloDetalle1">{name}</h1>
                <div className="imagenDetalle">
                    <img className="imagenTamaño" src={src[index]} alt="imagenProducto" />
                    <p className="textoDetalle">{detail}</p>
                </div>
                <div className="imagenes">
                    {
                        src.map((imagen, index) => (
                            <button key={index} className="botonImagen" onClick={()=> handleTab(index)}><img className="imagenSrc" src={imagen} alt="" /></button>
                        ))

                    }
                </div>
                <p className="colorDetalle">{item.colour}</p>
                {/* <span className="precioDetalle">Precio: $ {item.price}</span> */}
                {/* {irAlCarrito ? (
                                <>
                                    <Link to="/cart" className="botonTerminar">Finalizar Comprar</Link>
                                </>
                ) : (
                            <> */}
                            <span className="precioDetalle">Precio $ {price}</span>
                            <ItemCount
                                stock={stock}
                                price={price}
                                item={item}
                            />
                    {/* </>
                    )
                }     */}
            </div>
        </div>
        </>
    )
}

export default ItemDetail