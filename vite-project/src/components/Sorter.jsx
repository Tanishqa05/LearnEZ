import React from "react";
import {
  MDBRadio,
  MDBListGroup,
  MDBListGroupItem,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function Sorter() {
  return (
    <MDBListGroup light style={{ background: "white" }}>
      <MDBListGroupItem className="border-0">
        <MDBRadio
          name="radioNoLabel"
          id="radioNoLabell"
          value=""
          label="Sem1"
        />
      </MDBListGroupItem>

      <MDBListGroupItem className="border-0">
        <MDBRadio
          name="radioNoLabel"
          id="radioNoLabell"
          value=""
          label="Sem2"
        />
      </MDBListGroupItem>

      <MDBListGroupItem className="border-0">
        <MDBRadio
          name="radioNoLabel"
          id="radioNoLabell"
          value=""
          label="Sem3"
        />
      </MDBListGroupItem>

      <MDBListGroupItem className="border-0">
        <MDBRadio
          name="radioNoLabel"
          id="radioNoLabell"
          value=""
          label="Sem4"
        />
      </MDBListGroupItem>

      <MDBListGroupItem className="border-0">
        <MDBRadio
          name="radioNoLabel"
          id="radioNoLabell"
          value=""
          label="Sem5"
        />
      </MDBListGroupItem>
      <MDBListGroupItem className="border-0">
        <MDBRadio
          name="radioNoLabel"
          id="radioNoLabell"
          value=""
          label="Sem6"
        />
      </MDBListGroupItem>
      <MDBListGroupItem className="border-0">
        <MDBRadio
          name="radioNoLabel"
          id="radioNoLabell"
          value=""
          label="Sem7"
        />
      </MDBListGroupItem>
      <MDBListGroupItem className="border-0">
        <MDBRadio
          name="radioNoLabel"
          id="radioNoLabell"
          value=""
          label="Sem8"
        />
      </MDBListGroupItem>
    </MDBListGroup>
  );
}
