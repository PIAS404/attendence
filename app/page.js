"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Checklist from "../components/Checklist";
import RevisionCard from "../components/RevisionCard";
import AddRevision from "../components/AddRevision";

export default function Home() {
  const [data, setData] = useState(null);

  const loadData = async () => {
    const res = await fetch("/api/revisions");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <main className="max-w-3xl mx-auto p-4 space-y-4">
      <Header project={data.project} />
      <Checklist items={data.initialChecklist} />

      {data.revisions.map((rev, i) => (
        <RevisionCard key={i} rev={rev} />
      ))}

      <AddRevision onAdd={loadData} />
    </main>
  );
}
