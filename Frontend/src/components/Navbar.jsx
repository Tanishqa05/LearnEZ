import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="light"
      className="mt-4 mx-4 px-5 rounded-pill"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src="Logo.png" alt="LearnEZ" srcset="" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} className="justify-content-center">
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-center">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="#"
                className="mx-2"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-primary">
                  Courses
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>All Courses</MDBDropdownItem>
                  <MDBDropdownItem link>Create Course</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="#"
                className="mx-2"
              >
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCollapse>
        <img
          className="rounded-circle shadow-4 mx-3"
          src="https://mdbootstrap.com/img/Photos/Avatars/man2.jpg"
          alt="Avatar"
          style={{ width: "50px", height: "50px" }}
        />
      </MDBContainer>
    </MDBNavbar>
  );
}
