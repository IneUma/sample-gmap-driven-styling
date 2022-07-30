import { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/css';

/**
 *
 *
 *
 * @see Interface
 * @version 1.0.0
 * -------------------------------------------------------------------------- */
export type Props = {
  center: google.maps.LatLngLiteral;
  zoom: number;
};

/**
 *
 *
 *
 * @see Components
 * @version 1.0.0
 * -------------------------------------------------------------------------- */
const Map = (props: Props) => {
  const { center, zoom } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      );
    }
  }, [ref, map, center, zoom]);

  return (
    <div
      ref={ref}
      id='map'
      className={css`
        height: 100vh;
      `}
    ></div>
  );
};

export default Map;
