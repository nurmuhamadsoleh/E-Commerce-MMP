    // import MyCart from "./MyCart";
    import {products} from "../data/products";
    // import {Link} from "react-router-dom";
    import "../assets/css/MyCartDetail.scss"
    import React from "react";
    import { useParams } from "react-router-dom";
    import swal from "sweetalert";

    class Checkout extends React.Component{
        state = {
            title: "Checkout",
            quantity : 1,
            productsDetail :{},
            productCarts : [],
            userLogin : {}
        }
        componentDidMount(){
            document.title = this.state.title
            const users = JSON.parse(localStorage.getItem('users'));
            console.log(users)
            const email = localStorage.getItem('userEmail');
            console.log(email)
            let userLogin = {}
            users.forEach(user => {
                if(user.email === email){
                    userLogin = user
                }
                console.log(user.email === email)
            });
            let usercarts = userLogin.cart
            let productCarts = []
            usercarts.forEach((userCart) => {
                const productCart = products.filter((product) => product.id === userCart.idProduct)
                productCart[0].quantity = parseInt(userCart.quantity )
                productCarts.push(productCart[0])
            });
            console.log(productCarts)
            this.setState({
                productCarts : productCarts,
                userLogin : userLogin
            })
            console.log(userLogin)
            let myForm = document.getElementById('myform');
            console.log(myForm)
            let nama = myForm[0]
            console.log(nama)
            let telepon = myForm[1]
            console.log(telepon)
            let alamat = myForm[2]
            console.log(alamat)
            nama.value = userLogin.nama
            telepon.value = userLogin.telepon
            alamat.value = userLogin.alamat
        }
        payNow(e){
            e.preventDefault();
            let nama = (e.target[0].value);
            console.log(nama)
            let telepon = (e.target[1].value);
            console.log(telepon)
            let alamat = (e.target[2].value);
            console.log(alamat)
            if(!nama){
                swal("Sorry", "Update Profile Nama","warning")
            }else if(!telepon){
                swal("Sorry", "Wajib Update Profile Telepon",'warning')
            }else if(!alamat){
                swal("Sorry", '"Wajib Update Profile Alamat','warning')
            }else{
                swal("Hore", "Mohon di Tunggu Pesanan Segera di Proses", "success")
            }

        }
        render(){
            const {productCarts} = this.state;
            const userLoginD = this.state.userLogin;
            console.log(userLoginD)
            let total = 0;
            let JNE = 0
            let subtotal = 0
            let grandtotal = 0
            let pajak = 0
            return(
                <div className="container mt-5">
                <div className="row">
                <div className="col-sm-6 mt-5">
                        <h1 className="fw-bold">Checkout</h1>
                        <hr />
                        {productCarts.map((product)=>{
                            total = parseInt(product.quantity) * parseInt(product.price);
                            subtotal += total
                            JNE = 9000
                            pajak = 7500
                            grandtotal = JNE + subtotal + pajak

                            return(
                                <div>
                                    <div className="card mb-3">
                                    <div className="row g-0 d-flex align-items-center">
                                        <div className="col-md-4 p-2">
                                            <img src={product.image} className="img-fluid rounded-3" alt="image1"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text fs-5 fw-bold">Rp. {total}</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="w-100 h-auto bg-info p-2 rounded-3">
                        <h1 className="text-center text-uppercase fs-4 fw-normal">Delivery</h1>
                                <form id="myform" onSubmit={(e)=>{this.payNow(e); e.preventDefault()}}>
                                    <div className="mb-3">
                                        <label htmlFor="nama" className="form-label">Nama</label>
                                        <input type="text" className="form-control" id="nama" name="sel[]" disabled/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telepon" className="form-label">Telepon</label>
                                        <input type="text" className="form-control" id="telepon" name="sel[]" disabled/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="alamat" className="form-label">Alamat Lengkap</label>
                                        <textarea className="form-control" id="alamat" rows="10" placeholder="Your Alamat" name="sel[]" disabled></textarea>
                                    </div>
                                    <div className="mb-3">
                                    <label for="method delivery" className="form-label fw-bold">Delivery Method</label>
                                    <select className="form-select form-select-sm" id="method delivery">
                                        <option select>Choose Delivery Method</option>
                                        <option value={JNE}>JNE</option>
                                        <option value="2">Gojek/Grab</option>
                                        <option value="3">Wahana</option>
                                    </select>
                                    </div>
                                    <div className="mb-3">
                                    <label for="method payment" className="form-label fw-bold">Payment Method</label>
                                    <select className="form-select form-select-sm" id="method payment">
                                        <option select>Choose Payment Method</option>
                                        <option value="1">OVO</option>
                                        <option value="2">Transfer</option>
                                        <option value="3">Gopay</option>
                                    </select>
                                    <hr/>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2"> 
                                        <p>Subtotal</p>
                                        <h6>Rp. {subtotal}</h6>
                                    </div>
                                    <div className="d-flex justify-content-between"> 
                                        <p>Tax (10%)</p>
                                        <h6 >Rp. {pajak}</h6>
                                    </div>
                                    <div className="d-flex justify-content-between"> 
                                        <p>Delivery Cost</p>
                                        <h6 >Rp. {JNE}</h6>
                                    </div>
                                    <div className="d-flex justify-content-between"> 
                                        <p className="fs-4">Grand Total</p>
                                        <h6 className="fs-3">Rp. {grandtotal}</h6>
                                    </div>
                                    <button type="submit" className="btn btn-primary d-block mx-auto">Pay Now</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    const ProductCart = () =>{
        const params = useParams();
        const idProduct = params.id;
        return(
            <Checkout productId={idProduct}/>
        )
    }
    export default ProductCart;
    