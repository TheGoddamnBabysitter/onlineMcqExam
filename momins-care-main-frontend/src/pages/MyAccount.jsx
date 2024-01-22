import React from "react";
import studentData from "../data/studentData.json";
function MyAccount() {
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
    // Add other essential info properties here
  } = studentData;

  return (
    <div>
      <h1>My Account</h1>
      <div>
        <img src={profilePic} alt="Profile Pic" />
        <h2>{name}</h2>
        <p>Role: {role}</p>
        <p>ID: {id}</p>
        <p>Username: {username}</p>
        <p>Institute Name: {instituteName}</p>
        <p>Year: {year}</p>
        <p>Batch No: {batchNo}</p>
        <p>Mobile Number: {mobileNumber}</p>
        <p>Address: {address}</p>
        {/* Add other essential info here */}
      </div>
    </div>
  );
}

export default MyAccount;
