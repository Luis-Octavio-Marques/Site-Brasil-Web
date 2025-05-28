import React from "react";
import CountryPage from "./CountryPage";

function AustraliaPage() {
  return (
    <CountryPage
      countryCode="australia"
      titleKey="Australia Web"
      backgroundClass="bodyBackgroundAustralia"
      countryNameClass="australiaName"
      buttonLanguageColor="#262c7c"
    />
  );
}

export default AustraliaPage;
