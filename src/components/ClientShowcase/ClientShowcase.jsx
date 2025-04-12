import styles from './ClientShowcase.module.css';

const ClientShowcase = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.stars}>{'★'.repeat(5)}</div>
        <h2 className={styles.heading}>Trusted by businesses and entrepreneurs:</h2>
        <br />
        <p className={styles.subheading}>We helped our clients earn $10M in tax returns.</p>
        
        <div className={styles.logoGrid}>
          <div className={styles.logoContainer}>
            <img src='images/Abuse.png' alt="ABUSE Logo" />
          </div>
          <div className={styles.logoContainer}>
            <img src="images/500px.png" alt="500px Logo" />
          </div>
          <div className={styles.logoContainer}>
            <img src="images/Ansys.png" alt="Ansys Logo" />
          </div>
          <div className={styles.logoContainer}>
            <img src="images/adyen.png" alt="Adjgen Logo" />
          </div>
          <div className={styles.logoContainer}>
            <img src="images/alegro.png" alt="Allegro Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;