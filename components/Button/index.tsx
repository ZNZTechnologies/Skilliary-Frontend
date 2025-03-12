import React, { CSSProperties, MouseEventHandler } from "react";
import classes from "./styles.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  name?: string;
  type?: "submit" | "button" | "reset";
  children?: React.ReactNode | string;
  icon?: IconProp;
  iconColor?: string;
  iconPosition?: "TOP" | "LEFT" | "RIGHT" | "BOTTOM";
  bordered?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  bg?: string;
  fg?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

function Button(props: ButtonProps) {
  let styles: CSSProperties = {
    backgroundColor: props.bg || "var(--primary)",
    color: props.fg || "var(--bg)",
  };
  return (
    <button
      name={props.name}
      style={styles}
      type={props.type || "button"}
      className={`
                ${classes.button} 
                ${props.bordered ? classes.bordered : ""} 
                ${props.rounded ? classes.rounded : ""} 
                ${props.transparent ? classes.transparent : ""} 
                ${classes[props.iconPosition?.toLowerCase() || "left"]} 
                ${props.className}
            `}
      onClick={props.onClick}
    >
      {props.icon ? (
        <FontAwesomeIcon
          color={props.iconColor || "var(--primary)"}
          icon={props.icon}
          className={classes.icon}
        />
      ) : null}
      <div className={classes.children}>{props.children}</div>
    </button>
  );
}

export default Button;
