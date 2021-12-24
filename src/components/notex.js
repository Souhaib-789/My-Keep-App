import React from "react";
import "./notex.css"

function Notex(props) {

    const delnote = () => {
        props.deldata(props.id);
    }

    return (
        <div className="container">
            <div className=" col-sm content-card ">
                <div className="card-big-shadow">
                    <div className=" card  card-just-text" data-background="color" data-color="green" data-radius="none">
                        <div className="content">
                            <h4 className="title txt"><a href="#">{props.title}</a></h4>
                            <p className="description">{props.content} </p>
                            <button type="button" onClick={delnote} className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Notex;