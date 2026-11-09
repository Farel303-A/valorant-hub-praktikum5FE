# Valorant Hub

| | |
|---|---|
| **Nama** | Muhamad Farel |
| **NIM** | 535250005 |

Website penggemar bertema **VALORANT** yang dibangun dengan **Next.js (App Router)**. Tugas kali ini berfokus pada komponen **carousel** serta desain dan kerapian tampilan.

## Fitur utama

- **Komponen Carousel** (`src/components/Carousel.js`), dibuat sendiri tanpa library dan dipakai dua kali di beranda:
  - *Agents pilihan*: satu slide per tampilan.
  - *Jelajahi maps*: 1 / 2 / 3 slide per tampilan sesuai lebar layar.
  - Autoplay dengan progress bar, tombol prev/next, dot indikator, tombol jeda/putar, swipe di layar sentuh, navigasi keyboard (← →), dan menghormati `prefers-reduced-motion`.
- **Navbar dengan penanda menu aktif**: teks terang, latar merah transparan, garis bawah merah, dan penanda kotak di desktop. Di mobile berupa bar merah di sisi kiri. Menu induk tetap aktif di sub-halaman (mis. `/agents/jett`).
- **Responsif**: breakpoint 1024px, 820px (navbar berubah menjadi hamburger), dan 560px.
- Halaman lain: Tentang, Agents (+ detail dinamis), Maps (+ detail dinamis), Kontak, dan 404.

## Menjalankan

    npm install
    npm run dev     # http://localhost:3000

## Struktur folder

    src/
    ├── app/                  # Routing (file-based)
    │   ├── layout.js         # Layout global: Navbar + Footer
    │   ├── page.js           # Beranda (hero, carousel agents, carousel maps, CTA)
    │   ├── about/  agents/  maps/  contact/
    │   └── not-found.js
    ├── components/
    │   ├── Carousel.js       # Carousel reusable
    │   ├── AgentSlide.js     # Isi slide agents
    │   ├── Navbar.js  Footer.js  AgentCard.js  MapCard.js
    │   └── ButtonLink.js  PageHeader.js
    ├── data/                 # Data agents & maps
    └── styles/globals.css
