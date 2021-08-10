import React from "react";
import { Link } from "react-router-dom";


let HlList = ({data}) => {
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

export default HlList;