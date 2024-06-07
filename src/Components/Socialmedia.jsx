import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

export function Socialmedia(){
    return(
        <>
            <div className={styles.socialmedia}>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
        </>
    )
}