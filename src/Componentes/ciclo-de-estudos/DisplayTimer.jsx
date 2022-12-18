import styles from '../../CSS/display.module.css'

export function DisplayTimer(props){


    return (
    <div>
        <h2 className={styles.display}>{props.timer}</h2>
        
        </div>
        )
  }