import styles from './Home.content.module.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import vueLogo from '../assets/vue.svg'
import angularLogo from '../assets/angular.svg'

export function HomeContent(){
    return (
        <>
            <div className={styles.homecontent}>
                <h1>Home Content</h1>
            
            </div>
            <img src={reactLogo} className={styles.reactlogo} alt="React logo" />
            <img src={viteLogo} className={styles.reactlogo} alt="Vite Logo" />
            <img src={vueLogo} className={styles.reactlogo} alt="Vue Logo" />
            <img src={angularLogo} className={styles.reactlogo} alt="angular Logo" />
        </>
        

    )
}