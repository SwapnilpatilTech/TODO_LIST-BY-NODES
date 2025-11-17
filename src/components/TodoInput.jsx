import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");
  const add = async () => {
    if (!value.trim()) return;
    await onAdd(value.trim());
    setValue("");
  };
  return (
    <div className="input-group">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add a task..."
        onKeyDown={e => e.key === "Enter" && add()}
      />
      <button onClick={add}>Add</button>
    </div>
  );
}
