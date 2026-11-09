export const agents = [
  {
    slug: "jett",
    name: "Jett",
    role: "Duelist",
    origin: "Korea Selatan",
    color: "#7FD6E8",
    description:
      "Lincah dan agresif. Jett membuka jalan bagi tim dengan mobilitas tinggi dan duel yang cepat.",
    abilities: [
      { name: "Updraft", desc: "Melompat tinggi ke atas untuk mencapai posisi yang sulit dijangkau." },
      { name: "Tailwind", desc: "Menyiapkan dash singkat ke arah gerakan berikutnya." },
      { name: "Blade Storm", desc: "Ultimate: sekumpulan pisau lempar yang mematikan." },
    ],
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    role: "Duelist",
    origin: "Inggris",
    color: "#FF8A3D",
    description:
      "Agen api yang bisa menyembuhkan diri di dalam api miliknya sendiri. Cocok untuk pemain yang suka maju duluan.",
    abilities: [
      { name: "Blaze", desc: "Membuat dinding api yang menghalangi dan melukai musuh." },
      { name: "Hot Hands", desc: "Bola api yang meledak dan meninggalkan area terbakar." },
      { name: "Run It Back", desc: "Ultimate: kembali ke titik awal jika terkalahkan." },
    ],
  },
  {
    slug: "sage",
    name: "Sage",
    role: "Sentinel",
    origin: "Tiongkok",
    color: "#7CF2C0",
    description:
      "Penjaga tim yang bisa menyembuhkan, menghidupkan kembali rekan, dan menahan laju musuh.",
    abilities: [
      { name: "Slow Orb", desc: "Bola es yang memperlambat musuh di area tertentu." },
      { name: "Barrier Orb", desc: "Memunculkan dinding es sebagai penghalang." },
      { name: "Resurrection", desc: "Ultimate: menghidupkan kembali rekan yang gugur." },
    ],
  },
  {
    slug: "sova",
    name: "Sova",
    role: "Initiator",
    origin: "Rusia",
    color: "#6FA8FF",
    description:
      "Pemburu dengan panah pelacak. Sova unggul dalam mengumpulkan informasi posisi musuh.",
    abilities: [
      { name: "Recon Bolt", desc: "Panah yang mengungkap posisi musuh di sekitarnya." },
      { name: "Shock Bolt", desc: "Panah ledak yang memberi damage pada area." },
      { name: "Hunter's Fury", desc: "Ultimate: tiga ledakan energi yang menembus dinding." },
    ],
  },
  {
    slug: "brimstone",
    name: "Brimstone",
    role: "Controller",
    origin: "Amerika Serikat",
    color: "#E8A33D",
    description:
      "Komandan lapangan yang memasang smoke dan serangan orbital untuk mengendalikan area.",
    abilities: [
      { name: "Sky Smoke", desc: "Memasang smoke di titik yang dipilih lewat peta." },
      { name: "Incendiary", desc: "Granat api yang membakar area target." },
      { name: "Orbital Strike", desc: "Ultimate: serangan laser orbital yang terus menyapu area." },
    ],
  },
  {
    slug: "omen",
    name: "Omen",
    role: "Controller",
    origin: "Tidak diketahui",
    color: "#9B7BFF",
    description:
      "Bayangan misterius yang menggelapkan pandangan musuh dan muncul di tempat tak terduga.",
    abilities: [
      { name: "Paranoia", desc: "Gelombang bayangan yang membutakan musuh yang dilewatinya." },
      { name: "Dark Cover", desc: "Memasang smoke bayangan di area yang dipilih." },
      { name: "From the Shadows", desc: "Ultimate: berteleportasi ke titik mana pun di peta." },
    ],
  },
];

export const getAgent = (slug) => agents.find((a) => a.slug === slug);
