import React from "react";
import data from "../data";
import Page from "../components/page";
import Card from "../components/card";

function HomePage() {
  return (
    <Page>
      {Object.entries(data).map(([id, props]) => (
        <Card key={id} id={id} {...props} />
      ))}
    </Page>
  );
}

export default HomePage;
