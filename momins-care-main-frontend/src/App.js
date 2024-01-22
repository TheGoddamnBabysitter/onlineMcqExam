import React, { useEffect, useState } from "react";
import "./styles/globals.css";
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Sample from "./components/singleExm/Sample";
import SubjectBoard from "./components/SubjectBoard/SubjectBoard";
// import Subjects from "./components/SubjectBoard/Subjects";
import Home from "./pages/Home";
import Package from "./pages/Package";
import Login from "./pages/Login";
import { auth } from "./api/firebase";
import Dashboard from "./pages/Dashboard";
// import Subjects from "./components/SubjectBoard/Subjects";
import NotFound from "./pages/NotFound";
import RegularExamEng from "./pages/RegularExamEng";
import QuizPage from "./pages/QuizPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import PastExamPage from "./pages/PastExamPage";
import ProfilePage from "./pages/ProfilePage";
import ComingSoonPage from "./pages/ComingSoonPage";
import Register from "./pages/Register";
import QuizSolutionPage from "./pages/QuizSolutionPage";
import Loading from "./components/loading";

const App = (props) => {
  let paper = localStorage.getItem("paper");
  let chapter = localStorage.getItem("chapter");
  // let version = localStorage.getItem("version");
  // let dificulty = localStorage.getItem("dificulty");
  // let quantity = localStorage.getItem("quantity");

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (<Loading/>);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    { path: "/dashboard", element: <Dashboard /> },
    // {
    //   path: "/subjects",
    //   element: <Subjects />,
    // },
    // {
    //   path: "/:subject",
    //   element: <SubjectBoard />,
    // },
    // {
    //   path: "/:paper/:chapter/:version/:dificulty/:quantity",
    //   element: <Sample />,
    //   loader: () => {
    //     return fetch(
    //       `https://momins-care-backend.onrender.com/${paper}/${chapter}`
    //     );
    //   },
    // },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/courses/regular-exam-eng",
      element: <RegularExamEng />,
    },
    {
      path: "/courses/regular-exam-eng/exam/:questionSetId",
      element: <QuizPage />,
    },
    {
      path: "/courses/regular-exam-eng/exam/:questionSetId/solution",
      element: <QuizSolutionPage />,
    },
    {
      path: "/leaderboard",
      element: <LeaderboardPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/past-exams",
      element: <PastExamPage />,
    },
    // {
    //     path: "/past-exams/:questionSetId",
    //     element: <PastExamSolutionPage />,
    // },
    {
      path: "/coming-soon",
      element: <ComingSoonPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/courses",
      element: <Navigate to={"/dashboard"} />,
    },
  ]);

  return (
    <div>
      {currentUser ? (
        <>
          <RouterProvider router={router}></RouterProvider>
        </>
      ) : (
        <>
          <RouterProvider
            router={createBrowserRouter([
              {
                path: "/",
                element: <Navigate to="/login" />,
              },
              {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/home",
                element: <Home />,
              },
              {
                path: "/package",
                element: <Package />,
              },
              {
                path: "*",
                element: <NotFound />,
              },
              {
                path: "/dashboard",
                element: <Navigate to="/" />,
              },
              {
                path: "/register",
                element: <Register />,
              },
            ])}
          ></RouterProvider>
        </>
      )}
    </div>
  );
};

export default App;
