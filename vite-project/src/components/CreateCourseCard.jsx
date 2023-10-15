import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBInput,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function CreateCourseCard() {
  const [semester, setSemester] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const handleDropdownClick = (selectedSemester) => {
    setSemester(selectedSemester);
  };

  const handleSubmit = async () => {
    const courseData = {
      semester: semester,
      subjectName: subjectName,
      courseTitle: courseTitle,
    };

    try {
      console.log(semester, subjectName, courseTitle);
      const response = await axios.post("YOUR_BACKEND_ENDPOINT", courseData);
      console.log(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <MDBContainer
        className="d-flex justify-content-start align-item-center flex-column text-center mt-5"
        style={{ maxWidth: "50vw", height: "100vh" }}
      >
        <h1 className="my-3">Create Course</h1>
        <MDBDropdown>
          <MDBDropdownToggle className="mb-3" style={{ width: "100%" }}>
            {semester || "Semester"}
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem onClick={() => handleDropdownClick("1st Sem")}>
              1st Sem
            </MDBDropdownItem>
            <MDBDropdownItem onClick={() => handleDropdownClick("2nd Sem")}>
              2nd Sem
            </MDBDropdownItem>
            <MDBDropdownItem onClick={() => handleDropdownClick("3rd Sem")}>
              3rd Sem
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBInput
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          label="Enter Subject Name"
          id="subjectName"
          type="text"
        />
        <div className="my-2">
          <MDBInput
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            label="Enter Course Title"
            id="courseTitle"
            type="text"
          />
        </div>
        <MDBBtn>Upload Material</MDBBtn>
        <MDBBtn
          onClick={handleSubmit}
          className="rounded-pill mx-auto"
          style={{
            maxWidth: "30%",
            marginTop: "20px",
            background: "#78E834",
            color: "black",
          }}
        >
          <b>Create Course</b>
        </MDBBtn>
      </MDBContainer>
    </>
  );
}
