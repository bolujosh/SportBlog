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
        <div className="form col-lg-6 col-md-6 col-sm-6 my-3 mx-3">
            <div className="form-body d-flex">
                <div>Login</div>
                <form onSubmit={onSubmit}>
                    <div className="col-md-12 col-sm-12 my-2 mx-2" >
                    <label htmlFor="user_name" className="form-label col-form-label-sm col-form-label-md">Username</label>
                    <input type="text" name="user_name" className="form-control form-control-sm form-control-md" />
                    <div className="err-u"></div>
                    </div>
                    <div className="col-md-12 col-sm-12 my-2 mx-2" >
                    <label htmlFor="user_pwd" className="form-label col-form-label-sm col-form-label-md">Password</label>
                    <input type="password" name="user_pwd" className="form-control form-control-sm form-control-md" />
                    <div className="err-p"></div>
                    </div>
                    <div className="col-md-12 col-sm-12 my-2 mx-2" >
                    <input type="submit" className="btn btn-outline-dark" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;