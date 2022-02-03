import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Headline = (props) => {
  return (
    <div style={{ flexDirection: "column", width: "100%" }}>
      <Typography
        style={{
          ...props.contentStyle,
          fontSize: 20,
          textTransform: "capitalize",
        }}
      >
        {props.content}
      </Typography>
      <Typography style={{ ...props.writerStyle, fontSize: 12, marginTop: 15 }}>{props.writer}</Typography>
    </div>
  );
};

export default Headline;
