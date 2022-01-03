import { Link } from "react-router-dom";
// import { NavLink } from "react-bootstrap";
// import { Tooltip} from 'react-bootstrap';
import { useNavigate } from "react-router";
import image from "../assets/image/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUserAlt } from '@fortawesome/fontawesome-free-solid'
import swal from "sweetalert";

// import { Inbox } from 'react-bootstrap-icons';


const Navbar = () => {
    const userLogin = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    const renderAuthentication = () =>{
        if(userLogin){
            return (
                <div className="d-flex ms-auto">
                    
                    <div className="navbar-nav ml-auto align-items-center">
                            
                            <div className="d-flex">
                                {/* <Link className="nav-link me-1" to="/">
                                    <FontAwesomeIcon icon={faBell} data-toggle="tooltip" title="Notifikasi" className="fs-4 text-black"/>
                                </Link> */}
                                <Link className="nav-link me-1" to="/cart">
                                    <FontAwesomeIcon icon={faCartPlus} className="text-black fs-4"/>   
                                </Link>
                                <Link className="nav-link me-1" to="/profile">
                                    <FontAwesomeIcon icon={faUserAlt} data-toggle="tooltip" title="Profile" className="fs-4 text-black me-2"/><span className="fs-6 text-black fw-normal">Hii, {userName}</span>
                                </Link>
                            </div>   
                            <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-between mt-1">
                                        <Link className="nav-link text-light me-3" to="/allproduct">Product</Link>
                                        <Link onClick={authLogout} className="nav-link text-light" to="/login">Logout</Link>
                                    </div>
                            </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="d-flex me-2 ms-auto">
                    <Link  className="nav-link text-light" to="/login">Login</Link>
                    <Link  className="nav-link text-light" to="/register">Register</Link>
                </div>
            )
        }
    }
    const authLogout = ()=>{
        localStorage.removeItem('userEmail'); //menghapus userEmail yang sebelumnya digunakan ketika melakukan login
        swal('Yee', 'Berhasil Logout', 'success')
        this.props.navigate('/');//kembali ke halaman home
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link className="navbar-brand me-5" to="/"><img src={image} alt="MMP" width="60px" style={{backgroundColor:"white", borderRadius:"30px"}}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar ms-auto">
                        {/* <Link  className="nav-link text-light" to="/allproduct">Product</Link> */}
                    {
                    renderAuthentication()
                    }
                    </div>
                </div>
            </div>
        </nav>
    )
}
function LogoutNavigate(){
    let navigate = useNavigate();
    return <Navbar navigate={navigate}/>
}
export default LogoutNavigate;