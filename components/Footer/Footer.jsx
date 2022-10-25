import React from "react";
import SectionHeader from "../SectionHeader";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <SectionHeader title="Made in" />
      <h1 className={styles.location}>
        <div className={styles.location_text}>Rio de Janeiro</div>
      </h1>
    </section>
  );
};

export default Footer;
