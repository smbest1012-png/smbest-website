/*
 * Post-build: write a branded, locale-aware out/404.html.
 *
 * GitHub Pages serves this single file for every unknown path (keeping the
 * requested URL in the address bar), so a small client script localizes the
 * copy from the first path segment. The React not-found (app/[locale]/
 * not-found.tsx) can't drive this file because the site has no root layout,
 * so we emit a self-contained page here instead. Runs on Windows and Linux CI.
 */
import { writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const target = join(outDir, "404.html");

const copy = {
  ko: {
    title: "페이지를 찾을 수 없습니다",
    body: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
    home: "홈으로 돌아가기",
  },
  en: {
    title: "Page not found",
    body: "The page you requested does not exist or has been moved.",
    home: "Back to home",
  },
  zh: {
    title: "找不到页面",
    body: "您访问的页面不存在或已被移动。",
    home: "返回首页",
  },
  ja: {
    title: "ページが見つかりません",
    body: "お探しのページは存在しないか、移動しました。",
    home: "ホームへ戻る",
  },
};

const html = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>404 — SMBEST</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 2rem;
        text-align: center;
        background: hsl(48 33% 97%);
        color: hsl(150 18% 12%);
        font-family: ui-sans-serif, system-ui, "Apple SD Gothic Neo",
          "Malgun Gothic", "Hiragino Kaku Gothic ProN", "Microsoft YaHei",
          sans-serif;
      }
      .code {
        font-family: "EB Garamond Variable", Georgia, serif;
        font-size: clamp(4rem, 16vw, 7rem);
        font-style: italic;
        line-height: 1;
        color: hsl(150 18% 12% / 0.28);
      }
      h1 { margin: 0.5rem 0 0; font-size: 1.6rem; font-weight: 600; }
      p { margin: 0; color: hsl(150 8% 34%); }
      a.home {
        margin-top: 1.25rem;
        display: inline-flex;
        align-items: center;
        height: 2.75rem;
        padding: 0 1.5rem;
        border-radius: 0.375rem;
        background: hsl(151 43% 24%);
        color: hsl(48 33% 97%);
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
      }
      a.home:hover { background: hsl(151 43% 20%); }
    </style>
  </head>
  <body>
    <div class="code">404</div>
    <h1 id="t">${copy.ko.title}</h1>
    <p id="b">${copy.ko.body}</p>
    <a class="home" id="h" href="/ko/">${copy.ko.home}</a>
    <script>
      (function () {
        var copy = ${JSON.stringify(copy)};
        var seg = location.pathname.split("/")[1];
        var loc = copy[seg] ? seg : "ko";
        var t = copy[loc];
        document.documentElement.lang = loc;
        document.getElementById("t").textContent = t.title;
        document.getElementById("b").textContent = t.body;
        var h = document.getElementById("h");
        h.textContent = t.home;
        h.setAttribute("href", "/" + loc + "/");
        document.title = "404 — SMBEST";
      })();
    </script>
  </body>
</html>
`;

try {
  await access(outDir);
} catch {
  console.error(
    "[make-static-404] out/ not found — run `next build` first (output: export).",
  );
  process.exit(1);
}

await writeFile(target, html, "utf8");
console.log("[make-static-404] wrote branded, locale-aware out/404.html");
