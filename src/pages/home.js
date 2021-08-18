import React, { useEffect,useState } from "react";
import Post from "../components/post";
import Headline from "../components/headline";
import $ from 'jquery';

let Home = () => {
    let [state, setState] = useState();
    useEffect(() => {
        $.ajax({
            url: '/static/php/post',
            type: 'GET',
            success: (data) => {
                setState(JSON.parse(data));
            },
            error: (error) => {
                console.log(error)
            }
        }, [])
    })

    return (
        <div className="home container-fluid d-flex">
            <Headline headline={state} />
            < hr className="seperator" />
            <Post postData={state} />
        </div>
    )
}

export default Home;