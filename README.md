# Bernadus Boli — Portfolio (GitHub Actions)

Otomatis deploy ke GitHub Pages via Actions.
URL target: `https://bernadlein.github.io/portfolio/`

## Jalankan Lokal
npm i && npm run dev

## Aktifkan Pages
Settings → Pages → Build and deployment → Source: GitHub Actions

## Push Pertama
git init
git add .
git commit -m "init: portfolio actions"
git branch -M main
git remote add origin https://github.com/bernadlein/portfolio.git
git push -u origin main

## Edit Konten
Ubah `src/data.js` (nama, ringkasan, proyek, email, GitHub).

## Catatan
- Karena project pages, `base` di `vite.config.js` = `/portfolio/`.
- Jika nama repo berubah, ubah juga `base`.
- Workflow menyalin `dist/index.html` → `dist/404.html` agar refresh URL tetap jalan.
