import Link from "next/link";

import classes from "./button.module.css";
import ArrowRightIcon from "../icons/arrow-right-icon";

function Button(props) {
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>
        {props.children}
        <span >
          Explore more
          <span className={classes.icon}>
            {" "}
            <ArrowRightIcon />
          </span>
        </span>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
