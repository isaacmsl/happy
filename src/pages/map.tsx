import styles from '../../styles/Map.module.css'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import LeafletMap from '../components/LeafletMap'

export default function Map() {
    return (
        <div className={styles.mapPage}>
            <aside>
                <header>
                    <img src="happy-marker.svg" alt="Happy" />

                    <div className={styles.headerText}>
                        <h2>Escolha um orfanato no mapa</h2>
                        <p>Muitas crinças estão esperando sua visita {':)'}</p>
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