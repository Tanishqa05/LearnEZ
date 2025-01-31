import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  //   const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Handle input c hange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can now use formData for your registration logic
    console.log("Form Data Submitted:", formData);
    // navigate("/start-screen/login");
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <MDBContainer className="my-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">GetStarted</h2>
        <MDBInput
          className="mb-4"
          type="email"
          id="form1Example1"
          label="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <MDBInput
          className="mb-4"
          type="text"
          id="form1Example2"
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <MDBInput
          className="mb-4"
          type="tel"
          id="form1Example3"
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form1Example4"
          label="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form1Example5"
          label="Re-enter Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <MDBBtn type="submit" block>
          Sign Up
        </MDBBtn>
        {/* 
        <label>
          Already have an Account?
          <Link to={"/start-screen/login"}>Login!</Link>
        </label> */}
      </form>
    </MDBContainer>
  );
}
