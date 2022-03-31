import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    width: "100%",
    margin: "0 auto",
    padding: "24px 4px",
  },
  fullWidth: {
    maxWidth: "100%",
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the sections
 *
 * @param {Object} props
 */
const Section = (props) => {
  const { children, fullWidth, narrow, disablePadding, className, ...rest } =
    props;

  const classes = useStyles();

  return (
    <section
      className={clsx(
        "section",
        classes.root,
        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  narrow: PropTypes.bool,
  /**
   * Should the section be full width
   */
  fullWidth: PropTypes.bool,
  /**
   * Should the section render with no padding
   */
  disablePadding: PropTypes.bool,
};

export default Section;
