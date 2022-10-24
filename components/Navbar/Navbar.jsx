import React from "react";
//import "./style.module.scss";
import styles from "./style.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>menu</div>
      <div>Fliryt Flowers</div>
      <div>cart</div>
    </div>
  );
};

export default Navbar;
