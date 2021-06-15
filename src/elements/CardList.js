import React from "react";
import propTypes from "prop-types";

export default function CardList(props) {
  const className = ["list-reset"];
  className.push(props.className);

  if (props.isSmall) className.push("text-xs");

  return (
    <ul class={className.join(" ")}>
      {props.data.map((list, index) => {
        return (
          <li key={index} class={list.isChecked ? "is-checked" : ""}>
            {list.content}
          </li>
        );
      })}
    </ul>
  );
}

CardList.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
  isSmall: propTypes.bool,
};
