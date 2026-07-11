# SMBEST 공식 웹사이트

친환경 소재 기업 에스엠베스트(SMBEST)의 브랜드·제품 소개 사이트.
구매는 모두 네이버 스마트스토어로 연결한다 (사이트 내 결제/장바구니 없음).

## 스택
- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 (CSS 기반 토큰, `app/globals.css`)
- shadcn/ui (radix-nova, `components/ui`), framer-motion, lucide-react

## 명령어
- `npm run dev` / `npm run build` / `npm run lint`
- `npx tsc --noEmit` — 타입 검사
- `node scripts/build-fonts.mjs` — 폰트 패키지 변경 시 /public/fonts 재생성

## 배포
- 정적 export(`output: "export"`, `trailingSlash: true`, `images.unoptimized`) → `out/`
- GitHub Pages: `.github/workflows/deploy-pages.yml`가 main push 시 `npm run build` → `out/` 배포
  (커스텀 도메인 smbest.kr, `public/CNAME`). `public/.nojekyll`로 `_next/` 보호
- Vercel도 동일 `out/`을 서빙하므로 양쪽 유지. 서버·DB·API 라우트 없음(순수 정적)
- 루트 `/` → `/ko/`는 `public/index.html`(meta refresh+JS+링크)로 처리 (export에선 redirects() 무효)
- `out/404.html`은 빌드 후 `scripts/make-static-404.mjs`가 브랜드·다국어 정적 404로 덮어씀

## 구조 핵심
- `app/[locale]/…` — ko/en/zh/ja 4개 언어. `<html>`은 `[locale]/layout.tsx`가 렌더(루트 레이아웃 없음)
- `lib/i18n/dictionaries/{ko,en,zh,ja}.ts` — 모든 문구. ko가 원본, 나머지는 임시 번역
- `lib/products/products.ts` — 제품 11개 단일 소스. 한국어 제품명은 대표 제공 원문(주석)
  기준 확정. 제품 사진(`image: null`)과 브랜드 로마자 표기(Ronart/Homttagi 등)는 확인 대기
- `lib/constants/site.ts` — 회사 정보 단일 소스 (주소·전화·사업자번호 등)
- `components/ui/smooth-scroll-hero.tsx` — 지정된 히어로 컴포넌트. 다른 것으로 대체 금지
- 폰트: next/font 대신 Fontsource 셀프호스팅 (빌드 시 Google 다운로드가 실패하므로).
  로케일별 `/fonts/{locale}.css` 1장만 로드

## 규칙
- 외부 링크는 `target="_blank" rel="noopener noreferrer"` + 새 탭 sr-only 안내
- 제품 성능·인증·수치는 공식 자료 없이 만들어내지 않는다
- 가격/재고는 사이트에 표시하지 않는다 (스마트스토어에서 확인)
- 히어로 이미지(`public/images/hero`)는 Unsplash 임시본 — 공식 사진으로 교체 예정
- 로고(`components/shared/logo*.tsx`)는 SVG 재현본 — 원본 벡터 수령 시 교체
