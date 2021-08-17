import React from "react";
import $ from 'jquery';

let Login = () => {

    function onSubmit(e) {
        var formData = {
            "user_name": e.target.user_name.value,
            "user_pwd":e.target.user_pwd.value
        }
        console.log(formData)

        $.ajax({
            url: 'static/php/login/',
            type: 'POST',
            data: JSON.stringify(formData),
            success: (data) => {
                console.log(data)
            }
        })
        e.preventDefault();
    }

    return (
        <div className="form d-flex container my-2 mx-2">
            <div className="form-box d-block col-md-2">
                <form className="form-main" onSubmit={onSubmit} method="post">
                    <div className="form-group my-1" >
                    <input type="text" name="user_name" className="form-control my-6 mx-6" placeholder="Username" />
                    <div className="err-u"></div>
                    </div>
                    <div className="form-group my-1" >
                    <input type="password" name="user_pwd" className="form-control my-6 mx-6" placeholder="Password" />
                    <div className="err-p"></div>
                    </div>
                    <div className="form-group" >
                    <input type="submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;