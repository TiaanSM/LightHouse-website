import styles from '../styles/Main.module.css'

const WorkCard = (props) => {
  return (
    <div className={styles.card}>
        <img src="" alt="" className={styles.video} />
        <div className={styles.textContainer}>
            <h4>{props.title}</h4>
            <span>{props.type}</span>
        </div>
    </div>
  )
}

export default WorkCard