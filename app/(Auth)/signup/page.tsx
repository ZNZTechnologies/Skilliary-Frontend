import React from "react";
import classes from "./styles.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { Images } from "@/constants/images";

function Signup() {
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <p>#1 most trusted pakistan freelancing platform</p>
        <h2>Welcome to Talent Hunt!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          amet eveniet impedit beatae maiores alias accusamus placeat veniam
          voluptates iste quidem, illum inventore quis suscipit illo! Possimus,
          veritatis! Saepe, dolor vel ab, unde culpa perspiciatis odio
          repudiandae dolores numquam reprehenderit mollitia maxime minus ullam,
          assumenda ut perferendis tempore maiores fuga.
        </p>
      </div>
      <div className={classes.actions}>
        <Link className={classes.navigation} href={""}>
          <Image src={Images.HIGH_QUALITY_WORK} alt="" />
          <h2>I'm looking for high-quality work</h2>
          <p>
            Create account to build you like on meaningful, high-paying work.
          </p>
        </Link>
        <Link className={classes.navigation} href={""}>
          <Image src={Images.TOP_TECH_TALENT} alt="" />
          <h2>I'm looking for top tech talent</h2>
          <p>
            Create account to build you like on meaningful, high-paying work.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
