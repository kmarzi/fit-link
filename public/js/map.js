mapboxgl.accessToken =
  "pk.eyJ1Ijoia29tcGxleG51cGUiLCJhIjoiY2tmODYwNTc2MDdxYTJ3cGl2OTd3MXl5diJ9.eScASj8nqhOEx4ZmhVlkUA";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-80.9799137, 35.2030728],
  zoom: 14
});
