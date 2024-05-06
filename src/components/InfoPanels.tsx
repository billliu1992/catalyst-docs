import styles from "./InfoPanels.module.css";

export default function InfoPanels({
  panels,
}: {
  panels: {
    header: React.ReactNode;
    details: React.ReactNode;
    imageUrl: string;
  }[];
}) {
  return (
    <div className={styles.infoPanels}>
      {panels.map((p) => (
        <div className={styles.infoPanel}>
          <div className={styles.text}>
            <div className={styles.panel}>
              <h3>{p.header}</h3>
              <div className={styles.details}>{p.details}</div>
            </div>
          </div>
          <img className={styles.image} src={p.imageUrl} />
        </div>
      ))}
    </div>
  );
}
