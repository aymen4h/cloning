import styles from './Profile.module.css'
import NavBar from '../Navbar/Navbar';
import Prof from '../Prof/Prof';


export default function Profile() {
  return (
    <>
      <div className={styles.main}>
        <NavBar />
        <Prof />
      </div>
    </>
  )
}

