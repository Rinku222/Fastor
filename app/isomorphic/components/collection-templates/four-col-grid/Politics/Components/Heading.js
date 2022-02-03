import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import image from "../Assets/scenery.jpg";
import Headline from "./Headline";
import "./bannerImage.css";

const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
  },
  image: {
    width: "100%",
  },
}));

const Heading = () => {
  const classes = useStyles();

  return (
    <div className="largeStory">
      <img src={image} alt="logo" className={classes.image} />

      <Paper elevation={3} style={{ backgroundColor: "#fff", padding: 10 }}>
        <Headline
          content="Jenny Lawson is publishing a new book and it's Sort of a Coloring Book"
          writer="rinku poonia"
          writerStyle={{
            color: "grey",
          }}
          contentStyle={{
            fontSize: 20,
          }}
        />
      </Paper>
      <Paper elevation={3} style={{ backgroundColor: "#fff", padding: 10, marginTop: 20 }}>
        <Headline
          content="Jenny Lawson is publishing a new book and it's Sort of a Coloring Book"
          writer="rinku poonia"
          writerStyle={{
            color: "grey",
          }}
          contentStyle={{}}
        />
      </Paper>
    </div>
  );
};

export default Heading;
