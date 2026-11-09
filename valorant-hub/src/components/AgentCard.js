import Link from "next/link";

export default function AgentCard({ agent }) {
  return (
    <Link href={`/agents/${agent.slug}`} className="card" style={{ "--accent": agent.color }}>
      <div className="card__visual">{agent.name[0]}</div>
      <div className="card__body">
        <h3>{agent.name}</h3>
        <span className="tag">{agent.role}</span>
        <p>{agent.description}</p>
      </div>
    </Link>
  );
}
