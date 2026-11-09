"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <>
      <PageHeader title="Kontak" subtitle="Punya saran atau ingin mabar? Kirim pesan." />
      <section className="section">
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Nama
              <input name="name" required />
            </label>
            <label>
              Riot ID
              <input name="riotid" placeholder="Nama#TAG" />
            </label>
            <label>
              Pesan
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn btn--primary" type="submit">Kirim pesan</button>
            {sent && <p className="form__ok">Pesan terkirim. Terima kasih!</p>}
          </form>
        </div>
      </section>
    </>
  );
}
