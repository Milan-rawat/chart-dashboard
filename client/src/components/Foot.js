import React, { Component } from "react";
import classes from "./css/Foot.module.css";

class Foot extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "98%",
          height: "80px",
          backgroundColor: "white",
          borderRadius: "10px",
          margin: "10px",
          boxShadow: "0 0 12px 6px rgba(0, 0, 0, 0.3)",
        }}
        className="appFoot"
      >
        Made by Milan Rawat | Follow on 🤳
        <a
          className={classes.linkToMe}
          href="https://github.com/milan-rawat"
          rel="noreferrer"
          target="_blank"
        >
          Github{" "}
        </a>
        <a
          className={classes.linkToMe}
          href="https://linkedin.com/in/milan-rawat-6b87831b4"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn{" "}
        </a>
        <a
          className={classes.linkToMe}
          href="https://twitter.com/milan8rawat"
          rel="noreferrer"
          target="_blank"
        >
          Twitter{" "}
        </a>
      </div>
    );
  }
}

export default Foot;
