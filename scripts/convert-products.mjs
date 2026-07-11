/* One-off: convert product screenshots to optimized webp in public/products. */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const SRC = "C:/Users/smbes/OneDrive/바탕 화면/새 폴더 (3)";
const DST = "D:/smbest웹사이트/public/products";

// screenshot file → product slug (identified visually)
const map = {
  "스크린샷 2026-07-11 205309.png": "resin-01", // RORNART W bottle
  "스크린샷 2026-07-11 205150.png": "resin-02", // RORNART P bottle
  "스크린샷 2026-07-11 205004.png": "resin-03", // RORNART D-Model bottle
  "스크린샷 2026-07-11 205131.png": "resin-04", // D-Model water washable label
  "스크린샷 2026-07-11 205030.png": "filament-01", // stick PLA 30cm
  "스크린샷 2026-07-11 205334.png": "filament-02", // PLA 5m / 25 colors
  "스크린샷 2026-07-11 205350.png": "filament-03", // same PLA visual (user-approved reuse)
  "스크린샷 2026-07-11 205054.png": "filament-04", // coffee filament MOG-CA
  "스크린샷 2026-07-11 204912.png": "filament-05", // herbal filament
  "스크린샷 2026-07-11 205112.png": "kitchenware-01", // 홈닦기 (Lichen)
  "스크린샷 2026-07-11 205207.png": "kitchenware-02", // 설거지 친구들 set
};

await mkdir(DST, { recursive: true });

for (const [file, slug] of Object.entries(map)) {
  const out = join(DST, `${slug}.webp`);
  const img = sharp(join(SRC, file)).resize({
    width: 800,
    withoutEnlargement: true,
  });
  await img.webp({ quality: 82 }).toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`${slug}.webp  ${meta.width}x${meta.height}`);
}
console.log("done");
