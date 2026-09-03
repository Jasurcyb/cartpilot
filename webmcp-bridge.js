/**
 * WebMCP Specification Bridge & Registered Tools
 * Conforms to the emerging W3C / Chrome WebMCP Standard:
 * document.modelContext.registerTool({ name, description, inputSchema, execute })
 */

(function () {
  // Ensure document.modelContext exists (Native Chrome Canary / ChatGPT or Polyfill)
  if (!document.modelContext) {
    console.log("[WebMCP] Initializing document.modelContext polyfill container");
    document.modelContext = {
      tools: new Map(),
      registerTool: function (toolDef) {
        if (!toolDef || !toolDef.name || typeof toolDef.execute !== "function") {
          console.error("[WebMCP] Invalid tool definition", toolDef);
          return false;
        }
        this.tools.set(toolDef.name, toolDef);
        logTelemetry("system", `Registered tool: document.modelContext.registerTool('${toolDef.name}')`);
        renderRegisteredTools();
        return true;
      },
      callTool: async function (name, args) {
        const tool = this.tools.get(name);
        if (!tool) {
          throw new Error(`[WebMCP] Unknown tool: ${name}`);
        }
        logTelemetry("call", `AGENT_INVOKE: ${name}(${JSON.stringify(args || {})})`);
        try {
          const result = await tool.execute(args || {});
          logTelemetry("result", `AGENT_RETURN: ${JSON.stringify(result)}`);
          return result;
        } catch (err) {
          logTelemetry("warn", `AGENT_ERROR: ${err.message}`);
          throw err;
        }
      }
    };
  }

  // 1. Tool: search_products
  document.modelContext.registerTool({
    name: "search_products",
    description: "Search products in the catalog by keyword query, category, or maximum budget.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search keyword (e.g., 'keyboard', 'headphones')" },
        category: { type: "string", enum: ["all", "audio", "keyboard", "display", "ergonomics"] },
        maxPrice: { type: "number", description: "Upper budget cap in USD" }
      }
    },
    execute: async (input) => {
      const { query = "", category = "all", maxPrice = null } = input;
      const matched = window.StorefrontAPI.filterCatalog({ query, category, maxPrice });
      showAgentToast(`Agent searched catalog: "${query || category}" → found ${matched.length} items`);
      return {
        count: matched.length,
        items: matched.map(p => ({ id: p.id, name: p.name, price: p.price, category: p.category, inStock: p.inStock }))
      };
    }
  });

  // 2. Tool: filter_by_specs
  document.modelContext.registerTool({
    name: "filter_by_specs",
    description: "Apply visual filter constraints on the active storefront grid (budget, inStock, macOS).",
    inputSchema: {
      type: "object",
      properties: {
        maxPrice: { type: "number", description: "Maximum price filter" },
        inStockOnly: { type: "boolean", description: "Filter only available inventory" },
        macOSCompatible: { type: "boolean", description: "Filter for Mac Thunderbolt/Audio compatibility" }
      }
    },
    execute: async (input) => {
      const results = window.StorefrontAPI.applySpecs(input);
      showAgentToast(`Agent adjusted UI filters: Max $${input.maxPrice || 1500}, inStock=${input.inStockOnly ?? true}`);
      return {
        status: "success",
        visibleCount: results.length
      };
    }
  });

  // 3. Tool: check_compatibility
  document.modelContext.registerTool({
    name: "check_compatibility",
    description: "Verify technical compatibility between multiple hardware products (power, ports, ergonomics).",
    inputSchema: {
      type: "object",
      required: ["productIds"],
      properties: {
        productIds: {
          type: "array",
          items: { type: "string" },
          description: "Array of product IDs to test for setup synergy"
        }
      }
    },
    execute: async (input) => {
      const report = window.StorefrontAPI.verifyCompatibility(input.productIds);
      showAgentToast(`Agent verified compatibility: ${report.score}% synergy score (${report.verdict})`);
      return report;
    }
  });

  // 4. Tool: stage_cart_and_apply_coupon
  document.modelContext.registerTool({
    name: "stage_cart_and_apply_coupon",
    description: "Add a list of product IDs into the user's cart and optionally apply a promo code.",
    inputSchema: {
      type: "object",
      required: ["productIds"],
      properties: {
        productIds: { type: "array", items: { type: "string" } },
        couponCode: { type: "string", description: "Discount code (e.g., 'AGENT15')" }
      }
    },
    execute: async (input) => {
      const cartResult = window.StorefrontAPI.stageCart(input.productIds, input.couponCode);
      showAgentToast(`Agent staged ${input.productIds.length} items to cart. Applied: ${input.couponCode || 'None'}`);
      return cartResult;
    }
  });

  // 5. Tool: get_cart_summary
  document.modelContext.registerTool({
    name: "get_cart_summary",
    description: "Inspect the user's active shopping cart items, discounts, and total balance.",
    inputSchema: { type: "object", properties: {} },
    execute: async () => {
      return window.StorefrontAPI.getCartSummary();
    }
  });

})();

// Helpers for telemetry & UI
function logTelemetry(type, message) {
  const logEl = document.getElementById("telemetryLog");
  if (!logEl) return;
  const time = new Date().toLocaleTimeString().split(" ")[0];
  const div = document.createElement("div");
  div.className = `log-entry ${type}`;
  div.textContent = `[${time}] ${message}`;
  logEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
}

function clearTelemetry() {
  const logEl = document.getElementById("telemetryLog");
  if (logEl) logEl.innerHTML = '<div class="log-entry system">[SYSTEM] Log cleared. Ready for WebMCP tool calls.</div>';
}

function renderRegisteredTools() {
  const listEl = document.getElementById("registeredToolsList");
  if (!listEl || !document.modelContext) return;
  listEl.innerHTML = "";
  for (const [name, tool] of document.modelContext.tools.entries()) {
    const div = document.createElement("div");
    div.className = "tool-chip";
    div.innerHTML = `<span>${name}</span><span class="status">✓ live</span>`;
    listEl.appendChild(div);
  }
}

function showAgentToast(msg) {
  const banner = document.getElementById("agentBanner");
  const text = document.getElementById("agentBannerText");
  if (banner && text) {
    text.textContent = msg;
    banner.style.display = "flex";
    setTimeout(() => {
      banner.style.display = "none";
    }, 4500);
  }
}

// Global simulation helpers
window.simulateAgentSearch = async function () {
  await document.modelContext.callTool("search_products", {
    query: "noise-canceling",
    category: "audio",
    maxPrice: 400
  });
};

window.simulateAgentCompatibility = async function () {
  await document.modelContext.callTool("check_compatibility", {
    productIds: ["kbd-01", "aud-01", "mon-01"]
  });
};

window.simulateAgentBundle = async function () {
  await document.modelContext.callTool("stage_cart_and_apply_coupon", {
    productIds: ["kbd-01", "aud-01"],
    couponCode: "AGENT15"
  });
  const cartOverlay = document.getElementById("cartOverlay");
  if (cartOverlay) cartOverlay.classList.add("open");
};

window.resetStorefront = function () {
  window.StorefrontAPI.reset();
  showAgentToast("Storefront filters and cart restored to default state.");
  logTelemetry("system", "Storefront reset completed.");
};

// Autonomous Multi-Tool Agent Chains
window.runAutonomousChain = async function (chainId) {
  const dockBtn = document.getElementById("btnRunAgentPrompt");
  if (dockBtn) dockBtn.textContent = "Agent Working...";
  
  if (chainId === "silent_coder") {
    showAgentToast("🤖 [Step 1/3] Agent querying low-noise hardware for macOS...");
    await new Promise(r => setTimeout(r, 600));
    await document.modelContext.callTool("search_products", {
      query: "",
      category: "all"
    });

    showAgentToast("🤖 [Step 2/3] Agent running hardware compatibility analysis...");
    await new Promise(r => setTimeout(r, 700));
    const comp = await document.modelContext.callTool("check_compatibility", {
      productIds: ["kbd-02", "aud-02"]
    });
    
    // Attach synergy badges to cards
    const kbd = PRODUCTS.find(p => p.id === "kbd-02");
    if (kbd) kbd.synergyBadge = "Topre Silent Capacitive • Mac Verified";
    const aud = PRODUCTS.find(p => p.id === "aud-02");
    if (aud) aud.synergyBadge = "Dual ANC • 30hr Battery Synergy";
    renderProducts();

    showAgentToast("🤖 [Step 3/3] Staging bundle and applying WebMCP promo code (AGENT15)...");
    await new Promise(r => setTimeout(r, 800));
    await document.modelContext.callTool("stage_cart_and_apply_coupon", {
      productIds: ["kbd-02", "aud-02"],
      couponCode: "AGENT15"
    });
    
    const cartOverlay = document.getElementById("cartOverlay");
    if (cartOverlay) cartOverlay.classList.add("open");
    showAgentToast("✨ Multi-step agent workflow completed! Silent Mac setup staged.");
  }
  else if (chainId === "executive_5k") {
    showAgentToast("🤖 [Step 1/3] Filtering flagship curved displays and ergonomic seating...");
    await new Promise(r => setTimeout(r, 600));
    await document.modelContext.callTool("filter_by_specs", {
      inStockOnly: true,
      macOSCompatible: true
    });

    showAgentToast("🤖 [Step 2/3] Validating 140W Thunderbolt 4 host power synergy...");
    await new Promise(r => setTimeout(r, 700));
    await document.modelContext.callTool("check_compatibility", {
      productIds: ["mon-01", "ergo-01"]
    });

    const mon = PRODUCTS.find(p => p.id === "mon-01");
    if (mon) mon.synergyBadge = "140W Host PD & 5K Retina Synergy";
    const erg = PRODUCTS.find(p => p.id === "ergo-01");
    if (erg) erg.synergyBadge = "Medical Ergonomic Distribution";
    renderProducts();

    showAgentToast("🤖 [Step 3/3] Staging executive workstation bundle...");
    await new Promise(r => setTimeout(r, 800));
    await document.modelContext.callTool("stage_cart_and_apply_coupon", {
      productIds: ["mon-01", "ergo-01"],
      couponCode: "AGENT15"
    });
    const cartOverlay = document.getElementById("cartOverlay");
    if (cartOverlay) cartOverlay.classList.add("open");
  }
  else if (chainId === "budget_ergo") {
    showAgentToast("🤖 [Step 1/3] Locating high-value gear with tactile switches...");
    await new Promise(r => setTimeout(r, 600));
    await document.modelContext.callTool("search_products", {
      query: "Keychron",
      category: "all"
    });

    const kbd = PRODUCTS.find(p => p.id === "kbd-01");
    if (kbd) kbd.synergyBadge = "QMK/VIA Hot-Swap Certified";
    renderProducts();

    showAgentToast("🤖 [Step 2/2] Staging cart with student/dev discount...");
    await new Promise(r => setTimeout(r, 700));
    await document.modelContext.callTool("stage_cart_and_apply_coupon", {
      productIds: ["kbd-01"],
      couponCode: "AGENT15"
    });
    const cartOverlay = document.getElementById("cartOverlay");
    if (cartOverlay) cartOverlay.classList.add("open");
  }

  if (dockBtn) dockBtn.textContent = "Run Agent ➔";
};

window.handleAgentPromptSubmit = function () {
  const input = document.getElementById("agentPromptInput");
  const query = (input ? input.value : "").trim().toLowerCase();
  if (query.includes("silent") || query.includes("night") || query.includes("mac")) {
    runAutonomousChain("silent_coder");
  } else if (query.includes("5k") || query.includes("display") || query.includes("monitor") || query.includes("chair")) {
    runAutonomousChain("executive_5k");
  } else {
    runAutonomousChain("budget_ergo");
  }
};
