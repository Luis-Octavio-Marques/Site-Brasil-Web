import React from "react";
import CountryPage from "./CountryPage";
import RightNav from "../components/RightNav";

function EgyptPage() {
  return (
    <>
      <CountryPage
        countryCode="egypt"
        titleKey="Egypt Web"
        backgroundClass="bodyBackgroundEgypt"
        countryNameClass="egyptName"
        buttonLanguageColor="#fac800"
      />
      <RightNav />
    </>
  );
}

export default EgyptPage;
