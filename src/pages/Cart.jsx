// import { Link } from "react-bootstrap-icons"
import { Link } from "react-router-dom";
import { products } from "../data/products";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import { useParams } from "react-router";


// import { products } from "../data/products"

class Cart extends React.Component{
    state = {
        title: "Cart",
        quantity : 1,
        productDetail: {},
        productCarts : []
    }
    componentDidMount(){
        document.title = this.state.title
        const users = JSON.parse(localStorage.getItem('users'));
        const emailLogin = localStorage.getItem('userEmail');
        let userLogin = {} 
        users.forEach(user => {
            if(user.email === emailLogin){
                userLogin = user
            }
        });

        let userCarts = userLogin.cart
        let jumlah = userCarts.length;
        console.log(jumlah)
        // userCarts.forEach(userCart => {
        //     // var total = 0
        //     // let product = [];
        //     // let qtyCart =userCart.idProduct
        //     // for(const [index, value] of Object.entries(userCart)){
        //     //     console.log(`${index} dan memilki value ${value}`)
        //     // }
        //     console.log(userCart)
        //     let productCart = [];
        //     let totalProduct = 0;
        //     productCart.push(userCart)
        //     console.log(productCart[0]);
        //     for(let k =0; k < productCart.length; k++){
        //         totalProduct += productCart[k]
        //         console.log(totalProduct)
        //     }

        // });
        // console.log(userCarts)
        let productCarts = []
        userCarts.forEach((userCart) => {
            const productCart = products.filter((product) => product.id === userCart.idProduct )
            productCart[0].quantity = parseInt(userCart.quantity)  
            productCarts.push(productCart[0])
        })
        console.log(productCarts)
        this.setState({
            productCarts: productCarts
        })

    }
    handleMinus = () => {
        if(this.state.quantity > 1){
            this.setState({
                quantity : this.state.quantity - 1
            })
        }
    }
    handlePlus= () => {
        const stock = 20;
        if(this.state.quantity < stock){
            this.setState({
                quantity : this.state.quantity + 1
            })
        }
    }
    render(){
        const {productCarts} = this.state;
        let subTotal = 0
        let total = 0
        return(
            <div className="container mt-5">
            <div className="row">
                <div className="col-sm-8 mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                    <h1 className="fw-bold">
                        My Cart
                    </h1>
                    <h5 className="fw-bold text-capitalize">Delete Selected <FontAwesomeIcon icon={faTrashAlt}/></h5>
                    </div>
                    <hr />
                    {productCarts.map((product)=>{
                        subTotal = parseInt(product.quantity) * parseInt(product.price);
                        total = total + subTotal
                        let quantity = parseInt(product.quantity) * parseInt(product.quantity)
                        console.log(quantity)
                        
                        return (
                            <div className="container">
                                <div class="card mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={product.image} class="img-thumbnail rounded-3" alt="img1" style={{height: "180px"}}/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title fs-4 fw-bold ">{product.title}</h5>
                                                <p className="card-text">Rp. {product.price}</p>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="card-text fs-6">Total Harga :</p>
                                                        <p className="card-text">Rp. {subTotal}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label for="qty" class="form-label">Quantity :</label>
                                                        <input type="email" class="form-control" id="qty" value={product.quantity} disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-sm-4">
                    <div className="bg-info p-3 rounded-3 mt-5">
                        <div>
                            <p className="fs-4 fw-bold">Sub Total</p>
                            <h1 className="fw-bold fs-2 text-end">Rp. {total}</h1>
                            <Link to="/checkout" className="btn btn-primary d-block mx-auto fw-bold mt-3">Checkout Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const ProductCart = () => {
    const params = useParams();
    const idProduct = params.id;
    return(
        <Cart productId={idProduct} />
    )
}
export default ProductCart;