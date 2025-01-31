import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import YTResource from "./YTResource";
import Notes from "./Notes";
import PYQ from "./PYQ";

export default function ResourceViewer() {
  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>
      <MDBTabs fill className="mb-3 mt-4">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("tab1")}
            active={fillActive === "tab1"}
          >
            <b>NOTES</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("tab2")}
            active={fillActive === "tab2"}
          >
            <b>YOUTUBE</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("tab3")}
            active={fillActive === "tab3"}
          >
            <b>PYQ's </b>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === "tab1"}>
          <Notes />
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === "tab2"}>
          <YTResource />
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === "tab3"}>
          <PYQ />
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
