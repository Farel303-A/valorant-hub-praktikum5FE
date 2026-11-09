import Link from "next/link";

export default function MapCard({ map }) {
  return (
    <Link href={`/maps/${map.slug}`} className="card" style={{ "--accent": map.color }}>
      <div className="card__visual">{map.name}</div>
      <div className="card__body">
        <h3>{map.name}</h3>
        <span className="tag">{map.sites} bomb site</span>
        <p>{map.description}</p>
      </div>
    </Link>
  );
}
