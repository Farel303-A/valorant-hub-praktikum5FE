export const maps = [
  {
    slug: "ascent",
    name: "Ascent",
    location: "Venesia, Italia",
    sites: 2,
    color: "#E8C27A",
    description:
      "Kota Italia dengan pintu tengah yang bisa ditutup. Kontrol area tengah menentukan jalannya ronde.",
    tips: ["Rebut area tengah lebih dulu.", "Pintu bisa ditutup untuk menahan rotasi.", "Gunakan smoke untuk memotong garis pandang."],
  },
  {
    slug: "bind",
    name: "Bind",
    location: "Maroko",
    sites: 2,
    color: "#E06B4F",
    description:
      "Tidak ada jalur tengah. Dua teleporter satu arah membuat rotasi cepat tapi berisik.",
    tips: ["Dengarkan suara teleporter.", "Rotasi lewat teleporter bisa jadi jebakan.", "Pasang utilitas di dekat pintu keluar."],
  },
  {
    slug: "haven",
    name: "Haven",
    location: "Bhutan",
    sites: 3,
    color: "#7FB77E",
    description:
      "Satu-satunya peta dengan tiga bomb site. Penyerang punya banyak pilihan, bertahan jadi lebih sulit.",
    tips: ["Bertahan dengan rotasi cepat.", "Tebak site dari informasi awal.", "Kontrol garasi untuk akses ke dua site."],
  },
  {
    slug: "split",
    name: "Split",
    location: "Tokyo, Jepang",
    sites: 2,
    color: "#C9CED6",
    description:
      "Peta vertikal dengan banyak tali dan tangga. Kontrol area tengah sangat berharga.",
    tips: ["Manfaatkan tali untuk sudut tak terduga.", "Waspadai pertarungan di ketinggian.", "Kuasai mid untuk membelah pertahanan."],
  },
  {
    slug: "icebox",
    name: "Icebox",
    location: "Rusia",
    sites: 2,
    color: "#7AD1F0",
    description:
      "Fasilitas industri di wilayah dingin. Banyak tali dan zipline membuka rute vertikal.",
    tips: ["Gunakan zipline untuk rotasi.", "Periksa sudut tinggi sebelum masuk.", "Koordinasikan utilitas di site."],
  },
];

export const getMap = (slug) => maps.find((m) => m.slug === slug);
