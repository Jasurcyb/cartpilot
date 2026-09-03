// Extensive Production-Grade Product Catalog Dataset (24 Hardware Items)
const PRODUCTS = [
  // --- Keyboards ---
  {
    id: "kbd-01",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    name: "Keychron Q1 Pro Wireless",
    category: "keyboard",
    price: 199.00,
    emoji: "⌨️",
    tag: "Hot-Swappable Aluminum",
    desc: "Custom mechanical keyboard with CNC aluminum body, Bluetooth 5.1 & QMK/VIA keymap programming.",
    macOS: true,
    inStock: true,
    brand: "Keychron",
    specs: "75% layout, Double-gasket mount, K Pro Banana/Red switches"
  },
  {
    id: "kbd-02",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
    name: "HHKB Professional HYBRID Type-S",
    category: "keyboard",
    price: 320.00,
    emoji: "⌨️",
    tag: "Topre Silent Capacitive",
    desc: "Legendary electrostatic capacitive Topre switches designed for developers, UNIX layout, near-silent tactile bottom-out.",
    macOS: true,
    inStock: true,
    brand: "HHKB",
    specs: "60% minimal layout, 45g actuation, Bluetooth + USB-C"
  },
  {
    id: "kbd-03",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
    name: "Logitech MX Mechanical Mini",
    category: "keyboard",
    price: 149.00,
    emoji: "⌨️",
    tag: "Low-Profile Quiet Click",
    desc: "Ultra-slim low-profile mechanical switches with smart backlighting, multi-device Flow pairing, and 15-day battery.",
    macOS: true,
    inStock: true,
    brand: "Logitech",
    specs: "Tactile Quiet switches, Bluetooth LE & Logi Bolt"
  },
  {
    id: "kbd-04",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80",
    name: "NuPhy Air75 V2 Ultra-Slim",
    category: "keyboard",
    price: 129.00,
    emoji: "⌨️",
    tag: "Travel Mechanical",
    desc: "World's thinnest QMK/VIA wireless mechanical keyboard engineered for on-the-go laptop top-docking.",
    macOS: true,
    inStock: true,
    brand: "NuPhy",
    specs: "1000Hz polling rate, Gateron Low-profile Cowberry switches"
  },
  {
    id: "kbd-05",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b909?auto=format&fit=crop&w=600&q=80",
    name: "Wooting 60HE+ Rapid Trigger",
    category: "keyboard",
    price: 175.00,
    emoji: "⌨️",
    tag: "Hall Effect Analog",
    desc: "Magnetic Hall-effect switches with 0.1mm adjustable actuation and instant Rapid Trigger reset for esports precision.",
    macOS: false,
    inStock: true,
    brand: "Wooting",
    specs: "Lekker linear magnetic switches, Tachyon mode 0.1ms"
  },

  // --- Audio & Acoustics ---
  {
    id: "aud-01",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    name: "Sennheiser HD 660S2 Studio",
    category: "audio",
    price: 499.00,
    emoji: "🎧",
    tag: "Audiophile Reference",
    desc: "Open-back dynamic headphones engineered for precision mastering, intimate spatial soundstage and 300-ohm impedance.",
    macOS: true,
    inStock: true,
    brand: "Sennheiser",
    specs: "Open-back, 300 Ohm impedance, 8 - 41,500 Hz, requires dedicated DAC/Amp"
  },
  {
    id: "aud-02",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    name: "Sony WH-1000XM5 Active ANC",
    category: "audio",
    price: 349.00,
    emoji: "🎧",
    tag: "Industry ANC Leader",
    desc: "Dual processor active noise cancellation with 30-hour battery, LDAC hi-res wireless, and multipoint Bluetooth pairing.",
    macOS: true,
    inStock: true,
    brand: "Sony",
    specs: "8-mic array, Auto NC Optimizer, 30h battery, USB-C PD fast charge"
  },
  {
    id: "aud-03",
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&q=80",
    name: "Apple AirPods Max",
    category: "audio",
    price: 549.00,
    emoji: "🎧",
    tag: "Spatial Audio Ecosystem",
    desc: "Computational audio powered by Apple H1 chips, dynamic head tracking, transparency mode, and anodized aluminum ear cups.",
    macOS: true,
    inStock: true,
    brand: "Apple",
    specs: "Custom dynamic driver, Active Noise Cancellation, Smart Case"
  },
  {
    id: "aud-04",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    name: "Shure SM7B Vocal Dynamic Mic",
    category: "audio",
    price: 399.00,
    emoji: "🎙️",
    tag: "Broadcast Studio Standard",
    desc: "Legendary cardioid dynamic microphone delivering warm, smooth vocal frequency reproduction with electromagnetic hum shielding.",
    macOS: true,
    inStock: true,
    brand: "Shure",
    specs: "XLR connection, requires minimum +60dB clean gain audio interface"
  },
  {
    id: "aud-05",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    name: "Elgato Wave XLR Audio Interface",
    category: "audio",
    price: 159.00,
    emoji: "🎛️",
    tag: "75dB Ultra-Low Noise Preamp",
    desc: "Compact USB-C audio interface with proprietary Clipguard anti-distortion technology, 75dB clean gain, and 48V phantom power.",
    macOS: true,
    inStock: true,
    brand: "Elgato",
    specs: "USB-C host connection, 24-bit/96kHz, capacitive mute"
  },

  // --- High-Refresh Displays ---
  {
    id: "mon-01",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    name: "Dell UltraSharp 40-inch Curved 5K",
    category: "display",
    price: 1799.00,
    emoji: "🖥️",
    tag: "Thunderbolt 4 Hub",
    desc: "5120 x 2160 IPS Black display with 140W power delivery, 120Hz refresh, 99% DCI-P3, and integrated 2.5GbE RJ45 Ethernet.",
    macOS: true,
    inStock: true,
    brand: "Dell",
    specs: "Thunderbolt 4 (140W upstream), 120Hz, ComfortView Plus"
  },
  {
    id: "mon-02",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    name: "LG UltraGear 27-inch OLED 240Hz",
    category: "display",
    price: 899.00,
    emoji: "🖥️",
    tag: "0.03ms Response",
    desc: "QHD 2560x1440 OLED gaming panel featuring true 0.03ms response time, 240Hz refresh, and HDR1000 Micro Lens Array.",
    macOS: false,
    inStock: true,
    brand: "LG",
    specs: "DisplayPort 1.4, HDMI 2.1, 98.5% DCI-P3, FreeSync Premium Pro"
  },
  {
    id: "mon-03",
    image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=600&q=80",
    name: "ASUS ROG Swift 32-inch 4K OLED",
    category: "display",
    price: 1299.00,
    emoji: "🖥️",
    tag: "ROG Flagship 240Hz",
    desc: "3840x2160 3rd-Gen QD-OLED panel with 240Hz refresh rate, custom graphene heatsink, 99% DCI-P3, and USB-C 90W PD.",
    macOS: true,
    inStock: true,
    brand: "ASUS",
    specs: "QD-OLED, 0.03ms, DisplayPort 2.1 ready, Dolby Vision"
  },
  {
    id: "mon-04",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    name: "Apple Studio Display 27-inch 5K",
    category: "display",
    price: 1599.00,
    emoji: "🖥️",
    tag: "Retina 5K True Tone",
    desc: "5120 x 2880 Retina display with 600 nits brightness, 12MP Ultra-Wide camera with Center Stage, and high-fidelity 6-speaker array.",
    macOS: true,
    inStock: true,
    brand: "Apple",
    specs: "Thunderbolt 3 (96W host charge), 3x USB-C ports, A13 Bionic inside"
  },
  {
    id: "mon-05",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    name: "BenQ ScreenBar Halo Desk Light",
    category: "display",
    price: 179.00,
    emoji: "💡",
    tag: "Zero Screen Glare",
    desc: "Intelligent monitor-mounted light bar with ambient back-lighting, wireless rotary dial, and auto-dimming light sensor.",
    macOS: true,
    inStock: true,
    brand: "BenQ",
    specs: "Fits flat and curved monitors 1000R-1800R, USB powered"
  },

  // --- Ergonomic Setup & Docks ---
  {
    id: "ergo-01",
    image: "https://images.unsplash.com/photo-1580481077194-e883984d5df3?auto=format&fit=crop&w=600&q=80",
    name: "Herman Miller Embody Gaming",
    category: "ergonomics",
    price: 1695.00,
    emoji: "💺",
    tag: "Spinal Pressure Distribution",
    desc: "Engineered with 30+ physicians and biomechanics experts to stimulate blood flow, lumbar alignment, and active sitting posture.",
    macOS: true,
    inStock: true,
    brand: "Herman Miller",
    specs: "Pixelated Support matrix, copper-infused cooling foam, 12-year warranty"
  },
  {
    id: "ergo-02",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=600&q=80",
    name: "Steelcase Gesture Ergonomic Chair",
    category: "ergonomics",
    price: 1420.00,
    emoji: "💺",
    tag: "360-Degree Arm Movement",
    desc: "Designed around modern smartphone and multi-monitor postures with patented Core Equalizer and 360-degree articulating arms.",
    macOS: true,
    inStock: true,
    brand: "Steelcase",
    specs: "Supports 400 lbs, pneumatic cylinder, 3D knit textile"
  },
  {
    id: "ergo-03",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80",
    name: "Fully Jarvis Bamboo Standing Desk",
    category: "ergonomics",
    price: 749.00,
    emoji: "🪵",
    tag: "Dual-Motor Electric Lift",
    desc: "Sustainably harvested solid bamboo desktop with dual heavy-duty motors, 350 lbs lifting capacity, and OLED programmable presets.",
    macOS: true,
    inStock: true,
    brand: "Fully",
    specs: "Height range 24.5 - 50 inches, 3-stage steel frame"
  },
  {
    id: "ergo-04",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=600&q=80",
    name: "Grovemade Solid Walnut Desk Shelf",
    category: "ergonomics",
    price: 280.00,
    emoji: "🪵",
    tag: "Solid American Hardwood",
    desc: "Dual-level ergonomic monitor riser crafted from American Black Walnut with 5052 aluminum shelf and natural merino wool felt.",
    macOS: true,
    inStock: true,
    brand: "Grovemade",
    specs: "Supports up to 50 lbs dual monitors, 46-inch width"
  },
  {
    id: "ergo-05",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    name: "Logitech MX Master 3S Mouse",
    category: "ergonomics",
    price: 99.00,
    emoji: "🖱️",
    tag: "Quiet Click 8K DPI",
    desc: "Ergonomic sculpted thumb-rest mouse with MagSpeed electromagnetic scrolling (1000 lines/sec) and 8K DPI optical glass tracking.",
    macOS: true,
    inStock: true,
    brand: "Logitech",
    specs: "90% quieter clicks, USB-C quick charge, 70-day battery"
  },
  {
    id: "ergo-06",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80",
    name: "CalDigit TS4 Thunderbolt 4 Dock",
    category: "ergonomics",
    price: 399.00,
    emoji: "🔌",
    tag: "18-Port Host Hub 98W",
    desc: "The ultimate single-cable workstation dock featuring 18 ports, dual 6K display support, 2.5GbE Ethernet, and 98W host charging.",
    macOS: true,
    inStock: true,
    brand: "CalDigit",
    specs: "3x Thunderbolt 4 ports, 5x USB-A, 3x USB-C, UHS-II SD/microSD"
  }
];

// Active State with LocalStorage Persistence
let currentCategory = "all";
let currentMaxPrice = 2500;
let currentInStockOnly = false;
let currentMacOnly = false;
let currentSearchQuery = "";
let cart = [];
let appliedCoupon = null;

function loadStoredState() {
  try {
    const savedCart = localStorage.getItem("cartpilot_cart");
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
    const savedCoupon = localStorage.getItem("cartpilot_coupon");
    if (savedCoupon) {
      appliedCoupon = JSON.parse(savedCoupon);
    }
  } catch (e) {
    console.warn("Could not load stored state", e);
  }
}

function saveStoredState() {
  try {
    localStorage.setItem("cartpilot_cart", JSON.stringify(cart));
    if (appliedCoupon) {
      localStorage.setItem("cartpilot_coupon", JSON.stringify(appliedCoupon));
    } else {
      localStorage.removeItem("cartpilot_coupon");
    }
  } catch (e) {
    console.warn("Could not save state", e);
  }
}

// Storefront API exposed for WebMCP Bridge
window.StorefrontAPI = {
  filterCatalog: function ({ query, category, maxPrice }) {
    if (query !== undefined) currentSearchQuery = query.toLowerCase();
    if (category !== undefined) currentCategory = category;
    if (maxPrice !== null && maxPrice !== undefined) currentMaxPrice = Number(maxPrice);
    renderProducts();
    syncUIInputs();
    return getFilteredProducts();
  },

  applySpecs: function ({ maxPrice, inStockOnly, macOSCompatible }) {
    if (maxPrice !== undefined) currentMaxPrice = Number(maxPrice);
    if (inStockOnly !== undefined) currentInStockOnly = Boolean(inStockOnly);
    if (macOSCompatible !== undefined) currentMacOnly = Boolean(macOSCompatible);
    renderProducts();
    syncUIInputs();
    return getFilteredProducts();
  },

  verifyCompatibility: function (productIds) {
    const selected = PRODUCTS.filter(p => productIds.includes(p.id));
    const issues = [];
    const synergies = [];

    const hasHighPowerDisplay = selected.some(p => p.id === "mon-01");
    const hasHighEndMic = selected.some(p => p.id === "aud-04"); // Shure SM7B
    const hasAudioInterface = selected.some(p => p.id === "aud-05"); // Elgato Wave XLR
    const hasStudioHeadphones = selected.some(p => p.id === "aud-01"); // 300 Ohm Sennheiser

    // Intelligent Pinpoint Invariant 1: XLR Microphone requires audio interface
    if (hasHighEndMic && !hasAudioInterface) {
      issues.push("Shure SM7B is an XLR mic and requires an audio interface (+60dB gain) like Elgato Wave XLR.");
    } else if (hasHighEndMic && hasAudioInterface) {
      synergies.push("Shure SM7B + Elgato Wave XLR: Perfect 75dB broadcast audio gain match.");
    }

    // Intelligent Pinpoint Invariant 2: High Impedance 300-Ohm Headphone
    if (hasStudioHeadphones && !hasAudioInterface) {
      issues.push("Sennheiser HD 660S2 (300 Ohm) needs a dedicated DAC/Amp for optimal acoustic headroom.");
    }

    // Intelligent Pinpoint Invariant 3: Single-cable 140W Host PD
    if (hasHighPowerDisplay && selected.length >= 2) {
      synergies.push("Dell 40-inch provides 140W Thunderbolt 4 pass-through power, eliminating extra laptop chargers.");
    }

    const score = issues.length === 0 ? 98 : (issues.length === 1 ? 84 : 65);
    return {
      score,
      verdict: issues.length === 0 ? "Perfect Hardware Synergy" : "Hardware Note Detected",
      selectedItems: selected.map(p => p.name),
      synergies,
      issues
    };
  },

  stageCart: function (productIds, couponCode) {
    cart = [];
    productIds.forEach(id => {
      const p = PRODUCTS.find(item => item.id === id);
      if (p) cart.push({ ...p });
    });
    if (couponCode && couponCode.toUpperCase() === "AGENT15") {
      appliedCoupon = { code: "AGENT15", percent: 0.15 };
    }
    saveStoredState();
    updateCartUI();
    return this.getCartSummary();
  },

  getCartSummary: function () {
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const discount = appliedCoupon ? subtotal * appliedCoupon.percent : 0;
    const total = subtotal - discount;
    return {
      itemCount: cart.length,
      items: cart.map(i => ({ id: i.id, name: i.name, price: i.price })),
      subtotal,
      discount,
      total,
      appliedCoupon: appliedCoupon ? appliedCoupon.code : null
    };
  },

  reset: function () {
    currentCategory = "all";
    currentMaxPrice = 2500;
    currentInStockOnly = false;
    currentMacOnly = false;
    currentSearchQuery = "";
    cart = [];
    appliedCoupon = null;
    PRODUCTS.forEach(p => delete p.synergyBadge);
    saveStoredState();
    renderProducts();
    updateCartUI();
    syncUIInputs();
  }
};

function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchCat = currentCategory === "all" || p.category === currentCategory;
    const matchPrice = p.price <= currentMaxPrice;
    const matchStock = !currentInStockOnly || p.inStock;
    const matchMac = !currentMacOnly || p.macOS;
    const matchQuery = !currentSearchQuery || 
      p.name.toLowerCase().includes(currentSearchQuery) ||
      p.desc.toLowerCase().includes(currentSearchQuery) ||
      (p.brand && p.brand.toLowerCase().includes(currentSearchQuery)) ||
      (p.tag && p.tag.toLowerCase().includes(currentSearchQuery));
    return matchCat && matchPrice && matchStock && matchMac;
  });
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const countLabel = document.getElementById("itemCount");
  if (!grid) return;

  const items = getFilteredProducts();
  countLabel.textContent = `Showing ${items.length} of ${PRODUCTS.length} hardware products`;
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #9ca3af;">
      <p style="font-size: 1.25rem;">No products match current agent criteria.</p>
      <button class="sim-btn" onclick="window.StorefrontAPI.reset()" style="margin-top: 1rem; display: inline-block;">↺ Reset Storefront Filters</button>
    </div>`;
    return;
  }

  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.id = `card-${p.id}`;
    card.innerHTML = `
      <div class="product-image-container">
        <span class="product-tag">${p.tag}</span>
        <img src="${p.image}" alt="${p.name}" class="product-real-img" loading="lazy" />
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        ${p.synergyBadge ? `<div class="synergy-badge">✓ ${p.synergyBadge}</div>` : ''}
        <div class="product-meta">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <button class="add-btn" onclick="addToCart('${p.id}')">+ Add to Cart</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function syncUIInputs() {
  const priceRange = document.getElementById("priceRange");
  const priceDisplay = document.getElementById("priceDisplay");
  if (priceRange) priceRange.value = currentMaxPrice;
  if (priceDisplay) priceDisplay.textContent = `$${currentMaxPrice.toLocaleString()}`;

  const inStockCheck = document.getElementById("inStockCheck");
  if (inStockCheck) inStockCheck.checked = currentInStockOnly;

  const macCheck = document.getElementById("macCheck");
  if (macCheck) macCheck.checked = currentMacOnly;

  const searchInput = document.getElementById("searchInput");
  if (searchInput && currentSearchQuery) searchInput.value = currentSearchQuery;

  const catItems = document.querySelectorAll("#categoryList li");
  catItems.forEach(li => {
    if (li.dataset.cat === currentCategory) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
}

function addToCart(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (p) {
    cart.push({ ...p });
    saveStoredState();
    updateCartUI();
    const overlay = document.getElementById("cartOverlay");
    if (overlay) overlay.classList.add("open");
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveStoredState();
  updateCartUI();
}

function updateCartUI() {
  const cartBadge = document.getElementById("cartCountBadge");
  const cartList = document.getElementById("cartItemsList");
  const subtotalDisplay = document.getElementById("subtotalDisplay");
  const discountRow = document.getElementById("discountRow");
  const discountDisplay = document.getElementById("discountDisplay");
  const totalDisplay = document.getElementById("totalDisplay");

  if (cartBadge) cartBadge.textContent = cart.length;

  if (!cartList) return;
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = '<p class="empty-cart-msg">Your cart is empty. Pick items manually or let your AI agent stage a bundle.</p>';
  } else {
    cart.forEach((item, idx) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-thumb-img" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${idx})">&times;</button>
      `;
      cartList.appendChild(div);
    });
  }

  const subtotal = cart.reduce((acc, i) => acc + i.price, 0);
  const discount = appliedCoupon ? subtotal * appliedCoupon.percent : 0;
  const total = subtotal - discount;

  if (subtotalDisplay) subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
  if (discountDisplay) discountDisplay.textContent = `-$${discount.toFixed(2)}`;
  if (totalDisplay) totalDisplay.textContent = `$${total.toFixed(2)}`;

  if (discountRow) {
    discountRow.style.display = appliedCoupon ? "flex" : "none";
  }

  // Reflect coupon in input box and button
  const couponInput = document.getElementById("couponInput");
  const applyCouponBtn = document.getElementById("applyCouponBtn");
  if (couponInput && applyCouponBtn) {
    if (appliedCoupon) {
      couponInput.value = appliedCoupon.code;
      couponInput.style.borderColor = "#10b981";
      applyCouponBtn.textContent = "Applied ✓";
      applyCouponBtn.style.background = "#10b981";
    } else {
      couponInput.value = "";
      couponInput.style.borderColor = "";
      applyCouponBtn.textContent = "Apply";
      applyCouponBtn.style.background = "";
    }
  }
}

function checkoutAction() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  alert(`Order confirmed! Total: $${(cart.reduce((a,b)=>a+b.price,0) * (appliedCoupon ? 0.85 : 1)).toFixed(2)}. Thank you for testing WebMCP CartPilot!`);
  cart = [];
  appliedCoupon = null;
  updateCartUI();
  document.getElementById("cartOverlay").classList.remove("open");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  loadStoredState();
  renderProducts();
  updateCartUI();
  if (typeof renderRegisteredTools === "function") {
    renderRegisteredTools();
  }

  // Search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase();
      renderProducts();
    });
  }

  // Price Range
  const priceRange = document.getElementById("priceRange");
  const priceDisplay = document.getElementById("priceDisplay");
  if (priceRange) {
    priceRange.addEventListener("input", (e) => {
      currentMaxPrice = Number(e.target.value);
      if (priceDisplay) priceDisplay.textContent = `$${currentMaxPrice.toLocaleString()}`;
      renderProducts();
    });
  }

  // InStock & Mac Checkboxes
  const inStockCheck = document.getElementById("inStockCheck");
  if (inStockCheck) {
    inStockCheck.addEventListener("change", (e) => {
      currentInStockOnly = e.target.checked;
      renderProducts();
    });
  }

  const macCheck = document.getElementById("macCheck");
  if (macCheck) {
    macCheck.addEventListener("change", (e) => {
      currentMacOnly = e.target.checked;
      renderProducts();
    });
  }

  // Categories
  const catItems = document.querySelectorAll("#categoryList li");
  catItems.forEach(li => {
    li.addEventListener("click", () => {
      catItems.forEach(i => i.classList.remove("active"));
      li.classList.add("active");
      currentCategory = li.dataset.cat;
      renderProducts();
    });
  });

  // Cart Drawer
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartOverlay = document.getElementById("cartOverlay");

  if (cartToggleBtn && cartOverlay) {
    cartToggleBtn.addEventListener("click", () => cartOverlay.classList.add("open"));
  }
  if (cartCloseBtn && cartOverlay) {
    cartCloseBtn.addEventListener("click", () => cartOverlay.classList.remove("open"));
  }
  if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
      if (e.target === cartOverlay) cartOverlay.classList.remove("open");
    });
  }

  // Coupon apply
  const applyCouponBtn = document.getElementById("applyCouponBtn");
  const couponInput = document.getElementById("couponInput");
  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener("click", () => {
      const code = couponInput.value.trim().toUpperCase();
      if (code === "AGENT15") {
        appliedCoupon = { code: "AGENT15", percent: 0.15 };
        saveStoredState();
        updateCartUI();
        alert("Coupon AGENT15 applied! 15% discount active.");
      } else {
        alert("Invalid coupon code. Try AGENT15.");
      }
    });
  }
});
