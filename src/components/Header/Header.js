
import React from 'react';
import { withRouter } from "react-router-dom";

function Header(props) {
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h1">Beyond Notes!</span>
            </div>
        </nav>
    )
}
export default withRouter(Header);