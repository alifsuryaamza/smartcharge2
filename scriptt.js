// ==========================
// script.js - Full project (FINAL, merged)
// ==========================

// --------------------------
// (1) FULL phones dataset (fast-capable)
// --------------------------
const phones = {
  "Samsung": [
    { model:"Galaxy A03", battery:5000, maxWatt:7.8, defaultCharger:7.8 },
    { model:"Galaxy A04", battery:5000, maxWatt:15, defaultCharger:15 },
    { model:"Galaxy A05", battery:5000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy A14", battery:5000, maxWatt:15, defaultCharger:15 },
    { model:"Galaxy A24", battery:5000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy A34", battery:5000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy A54", battery:5000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy A74", battery:5000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy M12", battery:6000, maxWatt:15, defaultCharger:15 },
    { model:"Galaxy M14", battery:6000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy M34", battery:6000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy M54", battery:6000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S20", battery:4000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S20 FE", battery:4500, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S21", battery:4000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S21 FE", battery:4500, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S22", battery:3700, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S22+", battery:4500, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy S22 Ultra", battery:5000, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy S23", battery:3900, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S23+", battery:4700, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy S23 Ultra", battery:5000, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy S23 FE", battery:4500, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S24", battery:4000, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy S24+", battery:4900, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy S24 Ultra", battery:5000, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy S25", battery:4200, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy S25+", battery:4900, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy S25 Ultra", battery:5000, maxWatt:45, defaultCharger:45 },
    { model:"Galaxy Z Flip 3", battery:3300, maxWatt:15, defaultCharger:15 },
    { model:"Galaxy Z Flip 4", battery:3700, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy Z Flip 5", battery:3700, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy Z Fold 3", battery:4400, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy Z Fold 4", battery:4400, maxWatt:25, defaultCharger:25 },
    { model:"Galaxy Z Fold 5", battery:4400, maxWatt:25, defaultCharger:25 }
  ],
  "Xiaomi": [
    { model:"Redmi 9A", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"Redmi 9C", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"Redmi 10C", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"Redmi Note 8", battery:4000, maxWatt:18, defaultCharger:18},
    { model:"Redmi Note 9", battery:5020, maxWatt:18, defaultCharger:18 },
    { model:"Redmi Note 10", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Redmi Note 11", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Redmi Note 12", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Redmi Note 12 Pro", battery:5020, maxWatt:67, defaultCharger:67 },
    { model:"Redmi Note 13", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Redmi Note 13 Pro", battery:5100, maxWatt:67, defaultCharger:67 },
    { model:"Xiaomi 11T", battery:5000, maxWatt:67, defaultCharger:67 },
    { model:"Xiaomi 11T Pro", battery:5000, maxWatt:120, defaultCharger:120 },
    { model:"Xiaomi 12", battery:4500, maxWatt:67, defaultCharger:67 },
    { model:"Xiaomi 12 Pro", battery:4600, maxWatt:120, defaultCharger:120 },
    { model:"Xiaomi 13", battery:4500, maxWatt:67, defaultCharger:67 },
    { model:"Xiaomi 13 Pro", battery:4820, maxWatt:120, defaultCharger:120 },
    { model:"Xiaomi 14", battery:4700, maxWatt:90, defaultCharger:90 },
    { model:"Poco M3", battery:6000, maxWatt:18, defaultCharger:18 },
    { model:"Poco M4", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"Poco M5", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"Poco X3 NFC", battery:5160, maxWatt:33, defaultCharger:33 },
    { model:"Poco X4 Pro", battery:5000, maxWatt:67, defaultCharger:67 },
    { model:"Poco X5", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Poco X5 Pro", battery:5000, maxWatt:67, defaultCharger:67 },
    { model:"Poco F3", battery:4520, maxWatt:33, defaultCharger:33 },
    { model:"Poco F4", battery:4500, maxWatt:67, defaultCharger:67 },
    { model:"Poco F5", battery:5000, maxWatt:68, defaultCharger:68 },
    { model:"Poco F5 Pro", battery:5160, maxWatt:120, defaultCharger:120 },
    { model:"Poco X6", battery:5100, maxWatt:33, defaultCharger:33 },
    { model:"Poco X6 Pro", battery:5000, maxWatt:67, defaultCharger:67 }
  ],
  "Oppo": [
    { model:"A16", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"A17", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"A57", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"A77", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Reno 6", battery:4300, maxWatt:65, defaultCharger:65 },
    { model:"Reno 7", battery:4500, maxWatt:65, defaultCharger:65 },
    { model:"Reno 8", battery:4500, maxWatt:80, defaultCharger:80 },
    { model:"Reno 9", battery:4600, maxWatt:67, defaultCharger:67 },
    { model:"Reno 10", battery:4600, maxWatt:80, defaultCharger:80 },
    { model:"Find X3 Pro", battery:4500, maxWatt:65, defaultCharger:65 },
    { model:"Find X5 Pro", battery:5000, maxWatt:80, defaultCharger:80 },
    { model:"A78", battery:5000, maxWatt:67, defaultCharger:67 },
    { model:"A96", battery:5000, maxWatt:67, defaultCharger:67 }
  ],
  "Vivo": [
    { model:"Y12", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"Y21", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"Y27", battery:5000, maxWatt:44, defaultCharger:44 },
    { model:"Y33s", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"T1 5G", battery:5000, maxWatt:44, defaultCharger:44 },
    { model:"T2", battery:5000, maxWatt:44, defaultCharger:44 },
    { model:"V21", battery:4000, maxWatt:33, defaultCharger:33 },
    { model:"V23", battery:4200, maxWatt:44, defaultCharger:44 },
    { model:"V25", battery:4500, maxWatt:44, defaultCharger:44 },
    { model:"V27", battery:4600, maxWatt:66, defaultCharger:66 },
    { model:"X70", battery:4400, maxWatt:44, defaultCharger:44 },
    { model:"X80", battery:4500, maxWatt:80, defaultCharger:80 },
    { model:"X90", battery:4600, maxWatt:80, defaultCharger:80 }
  ],
  "Realme": [
    { model:"C11", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"C21Y", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"C30", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"C35", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"Narzo 50", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Narzo 60", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Realme 9 Pro", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Realme 10", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Realme 11 Pro", battery:5000, maxWatt:67, defaultCharger:67 },
    { model:"Realme GT Neo 3", battery:4500, maxWatt:150, defaultCharger:150 },
    { model:"Realme GT 2 Pro", battery:5000, maxWatt:65, defaultCharger:65 }
  ],
  "Infinix": [
    { model:"Hot 12", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"Hot 20", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"Hot 30", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Hot 40", battery:5000, maxWatt:18, defaultCharger:18 },
    { model:"Note 11", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Note 12", battery:5000, maxWatt:33, defaultCharger:33 },
    { model:"Note 30", battery:5000, maxWatt:45, defaultCharger:45 },
    { model:"Note 40", battery:5000, maxWatt:45, defaultCharger:45 },
    { model:"Zero 20", battery:4500, maxWatt:45, defaultCharger:45 },
    { model:"Zero 30", battery:5000, maxWatt:68, defaultCharger:68 },
    { model:"GT 10 Pro", battery:5000, maxWatt:45, defaultCharger:45 },
    { model:"GT 20 Pro", battery:5000, maxWatt:45, defaultCharger:45 }
  ],
  "iPhone": [
    { model:"iPhone 8", battery:1821, maxWatt:18, defaultCharger:5 },
    { model:"iPhone X", battery:2716, maxWatt:18, defaultCharger:5 },
    { model:"iPhone XR", battery:2942, maxWatt:18, defaultCharger:5 },
    { model:"iPhone 11", battery:3110, maxWatt:18, defaultCharger:5 },
    { model:"iPhone 12 mini", battery:2227, maxWatt:12, defaultCharger:20 },
    { model:"iPhone 12", battery:2815, maxWatt:20, defaultCharger:20 },
    { model:"iPhone 12 Pro", battery:2815, maxWatt:20, defaultCharger:20 },
    { model:"iPhone 12 Pro Max", battery:3687, maxWatt:20, defaultCharger:20 },
    { model:"iPhone 13 mini", battery:2406, maxWatt:18, defaultCharger:20 },
    { model:"iPhone 13", battery:3240, maxWatt:23, defaultCharger:20 },
    { model:"iPhone 13 Pro", battery:3095, maxWatt:23, defaultCharger:20 },
    { model:"iPhone 13 Pro Max", battery:4352, maxWatt:27, defaultCharger:20 },
    { model:"iPhone 14", battery:3279, maxWatt:25, defaultCharger:20 },
    { model:"iPhone 14 Plus", battery:4325, maxWatt:25, defaultCharger:20 },
    { model:"iPhone 14 Pro", battery:3200, maxWatt:27, defaultCharger:20 },
    { model:"iPhone 14 Pro Max", battery:4323, maxWatt:27, defaultCharger:20 },
    { model:"iPhone 15", battery:3349, maxWatt:27, defaultCharger:20 },
    { model:"iPhone 15 Plus", battery:4383, maxWatt:27, defaultCharger:20 },
    { model:"iPhone 15 Pro", battery:3274, maxWatt:27, defaultCharger:20 },
    { model:"iPhone 15 Pro Max", battery:4422, maxWatt:27, defaultCharger:20 },
    { model:"iPhone 16", battery:3510, maxWatt:30, defaultCharger:20 },
    { model:"iPhone 16 Plus", battery:4500, maxWatt:30, defaultCharger:20 },
    { model:"iPhone 16 Pro", battery:3400, maxWatt:30, defaultCharger:20 },
    { model:"iPhone 16 Pro Max", battery:4600, maxWatt:30, defaultCharger:20 },
    { model:"iPhone 17", battery:3600, maxWatt:35, defaultCharger:20 },
    { model:"iPhone 17 Plus", battery:4700, maxWatt:35, defaultCharger:20 },
    { model:"iPhone 17 Pro", battery:3500, maxWatt:35, defaultCharger:20 },
    { model:"iPhone 17 Pro Max", battery:4800, maxWatt:35, defaultCharger:20 }
  ],
  "Motorola": [
    { model:"Moto G Power (2021)", battery:5000, maxWatt:10, defaultCharger:10 },
    { model:"Moto G Stylus", battery:4000, maxWatt:15, defaultCharger:15 },
    { model:"Motorola Edge", battery:4500, maxWatt:30, defaultCharger:30 }
  ],
  "Sony": [
    { model:"Xperia 1 IV", battery:5000, maxWatt:30, defaultCharger:30 },
    { model:"Xperia 5 IV", battery:5000, maxWatt:30, defaultCharger:30 }
  ],
  "OnePlus": [
    { model:"OnePlus Nord", battery:4500, maxWatt:30, defaultCharger:30 },
    { model:"OnePlus 9", battery:4500, maxWatt:65, defaultCharger:65 },
    { model:"OnePlus 11", battery:5000, maxWatt:80, defaultCharger:80 }
  ],
  "Google Pixel": [
    { model:"Pixel 4a", battery:3140, maxWatt:18, defaultCharger:18 },
    { model:"Pixel 5", battery:4080, maxWatt:18, defaultCharger:18 },
    { model:"Pixel 6", battery:4614, maxWatt:30, defaultCharger:30 },
    { model:"Pixel 7", battery:4355, maxWatt:30, defaultCharger:30 },
    { model:"Pixel 8", battery:4575, maxWatt:30, defaultCharger:30 }
  ]
};


// --------------------------
// (2) Non-fast dataset
// --------------------------
const nonFastChargingData = [
  {
    brand: "Samsung",
    models: [
      { model: "Galaxy S20", capacity: 4000, supportedWatt: [5, 10] },
      { model: "Galaxy S21", capacity: 4000, supportedWatt: [5, 10] },
      { model: "Galaxy S22", capacity: 3700, supportedWatt: [5, 10] },
      { model: "Galaxy S23", capacity: 3900, supportedWatt: [5, 10] }
    ]
  },
  {
    brand: "Vivo",
    models: [
      { model: "Y21", capacity: 5000, supportedWatt: [5] },
      { model: "V25", capacity: 4500, supportedWatt: [5, 7.5] }
    ]
  },
  {
    brand: "Xiaomi",
    models: [
      { model: "Redmi Note 10", capacity: 5000, supportedWatt: [5, 10] },
      { model: "Poco F3", capacity: 4520, supportedWatt: [5, 10] }
    ]
  },
  {
    brand: "Infinix",
    models: [
      { model: "Hot 12", capacity: 5000, supportedWatt: [5, 10] }
    ]
  },
  {
    brand: "iPhone",
    models: [
      { model: "iPhone 8", capacity: 1821, supportedWatt: [5] },
      { model: "iPhone 12", capacity: 2815, supportedWatt: [5, 7.5] },
      { model: "iPhone 15", capacity: 3349, supportedWatt: [5, 7.5] }
    ]
  }
];


// ===========================
// BAGIAN A chargers dataset (SUPER LENGKAP)
// ===========================
// See: charger entries include name, watt, type ("usb-c"|"lightning"|"combo"), brand

// (This replaces any previous 'chargers' definition)

// Note: combo chargers include flags hasUsbC and hasLightning to indicate available ports

// Charger dataset begins here (reused from earlier part A)

// -------- full list --------

const chargersDataset = [
  { name: "Apple 5W (Lightning)", watt: 5, type: "lightning", brand: "Apple" },
  { name: "Apple 12W (Lightning)", watt: 12, type: "lightning", brand: "Apple" },
  { name: "Apple 20W (Lightning)", watt: 20, type: "lightning", brand: "Apple" },

  { name: "Apple 20W USB-C", watt: 20, type: "usb-c", brand: "Apple" },
  { name: "Apple 30W USB-C", watt: 30, type: "usb-c", brand: "Apple" },
  { name: "Apple 35W Dual USB-C", watt: 35, type: "usb-c", brand: "Apple" },
  { name: "Apple 67W USB-C", watt: 67, type: "usb-c", brand: "Apple" },
  { name: "Apple 96W USB-C", watt: 96, type: "usb-c", brand: "Apple" },

  { name: "Samsung 7.8W", watt: 7.8, type: "usb-c", brand: "Samsung" },
  { name: "Samsung 15W", watt: 15, type: "usb-c", brand: "Samsung" },
  { name: "Samsung 25W", watt: 25, type: "usb-c", brand: "Samsung" },
  { name: "Samsung 45W", watt: 45, type: "usb-c", brand: "Samsung" },

  { name: "Xiaomi 10W", watt: 10, type: "usb-c", brand: "Xiaomi" },
  { name: "Xiaomi 18W", watt: 18, type: "usb-c", brand: "Xiaomi" },
  { name: "Xiaomi 33W", watt: 33, type: "usb-c", brand: "Xiaomi" },
  { name: "Xiaomi 67W", watt: 67, type: "usb-c", brand: "Xiaomi" },
  { name: "Xiaomi 120W", watt: 120, type: "usb-c", brand: "Xiaomi" },

  { name: "Oppo 10W", watt: 10, type: "usb-c", brand: "Oppo" },
  { name: "Oppo 33W", watt: 33, type: "usb-c", brand: "Oppo" },
  { name: "Oppo 65W", watt: 65, type: "usb-c", brand: "Oppo" },
  { name: "Oppo 80W", watt: 80, type: "usb-c", brand: "Oppo" },
  { name: "Oppo 100W SuperVOOC", watt: 100, type: "usb-c", brand: "Oppo" },

  { name: "Vivo 10W", watt: 10, type: "usb-c", brand: "Vivo" },
  { name: "Vivo 18W", watt: 18, type: "usb-c", brand: "Vivo" },
  { name: "Vivo 44W", watt: 44, type: "usb-c", brand: "Vivo" },
  { name: "Vivo 66W", watt: 66, type: "usb-c", brand: "Vivo" },

  { name: "Realme 10W", watt: 10, type: "usb-c", brand: "Realme" },
  { name: "Realme 18W", watt: 18, type: "usb-c", brand: "Realme" },
  { name: "Realme 33W", watt: 33, type: "usb-c", brand: "Realme" },
  { name: "Realme 67W", watt: 67, type: "usb-c", brand: "Realme" },
  { name: "Realme 150W", watt: 150, type: "usb-c", brand: "Realme" },

  { name: "Infinix 18W", watt: 18, type: "usb-c", brand: "Infinix" },
  { name: "Infinix 33W", watt: 33, type: "usb-c", brand: "Infinix" },
  { name: "Infinix 45W", watt: 45, type: "usb-c", brand: "Infinix" },
  { name: "Infinix 68W", watt: 68, type: "usb-c", brand: "Infinix" },

  { name: "OnePlus 30W", watt: 30, type: "usb-c", brand: "OnePlus" },
  { name: "OnePlus 65W", watt: 65, type: "usb-c", brand: "OnePlus" },
  { name: "OnePlus 80W", watt: 80, type: "usb-c", brand: "OnePlus" },

  { name: "Google 18W", watt: 18, type: "usb-c", brand: "Google" },
  { name: "Google 30W", watt: 30, type: "usb-c", brand: "Google" },

  { name: "Sony 30W", watt: 30, type: "usb-c", brand: "Sony" },
  { name: "Motorola 15W", watt: 15, type: "usb-c", brand: "Motorola" },

  { name: "Anker 20W (GaN)", watt: 20, type: "usb-c", brand: "Anker" },
  { name: "Anker 30W (GaN)", watt: 30, type: "usb-c", brand: "Anker" },
  { name: "Anker 45W (GaN)", watt: 45, type: "usb-c", brand: "Anker" },
  { name: "Anker 65W (GaN)", watt: 65, type: "usb-c", brand: "Anker" },
  { name: "Anker 100W (GaN)", watt: 100, type: "usb-c", brand: "Anker" },

  { name: "Baseus 30W (GaN)", watt: 30, type: "usb-c", brand: "Baseus" },
  { name: "Baseus 65W (GaN)", watt: 65, type: "usb-c", brand: "Baseus" },

  { name: "UGREEN 30W (GaN)", watt: 30, type: "usb-c", brand: "UGREEN" },
  { name: "UGREEN 65W (GaN)", watt: 65, type: "usb-c", brand: "UGREEN" },

  { name: "Aukey 30W (GaN)", watt: 30, type: "usb-c", brand: "Aukey" },
  { name: "Aukey 65W (GaN)", watt: 65, type: "usb-c", brand: "Aukey" },

  { name: "ZMI 65W (GaN)", watt: 65, type: "usb-c", brand: "ZMI" },
  { name: "Xiaomi 100W (GaN)", watt: 100, type: "usb-c", brand: "Xiaomi" },

  { name: "GaN Dual-Port 20W (USB-C + USB-A) - Combo", watt: 20, type: "combo", brand: "Universal", hasUsbC: true, hasLightning: false },
  { name: "Dual 30W (USB-C + Lightning) - Combo", watt: 30, type: "combo", brand: "Universal", hasUsbC: true, hasLightning: true },
  { name: "Triple Port 45W (2xUSB-C + USB-A) - Combo", watt: 45, type: "combo", brand: "Universal", hasUsbC: true, hasLightning: false },

  { name: "Charger Universal 10W", watt: 10, type: "usb-c", brand: "Universal" },
  { name: "Charger Universal 20W", watt: 20, type: "usb-c", brand: "Universal" },
  { name: "Charger Universal 30W", watt: 30, type: "usb-c", brand: "Universal" },

  { name: "MultiPort 20W (Lightning + USB-C)", watt: 20, type: "combo", brand: "ThirdParty", hasUsbC: true, hasLightning: true },
  { name: "MultiPort 40W (USB-C + Lightning)", watt: 40, type: "combo", brand: "ThirdParty", hasUsbC: true, hasLightning: true }
];

// For backward compatibility with previous code using variable name 'chargers'
const chargers = chargersDataset;


// ===========================
// Helper utilities for charger types
// ===========================
function normalizePortName(port) {
  if (!port) return null;
  const p = String(port).toLowerCase();
  if (p.includes("usb") || p.includes("c") || p.includes("usb-c") || p.includes("usbc")) return "USB-C";
  if (p.includes("light") || p.includes("lightning")) return "Lightning";
  return null;
}

function chargerSupportsType(charger, port) {
  const want = normalizePortName(port);
  if (!charger || !want) return false;
  if (charger.type === "usb-c" && want === "USB-C") return true;
  if (charger.type === "lightning" && want === "Lightning") return true;
  if (charger.type === "combo") {
    if (want === "USB-C" && charger.hasUsbC) return true;
    if (want === "Lightning" && charger.hasLightning) return true;
  }
  if (!charger.type && want === "USB-C") return true;
  return false;
}

function chargerSupportedPortsLabel(charger) {
  if (!charger) return '';
  if (charger.type === "usb-c") return "USB-C";
  if (charger.type === "lightning") return "Lightning";
  if (charger.type === "combo") {
    const parts = [];
    if (charger.hasUsbC) parts.push("USB-C");
    if (charger.hasLightning) parts.push("Lightning");
    return parts.join(" + ");
  }
  return "Unknown";
}

function getIphonePort(model) {
  if (!model) return "Lightning";
  const match = String(model).match(/(\d{1,2})/);
  if (!match) return "Lightning";
  const series = parseInt(match[1], 10);
  return (series >= 15) ? "USB-C" : "Lightning";
}


// --------------------------
// (4) Realistic simulator
// --------------------------
const STEP_MINUTES = 1;
const NOMINAL_VOLT = 3.85;
const EFFICIENCY = 0.88;
const MIN_TAPER_FACTOR = 0.08;
const MID_TAPER_FACTOR = 0.4;
const FAST_SOC = 0.50;
const TAPER_SOC = 0.80;

function mAh_to_Wh(mAh) { return (mAh * NOMINAL_VOLT) / 1000.0; }

function taperFactor(soc) {
  if (soc <= FAST_SOC) return 1.0;
  if (soc <= TAPER_SOC) {
    const t = (soc - FAST_SOC) / (TAPER_SOC - FAST_SOC);
    return 1.0 + t * (MID_TAPER_FACTOR - 1.0);
  }
  const t2 = (soc - TAPER_SOC) / (1.0 - TAPER_SOC);
  return MID_TAPER_FACTOR + t2 * (MIN_TAPER_FACTOR - MID_TAPER_FACTOR);
}

function simulateChargingPhone(phoneBatteryMah, phoneMaxWatt, chargerWatt, startSoc = 0.0) {
  const batteryWh = mAh_to_Wh(phoneBatteryMah);
  const effectiveMaxWatt = Math.min(chargerWatt, phoneMaxWatt);
  if (effectiveMaxWatt <= 0) return { minutes: Infinity };

  let soc = Math.max(0, Math.min(1, startSoc));
  let minutes = 0;
  let socSeries = [{ minute:0, soc }];
  let energyInputWh = 0;
  let energyStoredWh = soc * batteryWh;
  const stepHours = STEP_MINUTES / 60.0;
  const MAX_MINUTES = 24*60;

  while (soc < 1.0 && minutes < MAX_MINUTES) {
    const factor = taperFactor(soc);
    const powerToBatteryIdeal = effectiveMaxWatt * factor;
    const energyDeliveredThisStepWh = powerToBatteryIdeal * stepHours;
    const energyDrawnFromChargerWh = energyDeliveredThisStepWh / Math.max(EFFICIENCY, 0.01);
    energyInputWh += energyDrawnFromChargerWh;
    energyStoredWh += energyDeliveredThisStepWh;
    soc = Math.min(1.0, energyStoredWh / batteryWh);
    minutes += STEP_MINUTES;
    socSeries.push({ minute: minutes, soc });
    if (socSeries.length > 6) {
      const prev = socSeries[socSeries.length - 2].soc;
      if (Math.abs(soc - prev) < 1e-7) break;
    }
  }

  const totalHours = minutes / 60.0;
  const avgEffWatt = totalHours > 0 ? ((energyInputWh * EFFICIENCY) / totalHours) : 0;

  return {
    minutes, hours: minutes / 60.0, socSeries, energyInputWh, energyStoredWh, avgEffWatt, effectiveMaxWatt
  };
}


// --------------------------
// (5) Best charger finder (updated to respect iPhone port rules)
// --------------------------
function findBestChargerForPhoneObject(phoneObj, brand = '', model = '') {
  let best = null;
  let bestTime = Infinity;

  const isIphone = (brand === 'iPhone');
  const iphonePort = isIphone ? getIphonePort(model) : null;

  chargers.forEach(c => {
    // Skip chargers that don't match iPhone Lightning constraints
    if (isIphone && iphonePort === 'Lightning') {
      // For Lightning iPhones: accept only chargers that either are Lightning,
      // or combo chargers that have Lightning (e.g. dual-port), or Apple chargers
      if (!chargerSupportsType(c, 'Lightning')) {
        // If charger is USB-C-only and not combo with Lightning, skip
        return;
      }
    }

    // For non-iPhone or iPhone USB-C: prefer usb-c capable chargers but also allow combo
    // Now check watt compatibility
    if (c.watt <= phoneObj.maxWatt) {
      const sim = simulateChargingPhone(phoneObj.battery, phoneObj.maxWatt, c.watt, 0.0);
      if (sim.minutes < bestTime) {
        bestTime = sim.minutes;
        best = { charger: c, sim };
      }
    }
  });

  return best;
}


// --------------------------
// (6) DOM refs
// --------------------------
const modeSelect = document.getElementById('modeSelect');
const brandSelect = document.getElementById('brandSelect');
const modelSelect = document.getElementById('modelSelect');
const chargerSelect = document.getElementById('chargerSelect');
const btnCalc = document.getElementById('btnCalc');
const resultBox = document.getElementById('resultBox');
const recommendBox = document.getElementById('recommendBox');


// --------------------------
// (7) Populate helpers
// --------------------------
function populateBrandsForMode(mode) {
  if (!brandSelect) return;
  brandSelect.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-- Pilih Merk HP --';
  brandSelect.appendChild(placeholder);

  if (mode === 'fast') {
    Object.keys(phones).sort().forEach(b => {
      const opt = document.createElement('option'); opt.value = b; opt.textContent = b;
      brandSelect.appendChild(opt);
    });
  } else {
    nonFastChargingData.map(b => b.brand).sort().forEach(b => {
      const opt = document.createElement('option'); opt.value = b; opt.textContent = b;
      brandSelect.appendChild(opt);
    });
  }
}

function populateModelsForMode(mode, brand) {
  if (!modelSelect) return;
  modelSelect.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-- Pilih Model HP --';
  modelSelect.appendChild(placeholder);

  if (!brand) return;

  if (mode === 'fast') {
    const list = phones[brand] || [];
    list.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.model;
      opt.textContent = `${p.model} — ${p.battery}mAh / max ${p.maxWatt}W`;
      modelSelect.appendChild(opt);
    });
  } else {
    const brandObj = nonFastChargingData.find(x => x.brand === brand);
    if (!brandObj) return;
    brandObj.models.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.model;
      opt.textContent = `${m.model} — ${m.capacity}mAh / supported ${m.supportedWatt.join(', ')}W`;
      modelSelect.appendChild(opt);
    });
  }
}

// ============================================
// (7B) POPULATE CHARGER – Dengan penanda Tidak Cocok + Tooltip + iPhone Lightning
// ============================================
function populateChargersForSelection(mode, brand, model) {
  if (!chargerSelect) return;
  chargerSelect.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-- Pilih Charger --';
  chargerSelect.appendChild(placeholder);

  if (!brand || !model) return;

  if (mode === 'fast') {
    const phone = (phones[brand] || []).find(p => p.model === model);
    const maxW = phone ? phone.maxWatt : 0;

    chargers.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.watt;

      // iPhone special rules
      if (brand === 'iPhone') {
        const port = getIphonePort(model);

        // If iPhone uses Lightning -> show only chargers that support Lightning
        if (port === 'Lightning') {
          if (!chargerSupportsType(c, 'Lightning')) {
            opt.textContent = `${c.name} (${c.watt}W) — ❌ Tidak Cocok (Lightning)`;
            opt.style.color = 'var(--danger)';
            opt.title = `Charger ini tidak menyediakan port Lightning`; 
            opt.disabled = true;
            chargerSelect.appendChild(opt);
            return; // continue to next charger
          } else {
            // charger supports Lightning (could be Apple Lightning or combo)
            opt.textContent = `${c.name} (${c.watt}W) — ${chargerSupportedPortsLabel(c)}`;
            opt.title = `Cocok untuk iPhone Lightning`;
            chargerSelect.appendChild(opt);
            return;
          }
        }

        // If iPhone uses USB-C (15+) -> only show chargers that support USB-C (or combo)
        if (port === 'USB-C') {
          if (!chargerSupportsType(c, 'USB-C')) {
            opt.textContent = `${c.name} (${c.watt}W) — ❌ Tidak Cocok (USB-C dibutuhkan)`;
            opt.style.color = 'var(--danger)';
            opt.disabled = true;
            chargerSelect.appendChild(opt);
            return;
          } else {
            opt.textContent = `${c.name} (${c.watt}W) — ${chargerSupportedPortsLabel(c)}`;
            opt.title = `Cocok untuk iPhone USB-C`;
            chargerSelect.appendChild(opt);
            return;
          }
        }
      }

      // Non-iPhone normal watt check
      if (c.watt > maxW) {
        opt.textContent = `${c.name} (${c.watt}W) — ❌ Tidak Cocok`;
        opt.style.color = 'var(--danger)';
        opt.title = `HP ini hanya mendukung maksimal ${maxW}W`;
      } else {
        opt.textContent = `${c.name} (${c.watt}W) — ${chargerSupportedPortsLabel(c)}`;
        opt.title = `Cocok untuk HP ini (maks ${maxW}W)`;
      }

      chargerSelect.appendChild(opt);
    });

    // AUTO SELECT DEFAULT (prefer exact watt match)
    if (phone && phone.defaultCharger) {
      for (let i = 0; i < chargerSelect.options.length; i++) {
        if (Number(chargerSelect.options[i].value) === Number(phone.defaultCharger)) {
          chargerSelect.selectedIndex = i;
          break;
        }
      }
    }

  } else {
    // NON FAST MODE
    const brandObj = nonFastChargingData.find(x => x.brand === brand);
    if (!brandObj) return;
    const m = brandObj.models.find(x => x.model === model);
    if (!m) return;

    m.supportedWatt.forEach(w => {
      const opt = document.createElement('option');
      opt.value = w;
      opt.textContent = `Standar ${w}W`;
      chargerSelect.appendChild(opt);
    });
  }
}


// ============================================
// (7C) INFO CHARGER – iPhone Lightning + Theme Color
// ============================================
if (chargerSelect) {
  chargerSelect.addEventListener('change', () => {
    const brand = brandSelect ? brandSelect.value : '';
    const model = modelSelect ? modelSelect.value : '';
    const chargerW = Number(chargerSelect.value);
    const mode = modeSelect ? modeSelect.value : 'fast';

    const infoBox = document.getElementById('chargerInfo');
    if (infoBox) { infoBox.innerHTML = ''; infoBox.className = ''; }

    if (!brand || !model || !chargerW) return;

    if (brand === 'iPhone') {
      const port = getIphonePort(model);
      const chosen = chargers.find(c => Number(c.watt) === Number(chargerW));
      const supportsLightning = chosen ? chargerSupportsType(chosen, 'Lightning') : false;
      const supportsUsbC = chosen ? chargerSupportsType(chosen, 'USB-C') : false;

      if (port === 'Lightning' && !supportsLightning && infoBox) {
        infoBox.className = 'error';
        infoBox.innerHTML = `\n          ⚠ <b>Port Tidak Cocok</b><br>\n          iPhone seri <b>${model}</b> memakai <b>Lightning</b>.<br>\n          Charger ini tidak menyediakan Lightning.`;
        return;
      }

      if (port === 'USB-C' && !supportsUsbC && infoBox) {
        infoBox.className = 'error';
        infoBox.innerHTML = `\n          ⚠ <b>Port Tidak Cocok</b><br>\n          iPhone seri <b>${model}</b> memakai <b>USB-C</b>.<br>\n          Charger ini tidak menyediakan USB-C.`;
        return;
      }
    }

    if (mode === 'fast') {
      const phone = (phones[brand] || []).find(p => p.model === model);
      const maxW = phone ? phone.maxWatt : 0;

      if (chargerW > maxW && infoBox) {
        infoBox.className = 'error';
        infoBox.innerHTML = `\n          ⚠ <b>Charger Tidak Cocok</b><br>\n          Maksimal HP: <b>${maxW}W</b><br>\n          Charger ini: <b>${chargerW}W</b>`;
      } else if (infoBox) {
        infoBox.className = 'success';
        infoBox.innerHTML = `\n          ✔ Charger ini <b>cocok</b> untuk HP kamu.<br>\n          Maks watt HP: <b>${maxW}W</b>`;
      }
    }
  });
}


// --------------------------
// (8) Find phone object
// --------------------------
function getPhoneObjectFast(brand, model) {
  if (!phones[brand]) return null;
  return phones[brand].find(p => p.model === model) || null;
}

function getPhoneObjectNonFast(brand, model) {
  const b = nonFastChargingData.find(x => x.brand === brand);
  if (!b) return null;
  const m = b.models.find(x => x.model === model);
  if (!m) return null;

  return {
    battery: m.capacity,
    maxWatt: Math.max(...m.supportedWatt),
    defaultCharger: m.supportedWatt[0]
  };
}


// --------------------------
// (9) Render functions
// --------------------------

function renderResult(sim, phoneLabel, chargerLabel, batteryMah) {
  if (!resultBox) return;
  if (!sim || !isFinite(sim.minutes)) {
    resultBox.innerHTML = `<div><strong>Estimasi tidak tersedia</strong></div>`;
    resultBox.style.display = 'block';
    return;
  }

  const samples = sim.socSeries
    .slice(0, Math.max(1, Math.ceil(sim.socSeries.length / 6)))
    .map(s => `${s.minute}m:${Math.round(s.soc * 100)}%`)
    .join(' • ');

  let html = `
    <div><strong>HP:</strong> ${phoneLabel}</div>
    <div><strong>Charger:</strong> ${chargerLabel}</div>
    <div style="margin-top:8px;"><strong>Estimasi 0→100%:</strong> ${formatTime(sim.minutes)} (${sim.minutes.toFixed(0)} menit)</div>
    <div class="small"><strong>Contoh SOC sample:</strong> ${samples}</div>
  `;

  // Generate rate summary every 5 minutes (Format C: include mAh + %)
  let rateHtml = `<div style="margin-top:12px;"><strong>Laju Pengisian (setiap 5 menit):</strong><br>`;

  try {
    const series = sim.socSeries || [];
    if (series.length <= 1) {
      rateHtml += "Data tidak tersedia.<br>";
    } else {
      const lastMinute = series[series.length - 1].minute;
      // build a map minute->entry for faster lookup
      const map = new Map(series.map(e => [e.minute, e]));
      // for minutes not present exactly, we'll pick the closest previous sample
      for (let t = 0; t <= lastMinute; t += 5) {
        const prevT = Math.max(0, t - 5);
        // find entries closest to prevT and t
        const findClosest = (tt) => {
          if (map.has(tt)) return map.get(tt);
          // fallback: search nearest by absolute difference
          let best = series[0];
          for (let k = 1; k < series.length; k++) {
            if (Math.abs(series[k].minute - tt) < Math.abs(best.minute - tt)) best = series[k];
          }
          return best;
        };
        const cur = findClosest(t);
        const prev = findClosest(prevT);
        const deltaSoc = Math.max(0, cur.soc - prev.soc);
        const deltaPercent = deltaSoc * 100.0;
        const mAh = Math.round(deltaSoc * (Number(batteryMah) || 0));
        rateHtml += `Menit ${prev.minute}–${cur.minute}: +${deltaPercent.toFixed(2)}% (${mAh} mAh) → Total ${Math.round(cur.soc*100)}%<br>`;
      }
    }
  } catch (e) {
    rateHtml += "Kesalahan saat menghitung ringkasan laju pengisian.<br>";
  }

  rateHtml += `</div>`;

  resultBox.innerHTML = html + rateHtml;
  resultBox.style.display = 'block';
}


function renderRecommendation(best) {
  if (!recommendBox) return;
  if (!best || !best.sim) {
    recommendBox.innerHTML = `<div><strong>Rekomendasi tidak tersedia</strong></div>`;
    recommendBox.style.display = 'block';
    return;
  }

  recommendBox.innerHTML = `\n    <div><strong>Rekomendasi Charger Tercepat:</strong></div>\n    <div style="margin-top:8px;"><strong>${best.charger.name} (${best.charger.watt}W)</strong></div>\n    <div style="margin-top:6px;"><strong>Estimasi:</strong> ${formatTime(best.sim.minutes)} (${best.sim.minutes.toFixed(0)} menit)</div>\n  `;
  recommendBox.style.display = 'block';
}

function formatTime(mins) {
  if (!isFinite(mins)) return '—';
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  return (h ? `${h} jam ` : '') + `${m} menit`;
}


// --------------------------
// (10) Calculate handler
// --------------------------
function calculateHandler() {
  if (!modeSelect || !brandSelect || !modelSelect || !chargerSelect) return;

  const mode = modeSelect.value;
  const brand = brandSelect.value;
  const model = modelSelect.value;
  const chargerW = Number(chargerSelect.value);

  if (resultBox) { resultBox.style.display = 'none'; resultBox.innerHTML = ''; }
  if (recommendBox) { recommendBox.style.display = 'none'; recommendBox.innerHTML = ''; }

  if (!mode || !brand || !model || !chargerW) {
    if (resultBox) {
      resultBox.innerHTML = `<div><strong>Silakan pilih mode, merk, model, dan charger.</strong></div>`;
      resultBox.style.display = 'block';
    }
    return;
  }

  let phoneObj;
  if (mode === 'fast') phoneObj = getPhoneObjectFast(brand, model);
  else phoneObj = getPhoneObjectNonFast(brand, model);

  if (!phoneObj) {
    if (resultBox) {
      resultBox.innerHTML = `<div><strong>Data HP tidak ditemukan di database.</strong></div>`;
      resultBox.style.display = 'block';
    }
    return;
  }

  const sim = simulateChargingPhone(phoneObj.battery, phoneObj.maxWatt, chargerW, 0.0);
  renderResult(sim, `${brand} ${model}`, `${chargerW}W`, phoneObj.battery);

  let best;
  if (mode === 'fast') {
    best = findBestChargerForPhoneObject(phoneObj, brand, model);
  } else {
    const allowed = chargers.filter(c => [5, 7.5, 10, 12, 18].includes(Math.round(c.watt)));
    let bestTime = Infinity;
    allowed.forEach(c => {
      const sim2 = simulateChargingPhone(phoneObj.battery, phoneObj.maxWatt, c.watt, 0.0);
      if (sim2.minutes < bestTime) {
        bestTime = sim2.minutes;
        best = { charger: c, sim: sim2 };
      }
    });
  }

  renderRecommendation(best);
}


// --------------------------
// (11) Init app
// --------------------------
function initApp() {
  if (!modeSelect) return;

  populateBrandsForMode(modeSelect.value);

  modeSelect.addEventListener('change', () => {
    populateBrandsForMode(modeSelect.value);
    if (modelSelect) modelSelect.innerHTML = '';
    if (chargerSelect) chargerSelect.innerHTML = '';
    if (resultBox) { resultBox.style.display = 'none'; resultBox.innerHTML = ''; }
    if (recommendBox) { recommendBox.style.display = 'none'; recommendBox.innerHTML = ''; }
    const ci = document.getElementById("chargerInfo"); if (ci) ci.innerHTML = "";
  });

  if (brandSelect) brandSelect.addEventListener('change', () => {
    populateModelsForMode(modeSelect.value, brandSelect.value);
    if (chargerSelect) chargerSelect.innerHTML = '';
    if (resultBox) { resultBox.style.display = 'none'; resultBox.innerHTML = ''; }
    if (recommendBox) { recommendBox.style.display = 'none'; recommendBox.innerHTML = ''; }
    const ci = document.getElementById("chargerInfo"); if (ci) ci.innerHTML = "";
  });

  if (modelSelect) modelSelect.addEventListener('change', () => {
    populateChargersForSelection(modeSelect.value, brandSelect.value, modelSelect.value);
    if (resultBox) { resultBox.style.display = 'none'; resultBox.innerHTML = ''; }
    if (recommendBox) { recommendBox.style.display = 'none'; recommendBox.innerHTML = ''; }
    const ci = document.getElementById("chargerInfo"); if (ci) ci.innerHTML = "";
  });

  if (btnCalc) btnCalc.addEventListener('click', calculateHandler);

  if (brandSelect && brandSelect.options.length > 1) {
    brandSelect.selectedIndex = 1;
    const ev = new Event('change'); brandSelect.dispatchEvent(ev);
  }
}

if (document.readyState === 'loading')
  document.addEventListener('DOMContentLoaded', initApp);
else
  initApp();

// RESET INFO BOX ketika brand/model berubah (safe guard)
const ci = document.getElementById("chargerInfo"); if (ci) ci.innerHTML = "";


// ===========================
// (12) POPUP CARA PENGGUNAAN (ICON ?)
// ===========================
document.addEventListener("DOMContentLoaded", () => {

  const helpIcon = document.getElementById("helpIcon");
  const popupOverlay = document.getElementById("popupOverlay");
  const popupClose = document.getElementById("popupClose");

  if (!helpIcon || !popupOverlay || !popupClose) {
    console.error("Elemen popup tidak ditemukan");
    return;
  }

  // buka popup
  helpIcon.addEventListener("click", () => {
    popupOverlay.classList.add("active");
  });

  // tutup popup (tombol)
  popupClose.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
  });

  // klik area gelap untuk tutup
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("active");
    }
  });

});


