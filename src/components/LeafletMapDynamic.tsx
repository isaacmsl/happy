import dynamic from 'next/dynamic'

const LeafletMapDynamic = dynamic(() => import('./LeafletMap'), {
    ssr: false
})

export default LeafletMapDynamic