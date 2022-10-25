import React from "react";
import SectionHeader from "../SectionHeader";
import styles from "./style.module.scss";

const About = () => {
  return (
    <section className={styles.about_section}>
      <SectionHeader title="about" />
      <p className={styles.headline}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
        voluptatem iusto voluptas, veniam, quae natus modi ad, eligendi
        repudiandae praesentium officiis amet quasi porro laudantium? Veniam id
        commodi vel necessitatibus!
      </p>
    </section>
  );
};

export default About;
