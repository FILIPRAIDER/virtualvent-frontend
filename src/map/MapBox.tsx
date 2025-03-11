import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaW5nZmlsaXAiLCJhIjoiY204NGt5eHc2MjN0aDJxcHRpaHBxMzFpdSJ9.4AdEDMcgyF1u91Ujav9xPg";

export const MapBox = () => {
  const mapContainer = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const centerCoordinates: [number, number] = [-75.8688645, 8.7662868]; // Coordenadas iniciales

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: centerCoordinates,
      zoom: 15,
    });

    new mapboxgl.Marker().setLngLat(centerCoordinates).addTo(map);
    mapRef.current = map;

    return () => map.remove();
  }, []);

  const centerMap = () => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: centerCoordinates,
        zoom: 15,
        essential: true, // Para garantizar una animación suave
      });
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        ref={mapContainer}
        style={{ width: "100%", height: "100%", borderRadius: "4px" }}
      />
      <button
        onClick={centerMap}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: "8px 12px",
          background: "#093F51",
          color: "white",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Centrar
      </button>
    </div>
  );
};
