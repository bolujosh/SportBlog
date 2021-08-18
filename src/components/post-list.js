import React from "react";
import { Link } from "react-router-dom";

let PostList = ({data}) => {
    return (
        <Link to={`post/read/${data.id}`}>
            <div className="post-items mx-md-2 my-md-2 d-flex flex-md-grow-1">
                                <div className="post-img my-2 mx-2">
                                    <img src={`static/${data.post_img_path}`} height="80" width="80" alt="logo" />
                                    <div className="post-category my-2 mx-2 col-sm-4 d-flex">
                                        <p className="post-text">
                                        {data.category}
                                        </p>
                                    </div>
                                </div>
                                <div className="post-title my-2 mx-2">
                                    {data.title}
                                </div>
                                <div className="post-time"></div>
                            </div>
        </Link>
    )
}

export default PostList;