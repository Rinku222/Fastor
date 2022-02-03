import { makeStyles } from "@material-ui/core";
import React from "react";
import image from "../Assets/scenery.jpg";
import Headline from "./Headline";
import "./bannerImage.css";

const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
  },
  imageText: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  image: {
    width: "100%",
  },
}));

const BannerImage = () => {
  const classes = useStyles();

  return (
    <div style={{ position: "relative", display: "flex" }} className="largeStory">
      <img src={image} alt="logo" className={classes.image} />
      <div className={classes.imageText}>
        <Headline
          content="Jenny Lawson is publishing a new book and it's Sort of a Coloring Book"
          writer="rinku poonia"
          writerStyle={{
            color: "#fff",
          }}
          contentStyle={{
            fontWeight: "bold",
            color: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default BannerImage;
