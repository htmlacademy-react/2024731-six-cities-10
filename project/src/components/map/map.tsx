import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Points, Point } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  console.log(map);

  useEffect(() => {
    console.log(map);
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (

    <section className="cities__map map">
      <div style={{ height: '500px' }} ref={mapRef}></div>
    </section >

  );
}

export default Map;
