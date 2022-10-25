import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
const Featured = () => {
  const photos = ["/images/photo1.jpg", "/images/photo3.jpg"];

  const [firstUrl, secondUrl] = photos;
  return (
    <section className={styles.featured_section}>
      <div className={styles.featured_row_layout}>
        <h6>green</h6>
        <Image
          src={firstUrl}
          alt="photos"
          width={1119}
          height={1119}
          placeholder="blur"
          blurDataURL="blur"
        />
      </div>
      <div className={styles.featured_column_layout}>
        <h6>lily</h6>
        <Image
          src={secondUrl}
          alt="photos"
          width={1048}
          height={1048}
          placeholder="blur"
          blurDataURL="blur"
        />
      </div>
    </section>
  );
};

export default Featured;
