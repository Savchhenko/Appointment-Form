import Link from 'next/link'
import styles from "./page.module.css";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.slotsContainer}>
        <h5 className={styles.mainTitle}>Ближайшие слоты</h5>
        <div style={{display: "flex"}}>
          <div>
            <div>
              <button className={styles.slotBtn}><Link href="/AppointmentForm">09:00</Link></button>
              <button className={styles.slotBtn}><Link href="/AppointmentForm">12:00</Link></button>
              <button className={styles.slotBtn}><Link href="/AppointmentForm">14:00</Link></button>
              <button className={styles.slotBtn}><Link href="/AppointmentForm">18:00</Link></button>
            </div>
            <h5 className={styles.mainTitle}>сегодня</h5>
          </div>
          <div>
            <div>
              <button className={styles.slotBtn}><Link href="/AppointmentForm">09:00</Link></button>
              <button className={styles.slotBtn}><Link href="/AppointmentForm">12:00</Link></button>
              <button className={styles.slotBtn}><Link href="/AppointmentForm">14:00</Link></button>
              <button className={styles.slotBtn}><Link href="/AppointmentForm">18:00</Link></button>
            </div>
            <h5 className={styles.mainTitle}>завтра</h5>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
