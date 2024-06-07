import styles from './Footer.module.css'
import { Socialmedia } from './Socialmedia'


function Contact() {
  return (
    <div className={styles.footer}>
        <h1>Página Contato</h1>
        <Socialmedia/>

    </div>
  )
}
  
export default Contact