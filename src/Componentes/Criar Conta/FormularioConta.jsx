import styles from '../../CSS/formularioconta.module.css'

export function FormularioConta() {
    return(
        <div> 
         <form action="" className={styles.form}>
            <input type="text" placeholder="Nome" className={styles.input} />
            <input type="text" placeholder="E-mail" className={styles.input} />
            <input type="text" placeholder="Senha" className={styles.input} />
            <input type="text" placeholder="Confirmar Senha" className={styles.input}/>
            <input type="button" value="Criar Conta" className={styles.inputButton} />
        </form>
        </div>
    )
}