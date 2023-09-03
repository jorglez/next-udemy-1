import Link from "next/link";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.topNav}>
      <Link href={{ pathname: "/" }}>Home</Link>
      <Link href={{ pathname: "/about" }}>About</Link>
      <Link href={{ pathname: "/contact" }}>Contact</Link>
    </nav>
  );
};

export default NavBar;
