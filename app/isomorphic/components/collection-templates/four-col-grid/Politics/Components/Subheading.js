import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import Headline from "./Headline";
import "./bannerImage.css";

const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

const Subheading = (props) => {
  const classes = useStyles();

  return (
    <div className="largeStory subHeading">
      <div className="subHeading2">
        <div>
          <Headline
            content="Jenny Lawson is publishing a new book and it's Sort of a Coloring Book"
            writer="rinku poonia"
            style={{ fontWeight: "bold", fontSize: 20 }}
            writerStyle={{
              color: "grey",
            }}
            contentStyle={{
              fontWeight: "bold",
            }}
          />
          <Divider className={classes.divider} />
        </div>

        <div>
          <Headline
            content="Jenny Lawson is publishing a new book and it's Sort of a Coloring Book"
            writer="rinku poonia"
            writerStyle={{
              color: "grey",
            }}
            contentStyle={{
              fontWeight: "bold",
            }}
          />
          <Divider className={classes.divider} />
        </div>
      </div>

      <div className="subHeading2">
        <div>
          <Headline
            content="Jenny Lawson is publishing a new book and it's Sort of a Coloring Book"
            writer="rinku poonia"
            writerStyle={{
              color: "grey",
            }}
            contentStyle={{
              fontWeight: "bold",
            }}
          />
          <Divider className={classes.divider} />
        </div>

        <div>
          <Headline
            content="Jenny Lawson is publishing a new book and it's Sort of a Coloring Book"
            writer="rinku poonia"
            writerStyle={{
              color: "grey",
            }}
            contentStyle={{
              fontWeight: "bold",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Subheading;
