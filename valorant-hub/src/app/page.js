import ButtonLink from "@/components/ButtonLink";
import Carousel from "@/components/Carousel";
import AgentSlide from "@/components/AgentSlide";
import MapCard from "@/components/MapCard";
import { agents } from "@/data/agents";
import { maps } from "@/data/maps";

const stats = [
  { value: agents.length, label: "Agents" },
  { value: maps.length, label: "Maps" },
  { value: "5v5", label: "Tactical shooter" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <p className="eyebrow">Fan site VALORANT</p>
          <h1 className="hero__title">
            Defy the <br /> limits.
          </h1>
          <p className="hero__text">
            Valorant Hub adalah profil singkat tentang game tactical shooter 5v5 dari Riot Games:
            kenali agents, pelajari maps, dan susun strategi timmu.
          </p>
          <div className="hero__actions">
            <ButtonLink href="/agents">Lihat agents</ButtonLink>
            <ButtonLink href="/about" variant="ghost">Tentang game</ButtonLink>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stats__item">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Agents pilihan</h2>
            <p className="muted">Geser atau gunakan tombol panah untuk melihat agent lainnya.</p>
          </div>
          <Carousel
            label="Agents pilihan"
            slides={agents.map((a) => <AgentSlide key={a.slug} agent={a} />)}
            interval={6000}
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <h2>Jelajahi maps</h2>
            <p className="muted">Kenali medan sebelum bertempur.</p>
          </div>
          <Carousel
            label="Daftar maps"
            slides={maps.map((m) => <MapCard key={m.slug} map={m} />)}
            perView={{ base: 1, md: 2, lg: 3 }}
            interval={5000}
          />
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Siap masuk ke lapangan?</h2>
          <ButtonLink href="/contact">Hubungi kami</ButtonLink>
        </div>
      </section>
    </>
  );
}
