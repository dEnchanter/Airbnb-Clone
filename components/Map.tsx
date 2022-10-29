import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
type Props = {}

export default function Map({}: Props) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  })
  return (
    <ReactMapGL
      mapStyle='mapbox://styles/daiki4719/cl9c1ywzi003314p642y51tgx'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      // onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
    >

    </ReactMapGL>
  )
}