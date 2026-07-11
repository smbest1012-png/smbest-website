/**
 * Build self-hosted, per-locale font stylesheets into /public/fonts.
 *
 * Why not next/font/google: it downloads hundreds of CJK subset files from
 * Google at every cold build, which is slow and fails behind rate limits.
 * Fontsource packages ship the same Google-subset woff2 files via npm, so
 * builds are deterministic and offline-safe.
 *
 * Output:
 *   public/fonts/files/*.woff2   (unicode-range subsets; browsers fetch
 *                                 only the subsets a page actually uses)
 *   public/fonts/{ko,en,zh,ja}.css  (EB Garamond + that locale's Noto pair)
 *
 * Run after changing font packages:  node scripts/build-fonts.mjs
 */
import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "public", "fonts");
const outFiles = join(outDir, "files");
mkdirSync(outFiles, { recursive: true });

const pkg = (name) => join(root, "node_modules", "@fontsource-variable", name);

function readCss(name, file = "index.css") {
  return readFileSync(join(pkg(name), file), "utf8").replaceAll(
    "url(./files/",
    "url(/fonts/files/",
  );
}

function copyFiles(name) {
  cpSync(join(pkg(name), "files"), outFiles, { recursive: true });
}

const garamond = readCss("eb-garamond") + readCss("eb-garamond", "wght-italic.css");

const pairs = {
  ko: ["noto-sans-kr", "noto-serif-kr"],
  en: ["noto-sans-kr", "noto-serif-kr"],
  zh: ["noto-sans-sc", "noto-serif-sc"],
  ja: ["noto-sans-jp", "noto-serif-jp"],
};

copyFiles("eb-garamond");
for (const name of new Set(Object.values(pairs).flat())) copyFiles(name);

for (const [locale, [sans, serif]] of Object.entries(pairs)) {
  const css = [garamond, readCss(sans), readCss(serif)].join("\n");
  writeFileSync(join(outDir, `${locale}.css`), css);
  console.log(`fonts/${locale}.css  ${(css.length / 1024).toFixed(1)} KB`);
}
console.log("done");
