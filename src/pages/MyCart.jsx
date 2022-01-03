import { Link } from "react-router-dom";

const MyCart = ({title, price, image, id, city}) => {
    // let url = 'product/' + productId; 
    return(
    <div className="col-sm-4 my-3">
        <div className="card m-1">
            <img src={image} className="card-img-top img-thumbnail" style={{height: "250px"}} alt="Product"/>
            <div className="card-body">
                <h5 className="card-title fs-6">{title}</h5>
                <p className="card-text fs-5 fw-bold">Rp. {price}</p>
                <p className="card-text fs-6 fw-normal">{city}</p>
                <Link  to={`/product/${id}`} className="btn btn-primary">See More</Link>
            </div>
        </div>
    </div>
    );
}
export default MyCart;