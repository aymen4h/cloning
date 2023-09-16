import styles from './Links.module.css';
import NavBar from '../Navbar/Navbar';
import Custom from '../Custom/Custom';
import Snapshot from '../Snapshot/Snapshot';

export default function Links() {
  return (
    <>
      <div className={styles.main}>
        <NavBar />
        <div className={styles.footer} >
          <Snapshot />
          <Custom />
        </div>
      </div>
    </>
  )
}
