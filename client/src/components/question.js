import React, { useEffect, useState } from "react";
import data from "../database/data";

export default function Question() {
  const [checked, setChecked] = useState(undefined);
  const quest = data[0];
  
  useEffect(() => {
    console.log(quest);
  },[quest]);
  
  const onSelect = () => {
    setChecked(true);
    console.log("selected");
  };

  return (
    <div className="questions">
      <h2>{quest.question}</h2>
      <ul key={quest.id}>
        {quest.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`q1-${i}`}
              onChange={onSelect}
            />

            <label className="text-primary" htmlFor={`q1-${i}`}>
              {q}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
