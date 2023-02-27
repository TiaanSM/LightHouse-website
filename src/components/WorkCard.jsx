import styles from '../styles/Main.module.css'

const WorkCard = (props) => {

  return (
    <div className={styles.card}>
      <video className={styles.video} loop muted onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}>
        <source src={props.src} type="video/mp4" />
      </video>

        <div className={styles.textContainer}>
            <h4>{props.title}</h4>
            <span>{props.type}</span>
        </div>
    </div>
  )
}

export default WorkCard