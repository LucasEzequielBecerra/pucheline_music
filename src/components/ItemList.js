import Item from './Item';

function ItemList () {

    const ItemList = [
        {
            id: 1,
            title: "Remera",
            description: "Remera",
            price: 7499,
            pictureUrl: "https://martin-centurion.github.io/pucheline/static/media/remera-producto.a4a6c57326e3768a442f.jpeg",
        },
        {
            id: 2,
            title: "Gorra",
            description: "Marrón y beige",
            price: 5899,
            pictureUrl: "https://martin-centurion.github.io/pucheline/static/media/gorra-producto.135c3b768a28a3ca3f36.jpeg",
        },
        {
            id: 3,
            title: "Vinilo",
            description: "Nombre artista",
            price: 3499,
            pictureUrl: "https://martin-centurion.github.io/pucheline/static/media/vinilo-producto.ddacbe47642039ed6ba9.jpeg",
        }

    ]

    return (
        <div className="productos__content">
            {ItemList.map(items => {
                return <Item key={items.id} title={items.title} description={items.description} img={items.pictureUrl} price={items.price} />
            })}
        </div>
    );
};

export default ItemList;