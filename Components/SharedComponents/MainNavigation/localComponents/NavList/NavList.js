import React from "react";
import Link from "next/link";

import classes from "./NavList.module.scss";

const NavList = ({ flex }) => {
  // TODO: Turn li's into Links when pages complete

  return (
    <ul
      className={
        flex === "column"
          ? classes["list-container-column"]
          : classes["list-container-row"]
      }
    >
      <li>Home</li>
      <li>About</li>
      <li>Handguards</li>
      <li>Upper Assemblies</li>
      <li>Reviews</li>
      <li>News & Inventory</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavList;
