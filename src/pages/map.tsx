import Head from 'next/head'
import styles from '../../styles/Map.module.css'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import LeafletMap from '../components/LeafletMap'

export default function Map() {
    return (
        <div className={styles.mapPage}>
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

            <aside>
                <header>
                    <img src="happy-marker.svg" alt="Happy" />

                    <div className={styles.headerText}>
                        <h2>Escolha um orfanato no mapa</h2>
                        <p>Muitas crianças estão esperando sua visita {':)'}</p>
                    </div>
                </header>

                <footer>
                    <strong>Rio do Norte</strong>
                    <span>Santa Cruz</span>
                </footer>
            </aside>

            {/* <LeafletMapDynamic /> */}
            <LeafletMap />

            <Link href="">
                <a className={styles.btnCreateOrphanage}>
                    <FiPlus size={26} color="#fff" />
                </a>
            </Link>
        </div>
    )
}