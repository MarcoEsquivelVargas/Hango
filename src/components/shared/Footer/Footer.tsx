import styles from './Footer.module.sass';

export const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <p>Hango © {new Date().getFullYear()}</p>
    </footer>
  )
};