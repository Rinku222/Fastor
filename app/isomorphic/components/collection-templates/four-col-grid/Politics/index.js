import React from "react";
import BannerImage from "./Components/BannerImage";
import Heading from "./Components/Heading";
import Subheading from "./Components/Subheading";
import Grid from "@material-ui/core/Grid";

const index = () => {
  return (
    <div>
      <h1>Politics</h1>
      <div className="mainContainer">
        <BannerImage />
        <Heading />
        <Subheading />
      </div>
    </div>
  );
};

export default index;
