import React from "react";
import swal from 'sweetalert';
import { useNavigate } from "react-router";
// import { Check } from "react-bootstrap-icons";
class Register extends React.Component {
    state = {
        title: 'login'
    }
    componentDidMount(){
        document.title = this.state.title
    }
    handleRegister(e){
        e.preventDefault();
        let myFrom = document.getElementById('myform');
        const nama = (e.target[0].value);
        const email = (e.target[1].value);
        const password = (e.target[2].value);
        let checked = false;
        let inputChecked = document.querySelector('.check');
        if(!nama){
            swal("Soory","Waib isi nama dengan benar", "warning")
        }else if(!email){
            swal("Soory","Wajib isi Email dengan Benar", "warning")
        }else if(!password){
            swal("Soory","Wajib isi Password", "warning")
        }else if(password.length <= 5){
            swal("Soory", "Password yang di input minimal 6 Karakter", "warning")
        }else if(inputChecked.checked){
                checked = true
                const user = {
                    nama,
                    email,
                    password,
                    alamat : "",
                    telepon : "",
                    cart :[]
                }
                console.log(user);
                //jika users sudah ada didalam localstorage sepertiusers
                let users = JSON.parse(localStorage.getItem('users'));
                console.log(user);
                // users.forEach(user => {
                //     if(user.email === user){
                //         alert("daa Sama")
                //     }

                // });
                if(users === null){ //jika user dari local storage kosong
                    //maka kita set item yang isinya array kosong yang ngambil dari variabel userArray
                    let userArray =[];
                    //akan menmapilkan array []
                    localStorage.setItem('users', JSON.stringify(userArray))
                    localStorage.setItem('userName', user.nama);
                    //setiap data yang user input data lalu masukan kedalam varibel users dan kita ambil data yang ada di key user yang ada di local storage, data yang di inputkan user email dan password sudah ada belum d locaal storgae, jika sudah ada ga perlu di tambahkan, jika belum ada di local storage maka tambhakan.
                    let userLocalStorage = JSON.parse(localStorage.getItem('users'));
                    //maka akan kita akan push object nama, email,dan juga password di setiap user
                    userLocalStorage.push(user);
                    //lalu kita simpan kedalam local storage
                    localStorage.setItem('users', JSON.stringify(userLocalStorage));
                    swal("Hore, Data Berhasil disimpan", "You clicked the button!", "success");
                    myFrom.reset();
                    (e.target[0].focus());
                }
                else{
                    //ketika kita sudah berhasil menginputkan data yang dibutuhkan saat register begitu menampilkan switchalert akan berpindah halaman Login
                    localStorage.setItem('userName', user.nama);
                    this.props.navigate('/login')
                    //jika users seperti nama,email dan juga password yang sudah ada d localstorage pada saat pertama kali buka webste,maka tambhakan nama,email dan juga password baru.
                    users.push(user);
                    //di dalam key users terdapat email, password, dan juga email yang di simpan ke dalam localstorage lalu di ubah dalam bentuk strings
                    localStorage.setItem('users', JSON.stringify(users))
                    swal('Hore, Data Berhasil di simpan', "You clicked the button!", "success");
                    myFrom.reset();
                    (e.target[0].focus());
            
                }
            }else{
            swal("Opps","Wajib di ceklis","warning")
        }
        return checked;
    }
    // validasiSelection(e){
    //     e.preventDefault();
    //     let checked = false;
    //     let inputchecked = document.getElementsByName("sel[]");
    //     for(let i =0; i < inputchecked.length; i++){
    //         if(inputchecked[i].checked){
    //             checked = true;
    //         }
    //     }
    //     if(!checked){
    //         alert("Wajib di isi dulu")
    //     }
    //     return checked;
    // }
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3 mt-5">
                    <h1 className="text-center mt-5 text-uppercase fs-4 fw-normal">Register</h1>
                    <form className="bg-info p-4 mt-5" id="myform" style={{borderRadius:"20px"}} onSubmit={(e)=> {this.handleRegister(e); e.preventDefault()}}>
                    <div className="mb-3">
                            <label for="nama" className="form-label">Nama Lengkap</label>
                            <input type="text" className="form-control" id="nama" name="sel[]"/>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="sel[]"/>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="sel[]"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input check" id="exampleCheck1" name="sel[]"/>
                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary d-block mx-auto">Register</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
function RegisterNavigation(){
    let navigate = useNavigate();
    return <Register navigate={navigate}/>
}
export default RegisterNavigation;