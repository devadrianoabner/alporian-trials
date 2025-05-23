"use client";

import { useCarrocaStore } from "@/app/store/carrocaStore";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { sortearEventoAleatorio } from "@/app/features/eventos/eventosMock";
import type { Evento } from "@/app/features/eventos/eventosMock";

export default function PaginaDeTeste() {
  const carroca = useCarrocaStore((state) => state.carroca);
  const receberDano = useCarrocaStore((state) => state.receberDano);
  const restaurarVida = useCarrocaStore((state) => state.restaurarVida);
  const ganharEssencia = useCarrocaStore((state) => state.ganharEssencia);
  const calcularPoder = useCarrocaStore((state) => state.calcularPoder);

  const [evento, setEvento] = useState<Evento | null>(null);

  useEffect(() => {
    setEvento(sortearEventoAleatorio());
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", color: "white" }}>
      <h1>Página de Teste</h1>

      <section>
        <p>
          <strong>Nome:</strong> {carroca.nome}
        </p>
        <p>
          <strong>Vida:</strong> {carroca.vidaAtual} / {carroca.vidaMaxima}
        </p>
        <p>
          <strong>Essência:</strong> {carroca.essencia}
        </p>
        <p>
          <strong>Ataque:</strong> {carroca.ataque}
        </p>
        <p>
          <strong>Defesa Base:</strong> {carroca.defesaBase}
        </p>
        <p>
          <strong>Velocidade:</strong> {carroca.velocidade}
        </p>
        <p>
          <strong>Poder Total:</strong> {carroca.poder}
        </p>
      </section>

      <section
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => receberDano(20)}>Receber 20 de Dano</button>
        <button onClick={restaurarVida}>Restaurar Vida</button>
        <button onClick={() => ganharEssencia(10)}>
          Ganhar 10 de Essência
        </button>
        <button onClick={() => toast.success("Poder: " + calcularPoder())}>
          Calcular Poder
        </button>
      </section>

      {evento && (
        <section style={{ marginTop: "3rem" }}>
          <h2>📜 Evento: {evento.titulo}</h2>
          <p>{evento.descricao}</p>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {evento.opcoes.map((opcao: Evento["opcoes"][number]) => (
              <button
                key={opcao.id}
                onClick={() => {
                  opcao.acao();
                  toast.success(`Você escolheu: ${opcao.texto}`);
                  setEvento(sortearEventoAleatorio());
                }}
              >
                {opcao.texto}
              </button>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
