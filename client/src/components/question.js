import React, { useEffect, useState } from "react";
import { useFetchQestion } from "../hooks/fetchHook";
import data from "../database/data";

export default function Question() {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();
  const quest = data[0];

  useEffect(() => {
    console.log(apiData);
  },[apiData] );

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
