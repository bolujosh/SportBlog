import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./components/post";

let Home = () => {
    var postData;
    postData = [{
        id:"1",
        category:"default",
        title: "hello world",
        img:"./logo.svg"
    }, {
        id:"2",
        category:"default",
        title: "Hello world",
        img:"./logo.svg"
        }, {
            id:"3",
            category:"default",
        title: "Hello World",
        img:"./logo.svg"
        }, {
            id:"4",
            category:"default",
        title: "hello world",
            img:"./logo.svg"
        }, {
            id:"5",
            category:"default",
        title: "hello world",
            img:"./logo.svg"
        }, {
            id:"6",
            category:"default",
        title: "hello world",
            img:"./logo.svg"
        }, {
            id:"7",
            category:"default",
        title: "hello world",
            img:"./logo.svg"
        }, {
            id:"8",
            category:"default",
        title: "hello world",
            img:"./logo.svg"
        }];
    
    var headline = [{
        id:"8",
        title: "hello world",
            img:"./logo.svg"
    }, {
        id:"1",
    title: "hello world",
        img:"./logo.svg"
        }, {
            id:"1",
        title: "hello world",
            img:"./logo.svg"
        }, {
            id:"1",
        title: "hello world",
            img:"./logo.svg"
}]
    return (
        <div className="home container-fluid d-flex">
            <div className="headline d-flex mt-6" >
                <div className="headline-body d-flex col-md-4 my-2 mx-2" >
                    {
                        headline && headline.map(
                            (data,index) => {
                                return (
                                    <Link to={`post/${data.id}`}>
                                        <div className="headline-items my-2 mx-2" >
                                        <div className="headline-img">
                                            <img src={`./logo.svg`} className="img-hl" alt="hl-img" />
                                        </div>
                                        <div className="headline-title">
                                            {data.title}
                                        </div>
                                    </div>
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
            </div>
            < hr className="seperator" />
            <Post postData={postData} />
        </div>
    )
}

export default Home;