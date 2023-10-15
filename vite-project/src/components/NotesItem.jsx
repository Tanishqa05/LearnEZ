import React from "react";
import {
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";

function NotesItem() {
  return (
    <>
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
    </>
  );
}

export default NotesItem;
