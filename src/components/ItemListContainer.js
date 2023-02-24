import ItemList from "./ItemList";

function ItemListContainer () {
    return (
        <div className="container">

          <div className='productos container'>
                     <ItemList />
          </div>
        </div>
    );
}

export default ItemListContainer;