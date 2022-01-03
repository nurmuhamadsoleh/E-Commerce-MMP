import "../assets/css/MyCartDetail.scss";

const CardRelated = ({product}) => {
    return(
        <div className="card-promo">
            <img src={product.image} alt="Product" className="img-thumbnail w-auto" style={{height: "200px"}}/>
                <h5 className="card-promo__title">{product.title}</h5>
                <p className="card-promo__price">Rp. {product.price}</p>
                <div className="card-promo__box">
                    <span className="card-promo__discount">30%</span>
                    <span className="card-promo__price subs">Rp. {product.disc}</span>
                </div>
                <p className="card-promo__address">{product.city}</p>
                <br />
                <div className="d-inline-block ms-2">
                    <i className="bi bi-star me-1"></i>
                    <i className="bi bi-star me-1"></i>
                    <i className="bi bi-star-fill me-1"></i>
                    <i className="bi bi-star-fill me-1"></i>
                    <i className="bi bi-star-half me-1"></i>
                </div>
        </div>
    )
}

export default CardRelated