import React from "react";
import type { Image } from "./image.model";
import styles from "./styles.module.scss";

export const ImageComponent = ({ title, src, Svg }: Image): JSX.Element => {
  return (
    <div className={styles.root}>
      {!!src ? (
        <img className={styles.image} alt={title} src={src} />
      ) : !!Svg ? (
        <Svg className={styles.svg} role="img" />
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
};
