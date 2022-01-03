// import { render } from "@testing-library/react";
import React from "react";
import swal from "sweetalert";
import {useNavigate} from "react-router";
class Login extends React.Component {
    state = {
        title : 'Login'
    }
    componentDidMount(){
        document.title = this.state.title
    }
    handleLogin(e){
        e.preventDefault();
        // console.log(e);
        const email = (e.target[0].value);
        const password = (e.target[1].value);
        //jika yang di inputkan user bukan email baik itu angka/kurang @ atau berupa text doang maka akan menampilkan alert
        if(!email){
            swal("Soory", "Wajib isi emailnya dengan lengkap dan benar", "warning");
            //jadi password yang di inputkan tidak boleh kosong, jika kosong akan menampilkan alert
        }else if(!password){
            swal("Soory", "Passord Tidak boleh kosong", "warning")
            //jika password yang d inputkan user kurang dari 6 karakter akan menampilkan alert
        }else if(password.length <= 5){
            swal("Soory", "Password Wajib di isi minimal 5 Karakter","warning")
        }else{
            const users = JSON.parse(localStorage.getItem('users'))
        users.forEach(user => {
            //akan melalukan pengecekan email yang di inputkan user  sama dengan email yang ada di localstorage yang sudah di daftrakan sebelumnya maka akan menampilkan alert success
            if(email === user.email){
                //akan menlakukan pengecekan password yang d inputkan user tidak samma dengan password yang ada di localstorage yang sudah d daftarkan sebelumnya, maka akan menampilkan alert error
                if(password !== user.password){
                    swal("Maaf" , "Password Anda Salah", "error");
                //selain itu jika password yang di inputkan user sama dengna pasword yang ada di localstorage yang sudah pernah di daftarkan sebelumnya maka akan menampilkan alert success
                }else{
                    //kita simpan email yang digunakan untuk login kedalam localstorage dengan key 'userLogin' yang akan diguakan pada Navbar untuk menghilnagkan button Login dan Register
                    localStorage.setItem('userEmail', user.email)
                    //ketika password sama dengan password yang ada di local storage maka akan menampilkan halaman homePage
                    this.props.navigate('/')
                    swal("Hore", "Berhasil Login", "success");
                }
                //selain itu jika email yang di inputkan user tidak sama dengan emial yang ada di local storage, yang sudah d daftarkan sebelumnya, maka akan menampilkan alert error
            }else if(email !== user.email && password !== user.password){
                this.props.navigate('/login')
                swal("Maaf","Anda Harus Daftar Dulu","warning");
            }else{
                e.target[0].value="";
                e.target[1].value="";
                swal("Maaf", "Eamil Anda Salah","error");
                e.target[0].focus();
            }
        });
        }
    }
    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <h1 className="text-center mt-5 text-uppercase fs-4 fw-normal">Login</h1>
                    <form className="bg-info p-4 mt-5" style={{borderRadius:"20px"}} onSubmit={(e)=> {this.handleLogin(e); e.preventDefault()}}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password"/>
                        </div>
                        <button type="submit" className="btn btn-primary d-block mx-auto">Login</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
function LoginNavigation(){
    let navigate = useNavigate();
    return <Login navigate={navigate}/>
}
export default LoginNavigation;