import mapboxgl from "https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm";
console.log("Mapbox GL JS Loaded:", mapboxgl);

mapboxgl.accessToken = "pk.eyJ1IjoiemxvdWllIiwiYSI6ImNtcDd2c2N4djA2ZWsyeHE5NzR1YTVtYjMifQ.0elRY5I4H9SObzFBkqu8Fw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [-71.09415, 42.36027],
  zoom: 12,
  minZoom: 5,
  maxZoom: 18,
});