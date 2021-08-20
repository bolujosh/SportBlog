import React from "react";
import $ from "jquery";


let NewPost = () => {

    var option = ["Latest", "Highlights", "Predictions"];
    var fdata = new FormData();

    $(document).ready(() => {
        $("#form").on("submit", (e) => {
            console.log(this.files);
            e.preventDefault();
        })
    })

    function createPost(e) {

        $.ajax({
            url: "/static/php/post",
            method: "POST",
        data: {data:JSON.stringify(fdata)},
            success: (data) => {
                console.log(data);
            },
            error: (error) => {
                console.log(error)
            }
        })
    e.preventDefault();
    }

    return (
        <div className="new-post col-lg-6 col-md-6 col-sm-6 my-3 mx-3">
            <div className="new-post-body d-flex">
                <div>New Post</div>
                <form className="new-post-form" id="form">
                    <div className="col-md-12 col-sm-12 my-2 mx-2">
                        <label htmlFor="category" className="form-label col-form-label-sm col-form-label-md">Category</label>
                        <select className="form-control form-select form-select-sm" name="category" >
                                <option selected className="option" defaultValue="">--category--</option>
                                {
                                    option.map((data) => {
                                        return (
                                            <option className="option" defaultValue={data} >{data}</option>
                                        )
                                    })
                                }
                        </select>
                    </div>
                    <div className="col-md-12 col-sm-12 my-2 mx-2">
                        <label htmlFor="title" className="form-label col-form-label-sm col-form-label-md">Title</label>
                        <input type="text" name="title" className="new-post-title form-control form-control-sm form-control-md" />
                    </div>
                    <div className="col-md-12 col-sm-12 my-2 mx-2">
                        <label htmlFor="cover" className="form-label col-form-label-sm col-form-label-md">Post Cover</label>
                        <input type="file" name="cover" className="new-post-file form-control form-control-sm form-control-md" />
                    </div>
                    <div className="col-md-12 col-sm-12 my-2 mx-2">
                        <label htmlFor="subject" className="form-label col-form-label-sm col-form-label-md">Subject</label>
                        <textarea className="form-control form-control-sm form-control-md" name="subject" ></textarea>
                    </div>
                    <div className="col-md-12 col-sm-12 my-2 mx-2">
                        <label htmlFor="addition" className="form-label col-form-label-sm col-form-label-md">More media</label>
                        <input type="file" multiple name="addition" className="new-post-addition form-control form-control-sm form-control-md" />
                    </div>
                    <div className="col-md-12 col-sm-12 my-2 mx-2">
                        <input type="submit" className="btn btn-outline-dark" />
                    </div>
                </form>
            </div>
        </div>
    )
}


export default NewPost;