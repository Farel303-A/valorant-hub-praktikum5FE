import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ButtonLink from "@/components/ButtonLink";
import { maps, getMap } from "@/data/maps";

export function generateStaticParams() {
  return maps.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const map = getMap(slug);
  return { title: map ? map.name : "Map tidak ditemukan" };
}

export default async function MapDetailPage({ params }) {
  const { slug } = await params;
  const map = getMap(slug);
  if (!map) notFound();

  return (
    <>
      <PageHeader title={map.name} subtitle={`${map.location} · ${map.sites} bomb site`} />
      <section className="section">
        <div className="container detail" style={{ "--accent": map.color }}>
          <div className="detail__visual detail__visual--map">{map.name}</div>
          <div>
            <p className="lead">{map.description}</p>
            <h2>Tips</h2>
            <ul className="abilities">
              {map.tips.map((t) => (
                <li key={t}>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/maps" variant="ghost">Kembali ke daftar</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
