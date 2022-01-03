import { products } from "../data/products";
// import state from "sweetalert/typings/modules/state";
import React from "react";
import CardRelated from "../components/CardRelated";
import { useParams } from "react-router";
import swal from "sweetalert";


class ProductDetail extends React.Component {
    state = {
        title: 'Home',
        quantity : 1,
        products : [],  
        productDetail: {}
    }
    componentDidMount = () =>{
        document.title = this.state.title
        console.log(this.props.productId)
        

        products.forEach(product => {
            if(product.id === this.props.productId){
                this.setState({
                    productDetail: product
                })
            }
        }); 
    }
    //jika angka nya lebih dari 1, maka dapat berkurang 1.
    handleMinus = () => {
        if(this.state.quantity > 1){
            this.setState({
                quantity : this.state.quantity - 1
            })
        }
    }
    //angka dapat bertambah secara terus menerus sampai  batas maksimal 20
    handlePlus= () => {
        const stock = 20;
        if(this.state.quantity < stock){
            this.setState({
                quantity : this.state.quantity + 1
            })
        }
    }
    handleCartToStorage = () => {
        let users = JSON.parse(localStorage.getItem('users'))
        console.log(users)
        let emailLogin = localStorage.getItem('userEmail')
        // console.log(userLogin)
        let userCart = [];
        let userLogin = {}
        console.log(userCart)
        console.log(emailLogin)
        users.forEach((user) => {
            if(user.email === emailLogin){
                userCart = user.cart
                //menampilkan selurh data user yang login
                userLogin = user
            }
        })
        console.log(userCart)
        //Masukan id product ke userCart dan quantity nya masuk ke userCart
        if(userCart.length === 0){
            userCart.push({
                idProduct : this.props.productId,
                quantity : this.state.quantity
            })
            let userWithOutUserLogin = users.filter((user)=> user.email !== emailLogin)
            console.log(userWithOutUserLogin)
            let userWithNewCart = {
                nama : userLogin.nama,
                email : userLogin.email,
                password : userLogin.password,
                alamat : userLogin.alamat,
                telepon : userLogin.telepon,
                cart : userCart
            }
            userWithOutUserLogin.push(userWithNewCart)
            localStorage.setItem('users', JSON.stringify(userWithOutUserLogin))
            swal('Hore','Berhasil To Cart', 'success')
        }else{
            let carts = userCart.filter((cart) => cart.idProduct === this.props.productId)
            if(carts.length !== 0){
                swal("Hore", "Product sudah ada di cart", "error")
            }else{
                userCart.push({
                    idProduct : this.props.productId,
                    quantity : this.state.quantity 
                })
                let userWithoutUserLogin = users.filter((user)=> user.email !== emailLogin)
                console.log(userWithoutUserLogin)
                let userWithNewCart = {
                    nama : userLogin.nama,
                    email : userLogin.email,
                    password : userLogin.password,
                    alamat : userLogin.alamat,
                    telepon : userLogin.telepon,
                    cart : userCart
                }
                userWithoutUserLogin.push(userWithNewCart)
                localStorage.setItem('users', JSON.stringify(userWithoutUserLogin))
                swal("hore", "Berhasil", "success")
            }

        }
    }

    render(){

        const {productDetail} = this.state;
        const relatedProducts = products.filter((product) => {
            return parseInt(product.id) <= 4
        })

        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8 mt-5">
                        <div className="card bg-info">
                            <div id="gambar-1">
                                <img src={productDetail.image} className="w-100 img-thumbnail" alt="imgFull" id="staticBackdropLabel" style={{height: "480px", width:"450px"}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fs-2 fw-bolder mb-3">{productDetail.title}</h5>
                                <h4 className="card-text text-black-50 text-capitalize ">Rp. {productDetail.price}</h4>
                                <span className="fw-normal fs-6 text-capitalize mt-3"><span className="fw-bold text-capitalize">Kondisi : </span>{productDetail.condition}</span>
                                <br />
                                <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Berat : </span>{productDetail.heavy}</span>
                                <br />
                                <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Kategori : </span>{productDetail.ctg}</span>
                                <br />
                                <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Etalase : </span>{productDetail.storefront}</span>
                                <p className="fw-bold fs-6 text-capitalize mt-3">Deskripsi : <span className="fw-normal fs-6" style={{textAlign: "end"}}>{productDetail.desc}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-5">
                        <div class="card-group h-auto">
                            <div class="card bg-info text-center">
                                <div class="card-body">
                                <h5 class="card-title fw-bold fs-3">Subtotal</h5>
                                <p class="card-text fs-3 fw-normal mb-3">Rp. {productDetail.price}</p>
                                    <div className="d-flex mb-3">
                                        <button className="btn btn-primary px-3" onClick={this.handleMinus} >-</button>
                                        <input type="text" aria-label="First name" value={this.state.quantity} className="form-control text-center"/>
                                        <button className="btn btn-primary px-3" onClick={this.handlePlus} >+</button>
                                    </div>
                                        <button className="btn btn-danger w-75 mx-auto" onClick={this.handleCartToStorage}>Add To Card</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-12">
                        <h2 className="fw-bold text-sm-start mt-3 mb-3">Related Products</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 d-flex flex-wrap justify-content-evenly">
                
                    {relatedProducts.map((product )=>{
                        return(
                            <CardRelated product={product} />
                        )
                    })}
                    </div>
                </div>
        </div>

        )
    }
}

const ProductDetailParams = () => {
    const params = useParams();
    const idProduct = params.id;
    return(
        <ProductDetail productId={idProduct} />
    )
}

export default ProductDetailParams;
 