import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import $ from 'jquery';


let ReadPost = () => {

    let [{ title, subject, category,additional_media}, setState] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        $.ajax({
            url: "/static/php/post",
            type: "POST",
            data:   {data:JSON.stringify({"action":"read","id":id})},
            success: (data) => {
                setState(JSON.parse(data))
            },
            error: (error) => {
                console.log(error)
            }
        })
    },[id])

    return (
        <div className="col-md-6 col-sm-6 read-post my-3 mx-3 d-flex">
            <div className="read-post-body d-flex">
                <div className="read-head d-flex">
                    <div className="read-post-title my-2 mx-2 text-dark d-flex col-md-6 col-sm-6">{title}</div>
                    <div className="read-post-category my-5 mx-3 text-dark d-flex col-md-6 col-sm-6">{category}</div>
                </div>
                <div className="read-post-subject my-2 mx-2 text-dark d-flex col-md-6 col-sm-6">{subject}</div>
                <div className="read-post-add-img d-flex col-md-6 col-sm-6">
                    <img src={`/static/${additional_media}`} className="read-post-img" />
                </div>
            </div>
            <aside>ADS</aside>
        </div>
    )
}

export default ReadPost;