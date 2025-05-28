import React from "react";
import CountryPage from "./CountryPage";

function JapanPage() {
  return (
    <CountryPage
      countryCode="japan"
      titleKey="Japan Web"
      backgroundClass="bodyBackgroundJapan"
      countryNameClass="japanName"
      buttonLanguageColor="#e60026"
    />
  );
}

export default JapanPage;
