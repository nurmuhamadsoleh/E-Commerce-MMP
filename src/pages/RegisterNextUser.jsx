const Register = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <h1 className="text-center mt-5 text-uppercase fs-4 fw-normal">Register</h1>
                <form className="bg-info p-4 mt-2" style={{borderRadius:"20px"}}>
                    <div className="row">
                        <div className="mb-2 col-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <label for="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <label for="province" className="form-label">Provinsi</label>
                            <select className="form-select form-select-sm" id="province">
                                <option selected>Province</option>
                                <option value="1">DKI Jakarta</option>
                                <option value="2">Jawa Barat</option>
                                <option value="3">Jawa Tengah</option>
                                <option value="3">Yogyakarta</option>
                                <option value="3">Jawa Timur</option>
                                <option value="3">Banten</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary d-block mx-auto mt-2">Next</button>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Register;