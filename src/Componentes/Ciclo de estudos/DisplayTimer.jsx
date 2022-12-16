import styles from '../../CSS/display.module.css'

export function DisplayTimer(props){
    //lógica do setInterval+parte da conta

    return (
    <div>
        <h2 className={styles.display}>{props.timer}</h2>
        
        </div>
        )
  }