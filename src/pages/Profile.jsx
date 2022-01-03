        import React from "react";
        import swal from 'sweetalert';

        // import { Check } from "react-bootstrap-icons";
        class Profile extends React.Component {
            state = {
                title: 'Profile',
                userLogin : {}
            }

            componentDidMount(){
                document.title = this.state.title

                let users = JSON.parse(localStorage.getItem('users'))
                let emailLogin = localStorage.getItem('userEmail')
                let  userLoginDone = {};

                users.forEach(user => {
                    if(user.email === emailLogin){
                        userLoginDone = user;
                    }
                    
                    console.log(user.email === emailLogin)
                });
                this.setState({
                    userLogin : userLoginDone
                })
                console.log(userLoginDone)
                let myForm = document.getElementById('myform');
                console.log(myForm);
                let nama = myForm[0];
                console.log(nama)
                let email = myForm[1];
                let password = myForm[2]
                let telepon = myForm[3];
                let alamat = myForm[4]
                nama.value =  userLoginDone.nama
                email.value =  userLoginDone.email
                password.value =  userLoginDone.password
                telepon.value =  userLoginDone.telepon
                alamat.value =  userLoginDone.alamat
            }
            updateFrom(e){
                e.preventDefault();
                let nama = (e.target[0].value);
                console.log(nama)
                let email = (e.target[1].value);
                console.log(email)
                let password = (e.target[2].value);
                console.log(password)
                let telepon = (e.target[3].value);
                console.log(telepon)
                let alamat = (e.target[4].value);
                console.log(alamat)
                if(!nama){
                    swal("Sorry","Wajib isi Nama","warning")
                }else if(!email){
                    swal("Sorry","Wajib isi Email","warning")
                }else if(!password){
                    swal("Sorry","Wajib isi Password")
                }else if(password.length <=5){
                    swal("Sorry", "Password yang di input minimal 6 Karakter","warning")
                }else if(!telepon){
                    swal("Sorry","Wajib isi Telepon","warning")
                }else if(!alamat){
                    swal('Soory','Wajib isi alamat','warning')
                }else{
                    const user = {
                        nama,
                        email,
                        password,
                        alamat,
                        telepon,
                        cart :[]
                    }
                    let users = JSON.parse(localStorage.getItem('users'));
                    const emailLogin = localStorage.getItem('userEmail');
                    let userWithoutUserLogin = users.filter((user) => user.email !== emailLogin)
                    userWithoutUserLogin.push(user)
                    localStorage.setItem('userName', user.nama);
                    localStorage.setItem('users', JSON.stringify(userWithoutUserLogin))
                    swal("Hore","Berhasil Update","success")
                }
                
                
            }
            render(){
                const userLogin = this.state.userLogin;
                console.log(userLogin)
                return(
                    <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3">
                            <h1 className="text-center mt-5 text-uppercase fs-4 fw-normal">Profile</h1>
                            <form className="bg-info p-4 mt-5" id="myform" onSubmit={(e)=> {this.updateFrom(e); e.preventDefault()}}>
                            <div className="mb-3">
                                    <label htmlFor="nama" className="form-label">Nama Lengkap</label>
                                    <input type="text" className="form-control" id="nama" name="sel[]"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Alamat Email</label>
                                    <input type="email" className="form-control" id="email" name="sel[]" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="sel[]" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tel" className="form-label">Telp :</label>
                                    <input type="telp" className="form-control" id="telp" name="sel[]" placeholder="Masukan No.Telepon"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="alamat" className="form-label">Alamat</label>
                                    <textarea className="form-control" id="alamat" rows="10" placeholder="Your Alamat" name="sel[]"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary d-block mx-auto">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
                )
            }
        }

        export default Profile;