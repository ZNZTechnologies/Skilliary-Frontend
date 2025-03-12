"use client";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import { Images } from "@/constants/images";
import Button from "@/components/Button";
import { faPenToSquare, faUser } from "@fortawesome/free-solid-svg-icons";

function AuthNav() {
  return (
    <div className={classes.navbar}>
      <div className={classes.company_icon}>
        <Image src={Images.LOGO} alt="Site Logo" />
        <h2>Job Portal</h2>
      </div>
      <div className={classes.actions}>
        <Button icon={faPenToSquare} transparent>
          Contact us
        </Button>
        <Button icon={faUser} transparent>
          Sign In
        </Button>
        <Button icon={faUser} bordered rounded>
          Get Hired
        </Button>
        <Button rounded>Hire Tech Talent</Button>
      </div>
    </div>
  );
}

export default AuthNav;
