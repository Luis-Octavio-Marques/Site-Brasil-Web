import React from "react";
import CountryPage from "./CountryPage";
import RightNav from "../components/RightNav";

function BrazilPage() {
  return (
    <>
      <CountryPage
        countryCode="brazil"
        titleKey="Brazil Web"
        backgroundClass="bodyBackgroundBrazil"
        countryNameClass="brazilName"
        buttonLanguageColor="#009739"
      />
      <RightNav />
    </>
  );
}

export default BrazilPage;
