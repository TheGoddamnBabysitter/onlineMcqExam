import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
import { BsEye, BsEyeSlash } from "react-icons/bs";

function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = () => {
        setLoading(true);
        signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
        )
            .then((userCredential) => {
                // const user = userCredential.user;
                setCredentials({ email: "", password: "" });
                navigate("/");
            })
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    toast.error("Wrong password entered. Please try again.");
                } else {
                    console.error("Firebase Authentication Error:", error);
                }
                setLoading(false);
            });
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                handleSubmit();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    });

    return (
        <React.Fragment>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="login-page-container">
                    <div className="login-container">
                        <h2>Login Here</h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: "100%",
                            }}
                        >
                            <input
                                type="email"
                                name="email"
                                value={credentials.email}
                                placeholder="Email"
                                onChange={(e) => {
                                    setCredentials((prevState) => ({
                                        ...prevState,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",

                                minWidth: "100%",
                            }}
                        >
                            <input
                                type={`${
                                    isPasswordVisible ? "text" : "password"
                                }`}
                                name="password"
                                value={credentials.password}
                                placeholder="password"
                                onChange={(e) => {
                                    setCredentials((prevState) => ({
                                        ...prevState,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                            />
                            <span
                                className="password-toggle"
                                style={{
                                    position: "absolute",
                                    right: "0",
                                    marginRight: "1rem",
                                    fontSize: "1.125rem",
                                    lineHeight: "1.75rem",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                onClick={() =>
                                    setIsPasswordVisible(!isPasswordVisible)
                                }
                            >
                                {isPasswordVisible ? <BsEyeSlash /> : <BsEye />}
                            </span>
                        </div>
                        <button onClick={handleSubmit}>Log in</button>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default Login;
