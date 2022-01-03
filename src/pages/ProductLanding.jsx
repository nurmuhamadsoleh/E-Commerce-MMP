import MyCart from "./MyCart";
import {products} from "../data/products";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import React from "react";


class ProductLanding extends React.Component {
    state = {
        title : "Product Landing",
        products :[],
    }
    componentDidMount = () =>{
        document.title = this.state.title
        this.setState({
            products : products
        })
        
    }
    handleSearch = () => {
        // console.log(products)
        let search = document.querySelector('.input').value;
        console.log(search)
        let findproduct = products.find(product => product.title === search)
        let dataproducts = []
        dataproducts.push(findproduct);
        
        console.log(findproduct)
        this.setState({
            products :  dataproducts
        })
        
    }
    handleFilter = (e) => {
        const keyword = e.target.value
        console.log(keyword)
        const filterProduct = products.filter(product => product.ctg === keyword )
        this.setState({
            products : filterProduct
        })
    }
    render(){
        var dataProduct = this.state.products
        return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: "80px"}}>
                    <form className="d-flex justify-content-center">
                        <input className="form-control rounded-pill input" type="search" placeholder="Search" aria-label="Search"/>
                        <span id="iconeye" className="icon" style={{position:"relative", zIndex:"1", left:"-43px", top:"4", cursor:"pointer"}}>
                            <FontAwesomeIcon icon={faSearch} style={{fontSize: "32px"}} onClick={this.handleSearch}/>
                        </span>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 bg-info rounded-3 h-75 mt-3 p-3">
                    <h4 className="mt-3">Category</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input className="form-check-input me-1" name="category" onChange={(e) => this.handleFilter(e)} type="radio" value="Harddisk"/>
                            Harddisk
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" name="category" onChange={(e) => this.handleFilter(e)} type="radio" value="SSD"/>
                            SSD
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" name="category" onChange={(e) => this.handleFilter(e)} type="radio" value="Mouse"/>
                            Mouse
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" name="category" onChange={(e) => this.handleFilter(e)} type="radio" value="RAM"/>
                            RAM
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" name="category" onChange={(e) => this.handleFilter(e)} type="radio" value="Keyboard"/>
                            Keyboard
                        </li>
                    </ul>
                    {/* <label for="price" className="form-label h4 mt-3">Price Range</label>
                    <input type="range" className="form-range" id="price"></input>
                    <div className="my-3 text-center">
                        <Link to="/" className="btn btn-primary d-inline-block">Submit</Link>
                    </div> */}
                </div>
                <div className="col-sm-8 ms-1 bg-info d-flex flex-wrap rounded-3 mt-3">
                        {dataProduct.map((product)=>{
                            return <MyCart title={product.title} id={product.id} price={product.price} image={product.image} city={product.city} />
                        })}
                        <div className="col-12 mb-3 text-center">
                            <Link to="/allproduct" className="h4 text-decoration-none text-black">Load More</Link>
                        </div>  
                    </div>
                </div>
            </div>
            
        )
    }
}
export default ProductLanding;
