import React, { useEffect, useState } from "react";
import { useFetchQestion } from "../hooks/fetchHook";
import data from "../database/data";
import { useSelector } from "react-redux";

export default function Question() {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();
  const quest = data[0];

  const questions = useSelector((state) => state.questions?.queue?.[state.questions?.trace]);
  const trace = useSelector((state) => state.questions?.trace);

  useEffect(() => {
    console.log(trace);
  });


  const onSelect = () => {
    setChecked(true);
    console.log("selected");
  };
  if (isLoading) return <h3>isLoading</h3>;
  if (serverError) return <h3>{serverError || "Unknown Error"}</h3>;
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
