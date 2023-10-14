import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter,
} from "mdb-react-ui-kit";

export default function CourseCard() {
  return (
    <MDBCard className="my-2">
      <MDBCardImage
        src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
        position="top"
        alt="..."
        style={{ maxHeight: "100px" }}
      />
      <MDBCardBody className="pb-2 ps-3">
        <MDBCardTitle>Data Structure</MDBCardTitle>
        <MDBCardText>Shivani Arya</MDBCardText>
        <MDBBtn href="#">Join</MDBBtn>
        <MDBCardFooter className="text-muted border-0 p-0">
          2 days ago
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
}
