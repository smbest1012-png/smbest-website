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

## 구조 핵심
- `app/[locale]/…` — ko/en/zh/ja 4개 언어. 루트 `/`는 `/ko`로 redirect (next.config.ts)
- `lib/i18n/dictionaries/{ko,en,zh,ja}.ts` — 모든 문구. ko가 원본, 나머지는 임시 번역
- `lib/products/products.ts` — 제품 11개 단일 소스. `isPlaceholder: true`인 항목은
  공식 제품명/이미지/설명 수령 후 교체
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
