"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/agents", label: "Agents" },
  { href: "/maps", label: "Maps" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Beranda hanya aktif jika persis "/", halaman lain juga aktif di sub-rutenya (mis. /agents/jett)
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link href="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__logo">V</span> VALORANT HUB
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`navbar__menu ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`navbar__link ${isActive(l.href) ? "is-active" : ""}`}
              aria-current={isActive(l.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
