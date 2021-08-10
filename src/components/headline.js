import React from "react";
import HlList from "./hl-list";


let Headline = (props) => {
    return (
        <div className="headline d-flex mt-6" >
        <div className="headline-body d-flex col-md-4 my-2 mx-2" >
            {
                props.headline && props.headline.map(
                    (data) => {
                        return (
                            <HlList data={data} />
                        )
                    }
                )
            }
        </div>
    </div>
    )
}

export default Headline;