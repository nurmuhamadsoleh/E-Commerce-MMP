// import { Card } from "react-bootstrap";
import MyCarausel from "./MyCarausel";
import MyCart from "./MyCart";
import { products } from "../data/products";
// import Carausel from "../assets/image/pc_gaming.jpg";
// import CarauselImg from "../assets/image/pc_gaming_2.png";
// import CarauselImgLast from "../assets/image/pc_gaming_3.jpg";
import { Link } from "react-router-dom";
// import MyCarausel from "./MyCarausel";
// console.log(products[0].image)
// for(let keys in products){
//     console.log(products[keys].id)
// }

const Homepage = () => {
    return(
        <div className="container mt-5">
            
            <div className="row">
                    <div className="col-sm-12 d-inline">
                        <MyCarausel/>
                    </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-12 mb-3">
                    <Link to="/allproduct" className="btn btn-danger">See All Produk</Link>
                </div>
                {products.map((product)=>{
                    return <MyCart title={product.title} id={product.id} price={product.price} image={product.image} city={product.city}/>
                })}
            </div>

        </div>        
    )
}
export default Homepage;