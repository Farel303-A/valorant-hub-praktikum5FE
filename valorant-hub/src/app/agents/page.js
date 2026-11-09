import PageHeader from "@/components/PageHeader";
import AgentCard from "@/components/AgentCard";
import { agents } from "@/data/agents";

export const metadata = { title: "Agents" };

export default function AgentsPage() {
  return (
    <>
      <PageHeader title="Agents" subtitle="Pilih agent sesuai gaya mainmu." />
      <section className="section">
        <div className="container grid">
          {agents.map((a) => (
            <AgentCard key={a.slug} agent={a} />
          ))}
        </div>
      </section>
    </>
  );
}
