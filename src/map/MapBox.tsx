import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaW5nZmlsaXAiLCJhIjoiY204NGt5eHc2MjN0aDJxcHRpaHBxMzFpdSJ9.4AdEDMcgyF1u91Ujav9xPg";

//!Todo: Mirar el comportamiento del mapa al renderizarse

export const MapBox = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const centerCoordinates: [number, number] = [-75.8688645, 8.7662868]; // Coordenadas iniciales

  useEffect(() => {
    // Verificar si el contenedor del mapa está disponible
    if (!mapContainer.current) {
      console.error("El contenedor del mapa no está disponible.");
      return;
    }

    // Evitar la reinicialización del mapa si ya existe
    if (mapRef.current) return;

    // Inicializar el mapa
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: centerCoordinates,
      zoom: 15,
    });

    // Guardar la referencia del mapa
    mapRef.current = map;

    // Añadir el marcador predeterminado
    new mapboxgl.Marker().setLngLat(centerCoordinates).addTo(map);

    // Solicitar la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords: [number, number] = [
            position.coords.longitude,
            position.coords.latitude,
          ];
          setUserLocation(userCoords);

          // Añadir un marcador para la ubicación del usuario
          new mapboxgl.Marker({ color: "blue" })
            .setLngLat(userCoords)
            .addTo(map);

          // Trazar la ruta entre la ubicación del usuario y el punto de interés
          getRoute(userCoords, centerCoordinates, map);
        },
        (error) => {
          console.error("Error obteniendo la ubicación", error);
        }
      );
    }

    // Limpiar el mapa cuando el componente se desmonte
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const getRoute = async (
    start: [number, number],
    end: [number, number],
    map: mapboxgl.Map
  ) => {
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;

    // Añadir la ruta al mapa
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: route,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#3b82f6",
        "line-width": 4,
      },
    });
  };

  const centerMap = () => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: centerCoordinates,
        zoom: 15,
        essential: true,
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
