import styles from "../components/styles/productcard.module.scss"


export default function ProductCard({ photoURL }) {
  return (
    <div
      style={{ backgroundImage: `url(${photoURL})` }}
      className={styles.productcard}
    />
  );
}
