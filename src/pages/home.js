import React, { useEffect } from "react";
import Post from "../components/post";
import Headline from "../components/headline";
import $ from 'jquery';

let Home = () => {
    var postData;
    useEffect(() => {
        $.ajax({
            url: 'static/php/post/',
            type: 'GET',
            success: (data) => {
                postData = JSON.parse(data);
                console.log(postData)
            }
        })
    })
    var headline;
    return (
        <div className="home container-fluid d-flex">
            <Headline headline={postData} />
            < hr className="seperator" />
            <Post postData={postData} />
        </div>
    )
}

export default Home;