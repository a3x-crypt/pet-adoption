import React from "react";

export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{animal}</h1>
      <h2>{name}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
