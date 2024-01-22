import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Front.css";
import { auth } from "../firebaseConfig";

const Front = () => {
    let navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="front-container">
                <p className="sub-h">Subject Names</p>
                <div
                    className="front-links-container"
                    style={{ cursor: "pointer" }}
                >
                    <Link to="/phy" className="front-link">
                        <h2>Physics</h2>
                    </Link>
                    <Link to="/chem" className="front-link">
                        <h2>Chemistry</h2>
                    </Link>
                    <Link to="/math" className="front-link">
                        <h2>Math</h2>
                    </Link>
                    <div
                        className="front-link"
                        onClick={() => {
                            auth.signOut();
                            navigate("/");
                        }}
                    >
                        <h2>Log Out</h2>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Front;
