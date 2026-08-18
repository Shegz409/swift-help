/* Swift Help - Core Application Logic */

// ====================== MOCK DATA ======================
const MOCK_PROVIDERS = [
  {
    id: 1,
    name: "Adebayo Plumbing",
    category: "home",
    service: "Plumbing & Repairs",
    rating: 4.8,
    reviews: 124,
    price: "From ₦3,500",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    lat: 6.5244,
    lng: 3.3792,
    address: "15 Allen Avenue, Ikeja, Lagos",
    phone: "+234 801 234 5678",
    available: true,
    responseTime: "15 min",
    description: "Professional plumbing, pipe repairs, water heater installation."
  },
  {
    id: 2,
    name: "Chioma Beauty Salon",
    category: "walkin",
    service: "Hair & Beauty",
    rating: 4.9,
    reviews: 89,
    price: "From ₦2,000",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    lat: 6.6018,
    lng: 3.3515,
    address: "22 Admiralty Way, Lekki Phase 1",
    phone: "+234 802 345 6789",
    available: true,
    responseTime: "Walk-in",
    description: "Premium hair styling, manicure, pedicure and spa services."
  },
  {
    id: 3,
    name: "TechFix Gadgets",
    category: "walkin",
    service: "Phone & Laptop Repair",
    rating: 4.7,
    reviews: 210,
    price: "From ₦1,500",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    lat: 6.4654,
    lng: 3.4064,
    address: "Computer Village, Ikeja",
    phone: "+234 803 456 7890",
    available: true,
    responseTime: "Walk-in",
    description: "Screen replacement, battery, software issues for all brands."
  },
  {
    id: 4,
    name: "GreenClean Home Services",
    category: "home",
    service: "Deep Cleaning",
    rating: 4.6,
    reviews: 67,
    price: "From ₦8,000",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    lat: 6.4281,
    lng: 3.4219,
    address: "Victoria Island, Lagos",
    phone: "+234 804 567 8901",
    available: true,
    responseTime: "30 min",
    description: "Professional home and office deep cleaning services."
  },
  {
    id: 5,
    name: "PowerFix Electricians",
    category: "home",
    service: "Electrical Works",
    rating: 4.9,
    reviews: 156,
    price: "From ₦4,000",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    lat: 6.5480,
    lng: 3.3515,
    address: "Surulere, Lagos",
    phone: "+234 805 678 9012",
    available: true,
    responseTime: "20 min",
    description: "Wiring, generator installation, solar panel setup."
  },
  {
    id: 6,
    name: "FreshBite Kitchen",
    category: "walkin",
    service: "Local Restaurant",
    rating: 4.5,
    reviews: 312,
    price: "From ₦1,200",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    lat: 6.4474,
    lng: 3.3903,
    address: "Yaba, Lagos",
    phone: "+234 806 789 0123",
    available: true,
    responseTime: "Walk-in / Delivery",
    description: "Delicious local and continental dishes. Fast service."
  }
];

const MOCK_PRODUCTS = [
  {
    id: 101,
    name: "Samsung Galaxy A15",
    category: "Electronics",
    price: 185000,
    oldPrice: 210000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    seller: "TechHub Store",
    rating: 4.7,
    stock: 12,
    description: "6.5\" display, 128GB storage, 5000mAh battery"
  },
  {
    id: 102,
    name: "Nike Air Max",
    category: "Fashion",
    price: 45000,
    oldPrice: 55000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    seller: "SneakerWorld",
    rating: 4.8,
    stock: 8,
    description: "Comfortable running sneakers - Size 40-45"
  },
  {
    id: 103,
    name: "Portable Blender",
    category: "Home",
    price: 12500,
    oldPrice: 15000,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop",
    seller: "HomeEssentials",
    rating: 4.4,
    stock: 25,
    description: "USB rechargeable, perfect for smoothies on the go"
  },
  {
    id: 104,
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    price: 28000,
    oldPrice: 35000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    seller: "SoundMax",
    rating: 4.6,
    stock: 30,
    description: "ANC, 30hr battery, IPX5 waterproof"
  },
  {
    id: 105,
    name: "Organic Shea Butter (1kg)",
    category: "Beauty",
    price: 4500,
    oldPrice: 5500,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=300&fit=crop",
    seller: "NatureCare",
    rating: 4.9,
    stock: 50,
    description: "100% pure Nigerian shea butter, unrefined"
  },
  {
    id: 106,
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: 65000,
    oldPrice: 78000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    seller: "GadgetZone",
    rating: 4.5,
    stock: 15,
    description: "Heart rate, SpO2, GPS, 7-day battery"
  },
  {
    id: 107,
    name: "Ankara Fabric (6 yards)",
    category: "Fashion",
    price: 8500,
    oldPrice: 10000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop",
    seller: "AnkaraKing",
    rating: 4.7,
    stock: 40,
    description: "Premium quality African print fabric"
  },
  {
    id: 108,
    name: "Solar Power Bank 20000mAh",
    category: "Electronics",
    price: 18500,
    oldPrice: 22000,
    image: "https://images.unsplash.com/photo-1609091839311-b9e4a8b5c0b0?w=400&h=300&fit=crop",
    seller: "SolarTech",
    rating: 4.3,
    stock: 22,
    description: "Solar + USB-C fast charging, dual ports"
  }
];

const MOCK_RIDES = [
  { id: "R001", from: "Ikeja", to: "Lekki", status: "completed", fare: 2500, commission: 375, date: "2026-08-17" },
  { id: "R002", from: "Yaba", to: "Surulere", status: "completed", fare: 1800, commission: 270, date: "2026-08-17" },
  { id: "R003", from: "VI", to: "Ikoyi", status: "in-progress", fare: 1200, commission: 180, date: "2026-08-18" }
];

const MOCK_JOBS = [
  { id: "J001", type: "Plumbing", provider: "Adebayo Plumbing", customer: "John O.", amount: 7500, commission: 1125, status: "completed", date: "2026-08-16" },
  { id: "J002", type: "Deep Cleaning", provider: "GreenClean", customer: "Sarah A.", amount: 15000, commission: 2250, status: "completed", date: "2026-08-17" },
  { id: "J003", type: "Electrical", provider: "PowerFix", customer: "Mike T.", amount: 12000, commission: 1800, status: "in-progress", date: "2026-08-18" }
];

// ====================== STATE ======================
let currentUser = JSON.parse(localStorage.getItem('swiftUser')) || null;
let cart = JSON.parse(localStorage.getItem('swiftCart')) || [];
let commissionRate = parseFloat(localStorage.getItem('swiftCommission')) || 15; // default 15%

// ====================== UTILITIES ======================
function formatNaira(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

function saveCart() {
  localStorage.setItem('swiftCart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-count');
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function login(role = 'customer', name = 'Demo User') {
  currentUser = {
    id: Date.now(),
    name: name,
    role: role, // customer | provider | driver | admin
    email: role + '@swifthelp.ng',
    phone: '+234 800 000 0000'
  };
  localStorage.setItem('swiftUser', JSON.stringify(currentUser));
  showToast(`Logged in as ${role}`, 'success');
  setTimeout(() => location.reload(), 800);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('swiftUser');
  showToast('Logged out successfully', 'info');
  const homePath = window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html';
  setTimeout(() => location.href = homePath, 800);
}

function requireAuth(roles = []) {
  if (!currentUser) {
    showToast('Please login first', 'error');
    const loginPath = window.location.pathname.includes('/pages/') ? 'login.html' : 'pages/login.html';
    setTimeout(() => location.href = loginPath, 1000);
    return false;
  }
  if (roles.length && !roles.includes(currentUser.role)) {
    showToast('Access denied', 'error');
    return false;
  }
  return true;
}

// ====================== CART ======================
function addToCart(productId) {
  const product = MOCK_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Item removed', 'info');
  if (typeof renderCart === 'function') renderCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    if (typeof renderCart === 'function') renderCart();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function clearCart() {
  cart = [];
  saveCart();
}

// ====================== INIT ======================
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  
  // Update nav based on auth
  const authArea = document.getElementById('authArea');
  if (authArea) {
    const isInPages = window.location.pathname.includes('/pages/');
    const loginPath = isInPages ? 'login.html' : 'pages/login.html';
    const adminPath = isInPages ? '../admin.html' : 'admin.html';
    
    if (currentUser) {
      authArea.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-sm text-slate-600 hidden sm:inline">Hi, ${currentUser.name.split(' ')[0]}</span>
          <span class="badge badge-info text-xs">${currentUser.role}</span>
          ${currentUser.role === 'admin' ? `<a href="${adminPath}" class="text-sky-600 text-sm font-medium hover:underline">Admin</a>` : ''}
          <button onclick="logout()" class="text-sm text-red-500 hover:text-red-600 font-medium">Logout</button>
        </div>
      `;
    } else {
      authArea.innerHTML = `
        <a href="${loginPath}" class="btn-outline text-sm py-2 px-4">Login</a>
        <a href="${loginPath}?register=1" class="btn-primary text-sm py-2 px-4">Sign Up</a>
      `;
    }
  }
});

// Export for other scripts
window.SwiftHelp = {
  MOCK_PROVIDERS,
  MOCK_PRODUCTS,
  MOCK_RIDES,
  MOCK_JOBS,
  formatNaira,
  addToCart,
  removeFromCart,
  updateQty,
  getCartTotal,
  clearCart,
  showToast,
  login,
  logout,
  requireAuth,
  currentUser,
  cart,
  commissionRate,
  setCommission: (rate) => {
    commissionRate = rate;
    localStorage.setItem('swiftCommission', rate);
  }
};