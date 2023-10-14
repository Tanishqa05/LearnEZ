import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

export default function Profile() {
  return (
    <MDBContainer className="mx-5">
      <MDBRow>
        <h1>Manage Profile</h1>

        <MDBCol size="4">
          <MDBCard alignment="center">
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="8">
          <MDBCard alignment="center">
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
