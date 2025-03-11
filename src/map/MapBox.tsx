import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaW5nZmlsaXAiLCJhIjoiY204NGt5eHc2MjN0aDJxcHRpaHBxMzFpdSJ9.4AdEDMcgyF1u91Ujav9xPg";

export const MapBox = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return; // Evitar errores en SSR (Server-Side Rendering)

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-75.8688645, 8.7662868], // Coordenadas (longitud, latitud)
      zoom: 15,
    });

    new mapboxgl.Marker().setLngLat([-75.86886451, 8.7662868]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "100%", borderRadius: "4px" }}
    />
  );
};
