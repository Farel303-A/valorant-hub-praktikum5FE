import PageHeader from "@/components/PageHeader";
import MapCard from "@/components/MapCard";
import { maps } from "@/data/maps";

export const metadata = { title: "Maps" };

export default function MapsPage() {
  return (
    <>
      <PageHeader title="Maps" subtitle="Kenali medan sebelum bertempur." />
      <section className="section">
        <div className="container grid">
          {maps.map((m) => (
            <MapCard key={m.slug} map={m} />
          ))}
        </div>
      </section>
    </>
  );
}
