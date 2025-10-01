const FONT = require("./fonts/font5x5");

function sanitize(text) {
  if (typeof text !== "string") text = String(text);
  return text.toUpperCase();
}

function toRegionalIndicator(char) {
  const code = char.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    return String.fromCodePoint(0x1f1e6 + (code - 65));
  }
  if (char === " ") return " ";
  if (code >= 48 && code <= 57) {
    return char + "\uFE0F\u20E3"; 
  }
  return char;
}

function banner(text = "", options = {}) {
  const { mode = "ascii", fill = "#", spacer = " " } = options;
  if (!text && text !== 0) return "";

  const raw = sanitize(text);

  if (mode === "inline") {
    return raw;
  }

  if (mode === "emoji") {
    const parts = [];
    for (const ch of raw) parts.push(toRegionalIndicator(ch));
    return parts.join(spacer);
  }

  const rows = ["", "", "", "", ""];

  for (let idx = 0; idx < raw.length; idx++) {
    const ch = raw[idx];
    const glyph = FONT[ch] || FONT[" "]; // fallback to space
    for (let r = 0; r < 5; r++) {
      // replace '#' in glyph[r] with fill, and ' ' remain space
      const line = glyph[r].split("").map(c => (c === "#" ? fill : " ")).join("");
      rows[r] += line + spacer;
    }
  }
  return rows.join("\n");
}

function consoleBanner(text, options = {}) {
  console.log(banner(text, options));
}

module.exports = { banner, consoleBanner };
