import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";


import styles from "../styles/FooterStyles.js";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <p>copyright 2024</p>

      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
