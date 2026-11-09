import ButtonLink from "@/components/ButtonLink";

export default function AgentSlide({ agent }) {
  return (
    <article className="showcase" style={{ "--accent": agent.color }}>
      <div className="showcase__text">
        <span className="tag">{agent.role}</span>
        <h3 className="showcase__name">{agent.name}</h3>
        <p className="showcase__desc">{agent.description}</p>
        <ul className="showcase__abilities" aria-label={`Kemampuan ${agent.name}`}>
          {agent.abilities.map((ab) => (
            <li key={ab.name}>{ab.name}</li>
          ))}
        </ul>
        <ButtonLink href={`/agents/${agent.slug}`}>Lihat detail</ButtonLink>
      </div>
      <div className="showcase__visual" aria-hidden="true">
        <span className="showcase__letter">{agent.name[0]}</span>
        <span className="showcase__origin">{agent.origin}</span>
      </div>
    </article>
  );
}
