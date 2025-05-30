import React from "react";
import CountryPage from "./CountryPage";
import RightNav from "../components/RightNav";

function FrancePage() {
  return (
    <>
      <CountryPage
        countryCode="france"
        titleKey="France Web"
        backgroundClass="bodyBackgroundFrance"
        countryNameClass="franceName"
        buttonLanguageColor="#20257f"
      />
      <RightNav />
    </>
  );
}

export default FrancePage;
