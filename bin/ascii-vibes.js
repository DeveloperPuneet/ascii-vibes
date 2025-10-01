const { banner } = require("../index");

function parseArgs(argv) {
  const args = argv.slice(2);
  const options = { mode: "ascii", fill: "#", spacer: " " };
  let textParts = [];

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--mode" && args[i+1]) {
      options.mode = args[++i];
    } else if (a === "--fill" && args[i+1]) {
      options.fill = args[++i];
    } else if (a === "--spacer" && args[i+1]) {
      options.spacer = args[++i];
    } else if (a === "-h" || a === "--help") {
      return { help: true };
    } else {
      textParts.push(a);
    }
  }

  return { text: textParts.join(" "), options };
}

function help() {
  console.log("ascii-vibes — Zero-dep ASCII & Emoji banner generator");
  console.log("");
  console.log("Usage:");
  console.log("  ascii-vibes Hello World         # ascii banner");
  console.log("  ascii-vibes 'hey' --mode emoji  # emoji banner");
  console.log("  ascii-vibes 'yo' --fill '*'     # ascii with custom fill");
  console.log("");
  console.log("Flags:");
  console.log("  --mode [ascii|emoji|inline]   set render mode (default ascii)");
  console.log("  --fill [char]                 character used for ascii pixels");
  console.log("  --spacer [string]             string between letters (default single space)");
  console.log("  -h, --help                    show this help");
  console.log("");
  console.log("Examples:");
  console.log("  ascii-vibes PUNEET --mode ascii --fill '@'");
  console.log("  ascii-vibes 'hi there' --mode emoji");
}

(function main() {
  const parsed = parseArgs(process.argv);
  if (!parsed || parsed.help) {
    help();
    process.exit(0);
  }
  const { text, options } = parsed;
  if (!text) {
    help();
    process.exit(1);
  }
  console.log(banner(text, options));
})();
