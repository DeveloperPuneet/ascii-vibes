# ascii-vibes 🎨✨

> Zero-dependency ASCII & Emoji banner generator built from scratch.  
> Create stylish console banners in pure JavaScript — no chalk, no figlet, no nonsense.  

---

## 🚀 Features
- ✅ Zero dependencies (just Node.js)
- ✅ ASCII banners with custom characters (5×5 font)
- ✅ Emoji banners (regional indicators + numbers)
- ✅ Inline uppercase mode
- ✅ CLI + programmatic API
- ✅ Fully hackable: font stored in `fonts/font5x5.js` for easy customization

---

## 📦 Installation

Install globally (for CLI):
```bash
npm install -g ascii-vibes
```

---

## 🔧 Usage
1. Programmatic (in Node.js)
```
// Import
const { banner, consoleBanner } = require("ascii-vibes");

// ASCII banner
console.log(banner("PUNEET"));
// Use custom fill character
console.log(banner("PUNEET", { mode: "ascii", fill: "*" }));

// Emoji banner
console.log(banner("Hello", { mode: "emoji" }));

// Inline uppercase
console.log(banner("hello", { mode: "inline" }));

// Quick console print helper
consoleBanner("ascii vibes", { mode: "ascii", fill: "@" });
```

## 2. CLI (after global install)
### ASCII mode (default)
```ascii-vibes "Hello World"```

### Emoji mode
```ascii-vibes "npm rocks" --mode emoji```

### Custom fill
```ascii-vibes "puneet" --fill "*"```

### Inline uppercase
```ascii-vibes "ascii vibes" --mode inline```

### Show help
```ascii-vibes --help```


Example output (ASCII mode):
```
#####   #   #  #####  #####   ### 
#       #   #  #        #    #   #
#####   #####  ####     #    #   #
#       #   #  #        #    #   #
#####   #   #  #####    #     ### 
```

---

## ⚙️ Options
Option	|Type	|Default	|Description
mode	|string	|"ascii"	|Render mode: ascii / emoji / inline
fill	|string	|"#"	    |Character for ASCII pixels (only in ascii mode)
spacer	|string	|" "	    |Space between letters

---

## 🧑‍💻 Development & Testing

Clone or download this repo:
```
git clone https://github.com/DeveloperPuneet/ascii-vibes.git
cd ascii-vibes
npm install
```

---

## Run locally

From the project root:
```
# Run the CLI directly
node bin/ascii-vibes.js "Hello Puneet" --mode ascii --fill "@"

# Run via npm link (simulate global install)
npm link
ascii-vibes "Test Banner"
```

---

## Programmatic test

Create a ```test.js``` in the project root:
```
const { banner } = require("./index");

console.log("ASCII mode:");
console.log(banner("Test", { mode: "ascii", fill: "*" }));

console.log("\nEmoji mode:");
console.log(banner("Test", { mode: "emoji" }));

console.log("\nInline mode:");
console.log(banner("Test", { mode: "inline" }));
```

Run:
```
node test.js
```

---

## 🛠️ File Structure
```
ascii-vibes/
├─ package.json        # Module info & config
├─ README.md           # You are here
├─ index.js            # Main library (API)
├─ bin/
│  └─ ascii-vibes.js   # CLI entrypoint
├─ fonts/
│  └─ font5x5.js       # Custom 5×5 ASCII font
└─ test.js             # Simple tests (you add this)
```

---

## 📝 Roadmap (Future Ideas)
 Multiple fonts (block, bubble, gothic)
 Gradient colors in ASCII mode (manual ANSI codes)
 Export banners to .txt or .png
 Scaling option (enlarge 5×5 glyphs)
 Emoji themes (🔥, 🎉, 💀 etc.)

---

## 📜 License
MIT © 2025 Sovereign Puneet

## 💡 Inspiration
This project was made from scratch to avoid wrapping popular libraries like figlet or chalk.
The goal is to show how small, focused, zero-dependency npm modules can still be useful & fun.