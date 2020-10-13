import { Map, TileLayer } from 'react-leaflet-universal'
import 'leaflet/dist/leaflet.css'

const LeafletMap = () => (
    <Map
        center={[-6.224551, -36.0184441]}
        zoom={15}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
    >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
    </Map>
)

export default LeafletMap