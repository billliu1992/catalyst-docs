import { useState } from "react";
import styles from "./InfoPanels.module.css";

export default function InfoPanels({
  panels,
}: {
  panels: {
    header: string;
    details: React.ReactNode;
    imageUrl: string;
  }[];
}) {
  const [clickedIdx, setClickedIdx] = useState(0);
  return (
    <div className={styles.infoPanels}>
      <div className={styles.text}>
        {panels.map((p, idx) => (
          <div className={styles.panel} onClick={() => setClickedIdx(idx)}>
            <div className={styles.header}>
              <span className={styles.headerText}>{p.header}</span>
              <span className={styles.headerArr}>
                {clickedIdx == idx ? "-" : "+"}
              </span>
            </div>
            <div
              className={
                clickedIdx == idx ? styles.detailsVis : styles.detailsHid
              }
            >
              {p.details}
            </div>
          </div>
        ))}
      </div>
      <img className={styles.image} src={panels[clickedIdx].imageUrl} />
    </div>
  );
}
