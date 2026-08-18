# Swift Help – Local Services + Marketplace + Rides Platform

A modern front-end prototype for a multi-sided local platform inspired by Bolt/Uber + service marketplaces.

## Features

### Customer Side
- **Home Services** & **Walk-in Services** with live map view
- Provider profiles, ratings, contact & request service
- **Marketplace** – browse products, cart, checkout
- **Tricycle / Ride Booking** – Uber/Bolt style map with pickup & drop-off
- **Live Tracking** – monitor provider or driver movement on map
- Mobile-friendly design with bottom navigation

### Admin Dashboard
- Overview stats (revenue, commission, active jobs, users)
- Users management
- Jobs & Orders tracking
- Rides history
- Providers management (view / suspend)
- **Commission control** – set platform percentage per job (default 15%)
- Platform settings

### Other
- Role-based demo login (Customer / Provider / Driver / Admin)
- Cart persisted in localStorage
- Interactive maps using Leaflet + OpenStreetMap
- Responsive (mobile + desktop)

## How to Run

1. Open `index.html` in a modern browser, **or**
2. Serve the folder with any static server:

```bash
# From the swift-help folder
npx serve .
# or
python3 -m http.server 3000
```

Then visit `http://localhost:3000`

## Demo Login

Go to **Login** and choose a role:
- **Customer** – normal user experience
- **Provider** – service provider view
- **Driver** – tricycle driver
- **Admin** – full admin dashboard at `/admin.html`

## Tech Stack

- HTML5 + Tailwind CSS (CDN)
- Vanilla JavaScript
- Leaflet.js + OpenStreetMap (free maps, no API key needed for demo)
- LocalStorage for cart & session

## Important Notes

This is a **high-fidelity front-end prototype**.

For a real production app that supports 200+ concurrent users with:
- Real user accounts & authentication
- Live GPS tracking
- Real payments
- Automatic commission deduction
- Push notifications
- Scalable backend

…you will need a proper backend (Node.js / Python / etc.), database, maps API keys (Google Maps or Mapbox), and hosting (Vercel, AWS, DigitalOcean, etc.).

The code is structured so it can be connected to a real API later with minimal changes.

## Folder Structure

```
swift-help/
├── index.html          # Homepage
├── admin.html          # Admin Dashboard
├── css/style.css
├── js/
│   ├── app.js          # Core logic, mock data, cart, auth
│   └── maps.js         # Leaflet map helpers
└── pages/
    ├── services.html   # Services + map
    ├── marketplace.html
    ├── ride.html       # Book tricycle
    ├── tracking.html   # Live tracking
    └── login.html
```

## Commission Model

Admin can set the platform commission percentage (5–30%).  
On every completed job / order / ride the platform automatically takes that percentage.

---

Built as a complete interactive prototype for **Swift Help**.
