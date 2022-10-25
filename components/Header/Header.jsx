import React from "react";
import gsap from "gsap";
//import SplitText from "../../utils/Split3.min";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <section className={styles.header_container}>
      <ul className={styles.header_menu}>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id={styles.header_text}>Art Object</h1>
    </section>
  );
};

export default Header;
