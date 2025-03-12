import Navbar from "@/components/Navbar";
import React from "react";
import classes from "./styles.module.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout(props: AuthLayoutProps) {
  return (
    <div className={classes.container}>
      <Navbar type="AUTH_SIDE" />
      <div className={classes.children}>{props.children}</div>
    </div>
  );
}

export default AuthLayout;
