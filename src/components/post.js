import React from "react";
import PostList from "./post-list"

let Post = (props) => {
    return (
        <div className="post d-flex">
                <div className="post-body d-flex col-lg-6">
                {props.postData && props.postData.map(
                    (data) => {
                        return (
                            <PostList data={data} />
                        )
                    }
                )}
               </div>
            </div>
    )
}

export default Post;