import Image from './Imagens/undraw_dev_focus_re_6iwt.svg'
import styles from './CSS/gerenciarciclo.module.css'

export function GerenciarCiclo() {
    return (
        <div>
            <h1 className={styles.titulo}>Página em construção!</h1>
            <p className={styles.paragrafo}>Nossa DEV está trabalhando incansavelmente para expandir o site.
                Em breve, esta seção estará disponível!
            </p>
            <img className={styles.imagem} src={Image} />
        </div>
    )
}