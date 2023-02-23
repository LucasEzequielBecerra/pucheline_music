import { useState } from 'react';
import remeraProducto from '../img/remera-producto.jpeg';

export default function ItemCount () {

    const [contador, setCount] = useState(0);

    return (
                <div className="productos__content-img">
                    <img src={remeraProducto} className="productos" alt="Buzo Morado"/>
                    <h2>Remera Sun</h2>
                    <div className="productos__content-cantidad">
                        <div className="productos__content-cantidad-contador">
                            <p onClick={ () => {if (contador > 0) {setCount (contador => contador -1)}} }>-</p>
                            <h3>{ contador }</h3>
                            <p onClick={ () => {if (contador < 7) {setCount (contador => contador +1)}} }>+</p>
                        </div>
                        <button href="#">Agregar al carrito</button>
                    </div>
                </div>
    );
}