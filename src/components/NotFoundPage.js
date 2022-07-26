import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return(
        <div className="jumbotron">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>
                <Link to="/" className="btn btn-primary"> Back to home </Link>
            </p>
        </div>
    );
}

export default NotFoundPage;