import React from "react";
import {
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import NotesItem from "./NotesItem";

export default function Notes() {
  return (
    //add a map fucntion here
    <MDBListGroup style={{ minWidth: "22rem" }} light>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Topic 1</p>
            <p className="text-muted mb-0">PDF</p>
          </div>
        </div>
        <MDBBtn size="sm" rounded color="link">
          Download
        </MDBBtn>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="NotesLogo.png"
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Topic 2</p>
            <p className="text-muted mb-0">PPT</p>
          </div>
        </div>
        <MDBBtn size="sm" rounded color="link">
          Download
        </MDBBtn>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Topic 3</p>
            <p className="text-muted mb-0">PDF</p>
          </div>
        </div>
        <MDBBtn size="sm" rounded color="link">
          Download
        </MDBBtn>
      </MDBListGroupItem>
      <NotesItem />
    </MDBListGroup>
  );
}
