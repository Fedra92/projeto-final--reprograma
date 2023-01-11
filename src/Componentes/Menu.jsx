import { Link } from "react-router-dom"
import { Nav, Navbar, NavLink } from "react-bootstrap/"
import styles from "../CSS/menu.module.css"

export function Menu (){
    return(
        <Navbar className={styles.menuContainer}>
            <li className={styles.menuItem}>
                <Link className={styles.menuName} to="/">Início</Link>
            </li>
            <li className={styles.menuItem}>
               <Link className={styles.menuName} to="/criarciclo">Criar Ciclo</Link>
            </li>
            <li className={styles.menuItem}>
                <Link className={styles.menuName} to="/gerenciar">Gerenciar Ciclos</Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuName} to="/conta">Criar Conta</Link>
            </li>
        </Navbar>
    )
}