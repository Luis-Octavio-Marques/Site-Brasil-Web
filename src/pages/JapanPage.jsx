import React from "react";
import CountryPage from "./CountryPage";
import RightNav from "../components/RightNav";

function JapanPage() {
  return (
    <>
      <CountryPage
        countryCode="japan"
        titleKey="Japan Web"
        backgroundClass="bodyBackgroundJapan"
        countryNameClass="japanName"
        buttonLanguageColor="#e60026"
      />
      <RightNav />
    </>
  );
}

export default JapanPage;
