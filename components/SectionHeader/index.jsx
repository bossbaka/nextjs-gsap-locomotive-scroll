import React from "react";
import styles from "./style.module.scss";
function SectionHeader({ title }) {
  return <h3 className={styles.section_header}>{title}</h3>;
}

export default SectionHeader;
