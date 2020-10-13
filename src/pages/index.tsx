import Head from 'next/head'
import styles from '../../styles/Landing.module.css'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Landing() {
  return (
    <div className={styles.landingPage}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>Happy</title>
        <meta charSet="UTF-8 " />
        <meta name="author" content="Isaac Lourenço" />
        <meta name="description" content="Incentivando visitas a orfanatos de Santa Cruz, Rio Grande do Norte" />
        <meta name="keywords" content="orfanato, santa cruz rn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="pt-br" />
      </Head>

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
