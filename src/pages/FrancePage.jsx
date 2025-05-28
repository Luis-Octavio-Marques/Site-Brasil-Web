import React from "react";
import CountryPage from "./CountryPage";

function FrancePage() {
  return (
    <CountryPage
      countryCode="france"
      titleKey="France Web"
      backgroundClass="bodyBackgroundFrance"
      countryNameClass="franceName"
      buttonLanguageColor="#20257f"
    />
  );
}

export default FrancePage;
