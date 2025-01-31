import React from "react";
import Navbar from "../components/Navbar";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function Home() {
  return (
    <>
      <Navbar />

      <MDBContainer className="d-flex flex-column justify-content-start align-item-center text-center">
        <h1 className=" mt-5">Welcome to LearnEZ</h1>
        <div className=" my-3">
          <img src="OnlyLogo.png" alt="" srcset="" />
        </div>
        <h2>Let's Crack it!</h2>
        <MDBBtn
          size="lg"
          className="mx-auto my-3 rounded-pill"
          style={{ maxWidth: "200px", background: "#78E834", color: "black" }}
        >
          <b>Start Now</b>
        </MDBBtn>
      </MDBContainer>
    </>
  );
}

export default Home;
