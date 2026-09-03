// Product Catalog Dataset
const PRODUCTS = [
  {
    id: "kbd-01",
    name: "Keychron Q1 Pro Wireless",
    category: "keyboard",
    price: 199.00,
    emoji: "⌨️",
    tag: "Hot-Swappable",
    desc: "Custom mechanical keyboard with aluminum body, wireless Bluetooth 5.1 & QMK/VIA support.",
    macOS: true,
    inStock: true
  },
  {
    id: "kbd-02",
    name: "HHKB Professional HYBRID Type-S",
    category: "keyboard",
    price: 320.00,
    emoji: "⌨️",
    tag: "Topre Silent",
    desc: "Legendary electrostatic capacitive Topre switches designed for programmers and minimalists.",
    macOS: true,
    inStock: true
  },
  {
    id: "aud-01",
    name: "Sennheiser HD 660S2 Studio",
    category: "audio",
    price: 499.00,
    emoji: "🎧",
    tag: "Audiophile Reference",
    desc: "Open-back dynamic headphones engineered for precision mastering and acoustic intimacy.",
    macOS: true,
    inStock: true
  },
  {
    id: "aud-02",
    name: "Sony WH-1000XM5 Active ANC",
    category: "audio",
    price: 349.00,
    emoji: "🎧",
    tag: "Industry ANC Leader",
    desc: "Dual processor active noise cancellation with 30-hour battery and crystal clear multipoint call audio.",
    macOS: true,
    inStock: true
  },
  {
    id: "mon-01",
    name: "Dell UltraSharp 40" Curved 5K",
    category: "display",
    price: 1799.00,
    emoji: "🖥️",
    tag: "Thunderbolt 4 Hub",
    desc: "5120 x 2160 IPS Black display with 140W power delivery, 99% DCI-P3, and built-in RJ45 Ethernet.",
    macOS: true,
    inStock: true
  },
  {
    id: "mon-02",
    name: "LG UltraGear 27" OLED 240Hz",
    category: "display",
    price: 899.00,
    emoji: "🖥️",
    tag: "0.03ms Response",
    desc: "QHD OLED gaming panel featuring true 0.03ms response time and HDR1000 Micro Lens Array.",
    macOS: false,
    inStock: true
  },
  {
    id: "ergo-01",
    name: "Herman Miller Embody Gaming",
    category: "ergonomics",
    price: 1695.00,
    emoji: "💺",
    tag: "Pressure Distribution",
    desc: "Ergonomic chair engineered with physicians to enhance blood circulation and spinal alignment.",
    macOS: true,
    inStock: true
  },
  {
    id: "ergo-02",
    name: "Fully Jarvis Bamboo Standing Desk",
    category: "ergonomics",
    price: 749.00,
    emoji: "🪵",
    tag: "Electric Dual-Motor",
    desc: "Solid sustainable bamboo desktop with 350 lbs lifting capacity and OLED programmable presets.",
    macOS: true,
    inStock: false
  }
];

// Active State
let currentCategory = "all";
let currentMaxPrice = 1500;
let currentInStockOnly = true;
let currentMacOnly = false;
let currentSearchQuery = "";
let cart = [];
let appliedCoupon = null;

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
    const hasHighPowerDisplay = selected.some(p => p.id === "mon-01");
    const hasMacAudio = selected.some(p => p.macOS);
    const issues = [];

    if (hasHighPowerDisplay && selected.length > 2) {
      issues.push("Requires minimum 100W Thunderbolt 4 host port for simultaneous display + dock.");
    }
    const score = issues.length === 0 ? 98 : 82;
    return {
      score,
      verdict: issues.length === 0 ? "Perfect Hardware Synergy" : "Verified with Port Note",
      selectedItems: selected.map(p => p.name),
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
    currentMaxPrice = 1500;
    currentInStockOnly = false;
    currentMacOnly = false;
    currentSearchQuery = "";
    cart = [];
    appliedCoupon = null;
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
      p.desc.toLowerCase().includes(currentSearchQuery);
    return matchCat && matchPrice && matchStock && matchMac;
  });
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const countLabel = document.getElementById("itemCount");
  if (!grid) return;

  const items = getFilteredProducts();
  countLabel.textContent = `Showing ${items.length} of ${PRODUCTS.length} products`;
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #9ca3af;">
      <p style="font-size: 1.25rem;">No products match current agent criteria.</p>
      <button class="sim-btn" onclick="resetStorefront()" style="margin-top: 1rem; display: inline-block;">Reset Filters</button>
    </div>`;
    return;
  }

  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.id = `card-${p.id}`;
    card.innerHTML = `
      <div class="product-image">
        <span class="product-tag">${p.tag}</span>
        <span>${p.emoji}</span>
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
    updateCartUI();
    const overlay = document.getElementById("cartOverlay");
    if (overlay) overlay.classList.add("open");
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
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
        <span>${item.emoji}</span>
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
  renderProducts();
  updateCartUI();
  renderRegisteredTools();

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
        updateCartUI();
        alert("Coupon AGENT15 applied! 15% discount active.");
      } else {
        alert("Invalid coupon code. Try AGENT15.");
      }
    });
  }
});
