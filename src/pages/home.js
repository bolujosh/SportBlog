import React from "react";
import Post from "./components/post";
import Headline from "./components/headline";

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
            <Headline headline={headline} />
            < hr className="seperator" />
            <Post postData={postData} />
        </div>
    )
}

export default Home;