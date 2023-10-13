import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  <div className="container mt-5">
    <div className="row">
      {/* Left Section - Form */}
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="col-md-6">
        <img src="./LoginImg.jpg" alt="Description" className="img-fluid" />
      </div>
    </div>
  </div>;
}

export default LoginForm;
