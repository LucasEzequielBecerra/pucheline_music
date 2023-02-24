import React, { useEffect, useState} from "react";
import { getFetch } from "./ItemList";
import ItemList from "./ItemList";

function ItemListContainer () {

    const [items, setItems] = useState([]);
    const [cargandoItems, setLoading] = useState(true);

    useEffect(() => {
        getFetch    
            .then((response) => setItems(response))
            .catch (err => console.log(err))
            .finally(()=> setLoading(false))
    },[])

    return (
        <div className="container">
            {
                cargandoItems ?
                <h5>Cargando productos!</h5>
                :
          <div className='productos container'>
                     <ItemList prod = { items }/>
          </div>
            }
        </div>
    );
}

export default ItemListContainer;