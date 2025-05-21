"use client";

import { useTestStore } from "@/app/store/testStore";

export default function TestTecnologias() {
  const contador = useTestStore((state) => state.contador);
  const incrementar = useTestStore((state) => state.incrementar);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Aumentar</button>
    </div>
  );
}
