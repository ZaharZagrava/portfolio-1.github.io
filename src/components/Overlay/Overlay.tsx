import React from "react";

import styles from "./Overlay.module.scss";

export const Overlay = () => (
  <div className={styles.loader_container}>
    <div className={styles.loader} />
  </div>
);
