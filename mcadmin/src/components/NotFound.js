import React from "react";
import "../styles/NotFound.css";

function NotFound() {
    return (
        <div className="not-found-container">
            {/* <img src="../assets/404.svg" alt="Error" /> */}
            <h1 className="not-found-title">404 - Not Found</h1>
            <p className="not-found-text">
                The page you're looking for does not exist.
            </p>
        </div>
    );
}

export default NotFound;
