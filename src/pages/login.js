import React from "react";

let Login = () => {

    function onSubmit(e) {
        if (e.target.name ==="user-name") {
            if (e.target.value === "") {
            
            }
        }
        e.preventDefault();
    }

    return (
        <div className="form d-flex container-fluid my-2 mx-2">
            <div className="form-box d-block col-md-2">
                <form className="form-main" onSubmit={onSubmit} method="post">
                    <input type="text" name="user-name" className="form-control my-6 mx-6" placeholder="Username" />
                    <div className="err-u"></div>
                    <input type="password" name="user-pwd" className="form-control my-6 mx-6" placeholder="Password" />
                    <div className="err-p"></div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        </div>
    )
}

export default Login;