import ButtonLink from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>404</h1>
        <p className="lead">Halaman tidak ditemukan. Periksa alamatnya atau kembali ke beranda.</p>
        <ButtonLink href="/">Ke beranda</ButtonLink>
      </div>
    </section>
  );
}
