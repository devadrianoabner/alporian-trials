"use client";

import { useCarrocaStore } from "@/app/store/carrocaStore";
import toast from "react-hot-toast";


export default function PaginaDeTeste() {
  const carroca = useCarrocaStore((state) => state.carroca);
  const receberDano = useCarrocaStore((state) => state.receberDano);
  const restaurarVida = useCarrocaStore((state) => state.restaurarVida);
  const ganharEssencia = useCarrocaStore((state) => state.ganharEssencia);
  const calcularPoder = useCarrocaStore((state) => state.calcularPoder);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1> Teste - HUD da Carroça</h1>

      <section style={{ marginBottom: "1.5rem" }}>
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

      <section style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <button onClick={() => receberDano(20)}>Receber 20 de dano</button>
        <button onClick={restaurarVida}>Restaurar Vida</button>
        <button onClick={() => ganharEssencia(10)}>
          Ganhar 10 de Essência
        </button>
        <button onClick={() => toast.success("Poder: " + calcularPoder())}>
          Calcular Poder
        </button>
      </section>
    </main>
  );
}
