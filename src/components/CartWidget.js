function CartWidget () {

    let valor = 0;

    return (
        <div className="header__content-icono">
            <a href="@">
                    <i className="bi bi-bag"></i>
                    <span>{ valor }</span>
            </a>
        </div>
    );
}

export default CartWidget;