import styles from '../../styles/Landing.module.css'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Landing() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.contentWrapper}>
        <header>
          <img src="happy-marker.svg" alt="Happy" />

          <div className={styles.location}>
            <strong>Rio do Norte</strong>
            <span>Santa Cruz</span>
          </div>
        </header>

        <main>
          <div className={styles.landingText}>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </div>
          <Link href="/map">
            <a className={styles.btnEnterApp}>
              <FiArrowRight size={26} color="rgba(0,0,0,.6)" />
          </a>
          </Link>
        </main>
      </div>
    </div>
  )
}
