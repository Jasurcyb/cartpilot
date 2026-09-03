# ⚡ CartPilot — The Agent-Native WebMCP Storefront

> **Where people and their AI browser agents shop together using the open WebMCP standard.**

[![WebMCP Standard](https://img.shields.io/badge/W3C_Spec-WebMCP-06b6d4?style=for-the-badge)](https://webmachinelearning.github.io/webmcp/)
[![Chrome AI Flag](https://img.shields.io/badge/Chrome_Flag-enable--webmcp--testing-4285F4?style=for-the-badge&logo=googlechrome)](chrome://flags/#enable-webmcp-testing)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🎯 Executive Summary & The WebMCP Vision

Traditional web browsing leaves AI agents guessing: they scrape brittle HTML class names, guess coordinates from screenshots, and hallucinate button clicks. A single CSS tweak breaks the agent's workflow.

**CartPilot** represents the future of the agent-native web. Built for **The WebMCP Challenge**, CartPilot exposes structured, high-performance client tools directly to the browser runtime via `document.modelContext.registerTool`. 

Instead of treating the web as static pixels to parse, the browser's native agent (in ChatGPT's in-app browser or Google Chrome Canary) interacts with the application via deterministic, structured API contracts.

---

## ✨ Registered WebMCP Tools

CartPilot registers five structured tools directly into `document.modelContext`:

```javascript
// 1. Search Catalog
document.modelContext.registerTool({
  name: "search_products",
  description: "Search products in the catalog by keyword query, category, or maximum budget.",
  inputSchema: { ... },
  execute: async (input) => { ... }
});

// 2. Adjust Visual UI Filters
document.modelContext.registerTool({
  name: "filter_by_specs",
  description: "Apply visual filter constraints on the active storefront grid (budget, inStock, macOS).",
  inputSchema: { ... },
  execute: async (input) => { ... }
});

// 3. Technical Hardware Compatibility Check
document.modelContext.registerTool({
  name: "check_compatibility",
  description: "Verify technical compatibility between multiple hardware products (power, ports, ergonomics).",
  inputSchema: { ... },
  execute: async (input) => { ... }
});

// 4. Stage Bundle & Apply Discounts
document.modelContext.registerTool({
  name: "stage_cart_and_apply_coupon",
  description: "Add a list of product IDs into the user's cart and optionally apply a promo code.",
  inputSchema: { ... },
  execute: async (input) => { ... }
});

// 5. Query Cart Summary
document.modelContext.registerTool({
  name: "get_cart_summary",
  description: "Inspect the user's active shopping cart items, discounts, and total balance.",
  inputSchema: { ... },
  execute: async () => { ... }
});
```

---

## 🚀 How to Test & Experience WebMCP

### Method 1: Google Chrome (Official WebMCP Testing Flag)
1. Open Google Chrome (v128+ or Canary).
2. Navigate to `chrome://flags/#enable-webmcp-testing` and select **Enabled**.
3. Relaunch Chrome and navigate to the deployed URL.
4. Your browser AI agent now has full, direct access to all registered tools in `document.modelContext`.

### Method 2: ChatGPT In-App Browser
1. Share the deployed link into a conversation with ChatGPT.
2. Tell ChatGPT: *"Open this store and find me an audiophile headphone setup under $400, then stage it in my cart with coupon AGENT15."*
3. ChatGPT invokes the WebMCP tools directly without scraping DOM!

### Method 3: Built-In WebMCP Live Inspector (Any Browser)
The app includes an on-screen **WebMCP Tool Console & Telemetry Stream** on the right side. You can click the pre-configured simulation triggers to observe the exact JSON payloads, execution telemetry, and visual UI responses in real time.

---

## 🛠️ Architecture & Tech Stack

- **Zero-Dependency Core:** Pure ES modules, semantic HTML5, and modern CSS variables. Loads in <100ms.
- **WebMCP Compliant:** Strict adherence to the W3C WebMCP schema specification.
- **Deployment Ready:** Ships with `vercel.json` for 1-click deployment on Vercel, Netlify, or Cloudflare Pages.

---

## 📄 License

MIT License. Built for The WebMCP Challenge 2026.
