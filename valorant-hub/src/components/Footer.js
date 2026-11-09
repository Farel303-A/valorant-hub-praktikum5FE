import Link from "next/link";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/agents", label: "Agents" },
  { href: "/maps", label: "Maps" },
  { href: "/contact", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">VALORANT HUB</p>
          <p className="muted">Situs penggemar tidak resmi untuk mengenal agents dan maps VALORANT.</p>
        </div>
        <nav aria-label="Tautan footer" className="footer__links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <div>
          <p className="footer__label">Dibuat oleh</p>
          <p><strong>Muhamad Farel</strong></p>
          <p className="muted">NIM 535250005</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p className="muted">© {new Date().getFullYear()} Valorant Hub. VALORANT adalah merek dagang Riot Games, Inc.</p>
      </div>
    </footer>
  );
}
