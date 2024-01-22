import React, { useEffect, useState } from "react";
import Physics from "./components/subjects/Physics";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Front from "./components/Front";
import Chem from "./components/subjects/Chem";
import Math from "./components/subjects/Math";
import Login from "./pages/Login";
import { auth } from "./firebaseConfig";
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://admin-backend-65hw.onrender.com/")
            .then((response) => {
                if (response.ok) {
                    return response;
                } else {
                    throw new Error("Network response was not ok");
                }
            })
            .catch((error) => {
                console.log(error);
            });

        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <ToastContainer />
            <Router>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    {currentUser ? (
                        <>
                            <Route path="/" element={<Front />} />
                            <Route path="/phy" element={<Physics />} />
                            <Route path="/chem" element={<Chem />} />
                            <Route path="/math" element={<Math />} />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Login />} />
                        </>
                    )}
                </Routes>
            </Router>
        </>
    );
};

export default App;
