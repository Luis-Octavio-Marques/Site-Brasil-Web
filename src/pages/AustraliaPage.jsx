import React from "react";
import CountryPage from "./CountryPage";
import RightNav from "../components/RightNav";

function AustraliaPage() {
  return (
    <>
      <CountryPage
        countryCode="australia"
        titleKey="Australia Web"
        backgroundClass="bodyBackgroundAustralia"
        countryNameClass="australiaName"
        buttonLanguageColor="#262c7c"
      />
      <RightNav />
    </>
  );
}

export default AustraliaPage;
