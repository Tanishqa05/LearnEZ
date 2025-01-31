import React from "react";
import Navbar from "../components/Navbar";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Sorter from "../components/Sorter";
import ResourceViewer from "../components/ResourceViewer";

function ResourcePage() {
  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <Sorter />
          </MDBCol>
          <MDBCol md="8">
            <ResourceViewer />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default ResourcePage;
