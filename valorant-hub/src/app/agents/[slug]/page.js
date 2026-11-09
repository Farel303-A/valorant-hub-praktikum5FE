import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ButtonLink from "@/components/ButtonLink";
import { agents, getAgent } from "@/data/agents";

// Dynamic routing: /agents/jett, /agents/sage, dst.
export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const agent = getAgent(slug);
  return { title: agent ? agent.name : "Agent tidak ditemukan" };
}

export default async function AgentDetailPage({ params }) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) notFound();

  return (
    <>
      <PageHeader title={agent.name} subtitle={`${agent.role} · ${agent.origin}`} />
      <section className="section">
        <div className="container detail" style={{ "--accent": agent.color }}>
          <div className="detail__visual">{agent.name[0]}</div>
          <div>
            <p className="lead">{agent.description}</p>
            <h2>Kemampuan</h2>
            <ul className="abilities">
              {agent.abilities.map((ab) => (
                <li key={ab.name}>
                  <strong>{ab.name}</strong>
                  <span>{ab.desc}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/agents" variant="ghost">Kembali ke daftar</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
