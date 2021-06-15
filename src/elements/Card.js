import React from "react";
import propTypes from "prop-types";

export default function Card(props) {
  const className = ["tiles-item"];
  className.push(props.className);

  return <div className={className.join(" ")}>{props.children}</div>;
}

Card.propTypes = {
  hasShadow: propTypes.bool,
  className: propTypes.string,
};
