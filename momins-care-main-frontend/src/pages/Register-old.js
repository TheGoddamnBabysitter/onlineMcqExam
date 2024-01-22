import React, { useState } from "react";
import "../styles/RegistrationForm.css";
import axios from "axios";
import { toast } from "react-toastify";
import DatePickerComponent from "../components/DatePicker";
import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";
function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerification, setEmailVerification] = useState("");
  const [password, setPassword] = useState("");
  const [verifyOtpInput, setVerifyOtpInput] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailVerified) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Date of Birth:", selectedDate);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log(user);
          return axios
            .post(
              `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION}/register`,
              {
                uid: user.uid,
                name: name,
                email: email,
                dateOfBirth: selectedDate,
              }
            )
            .catch((err) => {
              console.log(err);
            });
        })
        .then((res) => {
          console.log(res.data);
          toast.success("Account created successfully");
          setEmail("");
          setName("");
          setPassword("");
          setSelectedDate(null);
          setVerifyOtpInput(false);
          setEmailVerified(false);
          navigate("/login");
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            toast.success("An account with this email already exists.");
          } else {
            console.error(err);
          }
        });
    } else {
      toast.error("Please verify your email");
    }
  };

  const getOtp = (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (email === "") {
      toast.error("Please enter your email");
      return;
    } else if (!email.match(emailRegex)) {
      toast.error("Please enter a valid email address");
      return;
    } else {
      setVerifyOtpInput(true);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION}/get-otp`,
          {
            email: email,
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.msg);
        });
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION}/verify-otp`,
        {
          email: email,
          clientOTP: emailVerification,
        }
      )
      .then((res) => {
        setEmailVerification("");
        setEmailVerified(true);
        toast.success(res.data.msg);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg);
      });
  };

  return (
    <>
      <div className="registration-form-container">
        <form className="registration-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <DatePickerComponent
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <label htmlFor="emailVerification">Verify Email with OTP:</label>
          <div
            className="form-group email-verification-container"
            style={{ position: "relative", marginBottom: "20px" }}
          >
            {emailVerified ? (
              <>
                <input
                  type="text"
                  placeholder="Email Verified"
                  value={emailVerification}
                  disabled
                />

                <button
                  className="register-button"
                  disabled
                  style={{
                    background: "#07BC0C",
                    marginLeft: "12px",
                  }}
                >
                  Verified
                </button>
              </>
            ) : verifyOtpInput ? (
              <>
                <input
                  type="text"
                  id="emailVerification"
                  name="emailVerification"
                  value={emailVerification}
                  onChange={(e) => setEmailVerification(e.target.value)}
                  placeholder="Enter OTP"
                  required
                />
                <button
                  className="register-button"
                  style={{ marginLeft: "12px" }}
                  onClick={verifyOtp}
                >
                  Verify
                </button>

                <p
                  onClick={getOtp}
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "50px",
                    cursor: "pointer",
                  }}
                >
                  Resend Code
                </p>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={emailVerification}
                  onChange={(e) => setEmailVerification(e.target.value)}
                  disabled
                />
                <button
                  className="register-button"
                  style={{ marginLeft: "12px" }}
                  onClick={getOtp}
                >
                  Get OTP
                </button>
              </>
            )}
          </div>

          <button
            type="submit"
            className="register-button"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
