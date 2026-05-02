"use client";

import { useState } from "react";

export default function AddRevision({ onAdd }) {
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    setLoading(true);

    const newRev = {
      revisionNumber: Date.now(),
      date: new Date().toISOString().split("T")[0],
      items: [{ text: "New Task", done: false }]
    };

    await fetch("/api/revisions", {
      method: "POST",
      body: JSON.stringify(newRev)
    });

    onAdd();
    setLoading(false);
  };

  return (
    <button
      onClick={handleAdd}
      className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl"
    >
      {loading ? "Adding..." : "+ Add Revision"}
    </button>
  );
}
