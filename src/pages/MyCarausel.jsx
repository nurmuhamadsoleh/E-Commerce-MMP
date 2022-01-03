// import { Link } from "react-router-dom";
// import { resetState } from "sweetalert/typings/modules/state";
import { carausels } from "../data/carausels";


const MyCarausel = () =>{
    return (
        <div className="col-sm-12 mt-5">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner img-thumbnail">
                {
                    carausels.map((carousel, index) =>{
                        return (index === 0) ? CarouselItem(carousel, 'active') : CarouselItem(carousel, '')
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
}

const CarouselItem = (carausel, isActive) => {
    return(
        <div className={`carousel-item ${isActive}`}>
            <img src={carausel.img} className="d-block w-100 rounded-3" height="550px" alt="image1"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>{carausel.head}</h5>
                    <p>{carausel.description}</p>
                </div>
        </div>
    )
}
export default MyCarausel;