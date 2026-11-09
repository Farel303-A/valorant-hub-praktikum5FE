import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Tentang" };

const facts = [
  { label: "Pengembang", value: "Riot Games" },
  { label: "Genre", value: "Tactical shooter 5v5" },
  { label: "Rilis", value: "2020" },
  { label: "Platform", value: "PC" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Tentang VALORANT" subtitle="Profil singkat game dan situs ini." />
      <section className="section">
        <div className="container about">
          <div>
            <h2>Apa itu VALORANT?</h2>
            <p>
              VALORANT adalah game tembak-menembak taktis di mana dua tim beranggotakan lima pemain
              bergantian menyerang dan bertahan. Penyerang memasang Spike, bertahan berarti
              mencegahnya meledak.
            </p>
            <p>
              Setiap pemain memilih agent dengan kemampuan unik, sehingga kerja sama tim dan
              penggunaan utilitas sama pentingnya dengan kemampuan membidik.
            </p>
            <h2>Misi situs ini</h2>
            <p>
              Menyediakan referensi yang rapi bagi pemain baru: siapa saja agents-nya, bagaimana
              karakter tiap map, dan tips dasar untuk mulai bermain.
            </p>
          </div>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label} className="facts__item">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
