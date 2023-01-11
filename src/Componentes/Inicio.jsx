import Button from 'react-bootstrap/Button';
import styles from '../CSS/inicio.module.css'
import Image from '../Imagens/undraw_studying_re_deca.svg'
import { Link } from "react-router-dom"



export function Inicio() {
    return(
<div>
    <section className={styles.header}>
   <h1 className={styles.titulo}>Estude melhor montando um Ciclo de Estudos</h1>
   
   <img src={Image} className={styles.studying} />
   </section>
   <p className={styles.paragrafo}>O Ciclo de Estudos é uma alternativa ao tradicional cronograma semanal de estudos. E ele é mais funcional por alguns motivos.
   <br />
   <br />
  Manter um cronograma semanal de estudos pode não funcionar para todo mundo. Imprevistos do dia-a-dia podem coincidir com seu planejamento e criar caos. Que tal facilitar as coisas criando um ciclo de estudos?
  Crie uma lista das matérias que precisa estudar e adicione uma quantidade de tempo para cada uma delas. Você começa a próxima matéria quando terminar a quantidade de tempo estabelecida pela anterior.
  Assim você vai sempre continuar seus estudos de onde parou. Simples, né?
  Que tal experimentar?</p>
<Button className={styles.botao}>
    <Link className={styles.botaonome} to="/criarciclo">Criar meu Ciclo de Estudos</Link></Button>
</div>
)
}