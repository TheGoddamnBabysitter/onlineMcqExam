import React from "react";
import studentData from "../data/studentData.json";
import "../styles/dashboard/profilePage.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../api/firebase";
import Navbar from "../components/Navbar";

function ProfilePage() {
  const {
    profilePic,
    name,
    role,
    id,
    username,
    instituteName,
    year,
    batchNo,
    mobileNumber,
    address,
  } = studentData;

  const handleEdit = () => {
    // Add logic for handling edit button click here
  };
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="profile-parent">
        <div className="account-area profile-custom-bg-gray-100">
          <h1 className="profile-text-black profile-text-3xl profile-font-bold profile-mb-4 profile-text-center">
            My Account
          </h1>
          <div className="profile-custom-bg-white profile-rounded-lg profile-custom-shadow-lg profile-p-8">
            <img
              src={profilePic}
              alt="Profile Pic"
              className="profile-w-32 profile-h-32 profile-rounded-full profile-mx-auto profile-mb-4"
            />
            <h2 className="profile-text-2xl profile-font-bold profile-mb-2">{name}</h2>
            <p className="profile-custom-text-gray-600 profile-mb-5">Address: {address}</p>
            <p className="profile-custom-text-gray-600 profile-mb-5">Role: {role}</p>
            <p className="profile-custom-text-gray-600 profile-mb-5">ID: {id}</p>
            <p className="profile-custom-text-gray-600 profile-mb-5">Username: {username}</p>
            <p className="profile-custom-text-gray-600 profile-mb-5">Institute Name: {instituteName}</p>
            <p className="profile-custom-text-gray-600 profile-mb-5">Year: {year}</p>
            <p className="profile-custom-text-gray-600 profile-mb-5">Batch No: {batchNo}</p>
            <p className="profile-custom-text-gray-600 profile-mb-5">Mobile Number: {mobileNumber}</p>
            <div>
              <button onClick={handleEdit} class="profile-myAcc-Edit-btn">
                <i class="profile-animation"></i>Edit<i class="profile-animation"></i>
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
                class="profile-myAcc-btn"
              >
              <i class="profile-animation"></i>Log Out<i class="profile-animation"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;