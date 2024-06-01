import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.slotsContainer}>
        <h5 className={styles.mainTitle}>Ближайшие слоты</h5>
        <div style={{display: "flex"}}>
          <div>
            <div>
              <button className={styles.slotBtn}><a href="./">09:00</a></button>
              <button className={styles.slotBtn}>12:00</button>
              <button className={styles.slotBtn}>14:00</button>
              <button className={styles.slotBtn}>18:00</button>
            </div>
            <h5 className={styles.mainTitle}>сегодня</h5>
          </div>
          <div>
            <div>
              <button className={styles.slotBtn}>09:00</button>
              <button className={styles.slotBtn}>12:00</button>
              <button className={styles.slotBtn}>14:00</button>
              <button className={styles.slotBtn}>18:00</button>
            </div>
            <h5 className={styles.mainTitle}>завтра</h5>
          </div>
        </div>
      </section>
    </main>
  );
}
