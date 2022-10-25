import React, { useState } from "react";
import styles from "./style.module.scss";

const images = [
  {
    src: "/images/photo4.jpg",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/images/photo4.jpg",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/images/photo4.jpg",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/images/photo4.jpg",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  return (
    <div className={styles.gallery_item_wrapper}>
      <div />
      <div className={styles.gallery_item}>
        <div className={styles.gallery_item_info}>
          <h1 className={styles.gallery_info_title}>{title}</h1>
          <h6 className={styles.gallery_info_subtitle}>{subtitle}</h6>
          <p className={styles.gallery_info_category}>{category}</p>
        </div>
        <div
          className={styles.gallery_item_image}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div />
    </div>
  );
}

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <section className={styles.gallery_wrap}>
      <div className={styles.gallery}>
        <div className={styles.gallery_counter}>
          <span>{activeImage}</span>
          <span className={styles.divider} />
          <span>{images.length}</span>
        </div>

        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
