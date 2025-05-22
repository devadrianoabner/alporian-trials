"use client";

import { useCarrocaStore } from "@/app/store/carrocaStore";
import { useEffect, useState } from "react";


// TODO: Substituir mensagens fixas por IA em tempo real treinada com a lore de Alporia

const mensagensBase = [
  "A estrada é longa, mas a alma é eterna.",
  "Toda escolha revela quem você é…",
  "O silêncio às vezes é a melhor resposta.",
  "O poder… nem sempre é o que você imagina.",
];

export default function ChatOraculo() {
  const { vidaAtual, vidaMaxima, essencia, poder } =
    useCarrocaStore((state) => state.carroca);

  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (vidaAtual < vidaMaxima * 0.4) {
      setMensagem("Vejo que sua carroça sangra. Cuide-se, viajante.");
    } else if (essencia >= 30) {
      setMensagem("Está acumulando essências... planejando algo sombrio?");
    } else if (poder > 50) {
      setMensagem("Seu poder cresce. Mas o que custou?");
    } else {
      setMensagem(
        mensagensBase[Math.floor(Math.random() * mensagensBase.length)]
      );
    }
  }, [vidaAtual, essencia, poder]);

  return (
    <div
      style={{
        marginTop: "3rem",
        background: "#1a1a1a",
        padding: "1rem",
        borderLeft: "5px solid #ffb703",
        borderRadius: "4px",
        fontStyle: "italic",
        color: "#ccc",
        maxWidth: "500px",
      }}
    >
      <strong>🧠 Oráculo Chat:</strong> <br />
      “{mensagem}”
    </div>
  );
}
