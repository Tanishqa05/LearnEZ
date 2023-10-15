import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function Profile({ userName, role }) {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/change-password", {
        email,
        currentPassword,
        newPassword,
      });
      console.log(response.data);
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Error changing password:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <MDBContainer
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <MDBRow>
        <h1>Manage Profile</h1>

        <MDBCol size="4">
          <MDBCard alignment="center" style={{ height: "100%" }}>
            <MDBCardBody>
              <img src="Profile.png" alt="" srcset="" />
              <MDBCardTitle className="mt-3 mb-2">
                <b>{userName}</b>
              </MDBCardTitle>
              <MDBCardText>{role}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="8">
          <MDBCard alignment="center" className="mx-3 px-5">
            <MDBCardBody>
              <h1 className="my-3">Change Password</h1>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="form1Example1"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="form1Example2"
                  label="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="form1Example3"
                  label="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />

                <MDBBtn
                  type="submit"
                  block
                  style={{ maxWidth: "200px" }}
                  className="rounded-pill"
                >
                  <b>Change Password</b>
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
