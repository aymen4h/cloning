import styles from './Preview.module.css'

export default function Preview() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.up}>
            <button className={styles.btn1}>Back to Editor</button>
            <button className={styles.btn2}>Share Link</button>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.image}></div>
          <div className={styles.ccenter}> 
            <h3></h3>
            <p></p>
          </div> 
          <div className={styles.cfoot}>
            <button className={styles.fbtn1}></button>
            <button className={styles.fbtn2}></button>
            <button className={styles.fbtn3}></button>
          </div>
        </div>
      </div>
    </>
  )
}