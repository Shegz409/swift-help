/* Swift Help - Map Utilities (Leaflet + OpenStreetMap) */

// Default center: Lagos, Nigeria
const LAGOS_CENTER = [6.5244, 3.3792];
const DEFAULT_ZOOM = 12;

function createMap(containerId, center = LAGOS_CENTER, zoom = DEFAULT_ZOOM) {
  const map = L.map(containerId, {
    zoomControl: true,
    attributionControl: true
  }).setView(center, zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  return map;
}

function createProviderIcon(color = '#0ea5e9') {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background: ${color};
        width: 36px;
        height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: 14px;
          font-weight: bold;
        ">📍</div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });
}

function createUserIcon() {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="pulse-dot" style="
        background: #10b981;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 0 6px rgba(16,185,129,0.3);
      "></div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
}

function createDriverIcon() {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background: #f59e0b;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      ">🛵</div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });
}

function addProviderMarkers(map, providers, onClick) {
  const markers = [];
  providers.forEach(p => {
    const marker = L.marker([p.lat, p.lng], {
      icon: createProviderIcon(p.category === 'home' ? '#0ea5e9' : '#8b5cf6')
    }).addTo(map);

    marker.bindPopup(`
      <div style="min-width:180px">
        <strong style="font-size:14px">${p.name}</strong><br>
        <span style="color:#64748b;font-size:12px">${p.service}</span><br>
        <div style="margin:6px 0;color:#f59e0b">★ ${p.rating} (${p.reviews})</div>
        <div style="font-weight:600;color:#0ea5e9">${p.price}</div>
        <button onclick="window.selectProvider && window.selectProvider(${p.id})" 
          style="margin-top:8px;background:#0ea5e9;color:white;border:none;padding:6px 12px;border-radius:8px;cursor:pointer;width:100%;font-size:13px">
          View / Contact
        </button>
      </div>
    `);

    if (onClick) {
      marker.on('click', () => onClick(p));
    }
    markers.push(marker);
  });
  return markers;
}

function drawRoute(map, fromLatLng, toLatLng, color = '#0ea5e9') {
  // Simple straight line for demo (real apps use routing API)
  const line = L.polyline([fromLatLng, toLatLng], {
    color: color,
    weight: 5,
    opacity: 0.8,
    dashArray: '10, 10'
  }).addTo(map);

  map.fitBounds(L.latLngBounds([fromLatLng, toLatLng]), { padding: [50, 50] });
  return line;
}

function simulateMovingMarker(map, start, end, duration = 8000, icon = null) {
  const marker = L.marker(start, { icon: icon || createDriverIcon() }).addTo(map);
  const steps = 60;
  const latStep = (end[0] - start[0]) / steps;
  const lngStep = (end[1] - start[1]) / steps;
  let i = 0;

  const interval = setInterval(() => {
    i++;
    const newPos = [start[0] + latStep * i, start[1] + lngStep * i];
    marker.setLatLng(newPos);
    if (i >= steps) {
      clearInterval(interval);
    }
  }, duration / steps);

  return marker;
}

window.SwiftMaps = {
  createMap,
  createProviderIcon,
  createUserIcon,
  createDriverIcon,
  addProviderMarkers,
  drawRoute,
  simulateMovingMarker,
  LAGOS_CENTER
};