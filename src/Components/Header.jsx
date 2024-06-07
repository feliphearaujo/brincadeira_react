import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.Header} >
        <ul className={styles.menu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="./Mission">Missão</Link></li>
            <li><Link to="./Products">Produtos</Link></li>
            <li><Link to="./Contact">Contatos</Link></li>
            <li><Link to="./History">História</Link></li>
        </ul>
    </header>
  )
}

export default Header