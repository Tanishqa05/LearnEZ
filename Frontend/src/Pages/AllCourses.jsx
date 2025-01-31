import React from "react";
import SignUp from "../components/SignUp";
import Navbar from "../components/Navbar";
import Sorter from "../components/Sorter";
import { MDBContainer, MDBRow, MDBCol, MDBRadio } from "mdb-react-ui-kit";
import "./AllCourses.css";
import CourseCard from "../components/CourseCard";

function AllCourses() {
  return (
    <>
      <Navbar />

      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol md="3" className="ms-3">
            <Sorter />
          </MDBCol>
          <MDBCol md="8">
            <h1>All Courses</h1>
            <div class="container">
              <div class="row">
                <div class="col-md">
                  <CourseCard />
                </div>
                <div class="col-md">
                  <CourseCard />
                </div>
                <div class="col-md">
                  <CourseCard />
                </div>
              </div>
              <div class="row">
                <div class="col-md">
                  <CourseCard />
                </div>
                <div class="col-md">
                  <CourseCard />
                </div>
                <div class="col-md">
                  <CourseCard />
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default AllCourses;
