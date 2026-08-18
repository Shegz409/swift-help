# Swift Help

**Local Services + Marketplace + Tricycle Rides Platform**

A modern multi-sided platform that lets customers:
- Find & contact **home service** or **walk-in** providers
- See provider locations on a live map
- Buy & sell in a marketplace (with cart)
- Book **tricycle rides** (Bolt/Uber style)
- Track providers or drivers in real time

Includes a full **Admin Dashboard** where the owner can monitor everything and set a **commission percentage** on every job/order/ride.

---

## Live Demo Features

| Feature              | Status      |
|----------------------|-------------|
| Homepage             | ✅ Working  |
| Services + Map       | ✅ Working  |
| Marketplace + Cart   | ✅ Working  |
| Book Tricycle Ride   | ✅ Working  |
| Live Tracking        | ✅ Working  |
| Admin Dashboard      | ✅ Working  |
| Commission Control   | ✅ Working  |
| Mobile Responsive    | ✅ Yes      |

---

## How to Run Locally

1. Clone this repository
2. Open the folder
3. Open `index.html` in your browser  
   **or** run a local server:

```bash
# Using Python
python -m http.server 3000

# Using Node
npx serve .
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## Demo Login

Go to **Login** page and choose a role:

- **Customer** – normal user experience
- **Provider** – service provider
- **Driver** – tricycle driver
- **Admin** – full admin dashboard (`/admin.html`)

---

## Admin Features

- Overview (Revenue, Commission earnings, Active jobs, Users)
- Users management
- Jobs & Orders tracking
- Rides history
- Providers management
- **Commission settings** (adjust platform percentage)
- Platform settings

Default commission: **15%**

---

## Tech Stack

- HTML5 + Tailwind CSS
- Vanilla JavaScript
- Leaflet.js + OpenStreetMap (free maps)
- LocalStorage (cart & session)

---

## Project Structure

```
swift-help/
├── index.html              # Homepage
├── admin.html              # Admin Dashboard
├── css/style.css
├── js/
│   ├── app.js              # Core logic + mock data
│   └── maps.js             # Map helpers
└── pages/
    ├── services.html
    ├── marketplace.html
    ├── ride.html
    ├── tracking.html
    └── login.html
```

---

## Important Note

This is a **high-fidelity front-end prototype**.  

For a real production version that supports 200+ users with real payments, live GPS, and automatic commission collection, a backend + database + proper hosting will be needed later.

---

## License

MIT
