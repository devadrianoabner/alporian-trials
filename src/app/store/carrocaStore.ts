import { create } from "zustand";
import type { Carroca, AtributosBase } from "@/app/types/carroca";

const atributosIniciais: AtributosBase = {
  nome: "Carroça de Alporia",
  experiencia: 0,
  nivel: 1,
  ataque: 10,
  vidaMaxima: 100,
  vidaAtual: 100,
  capacidade: 2,
  defesaBase: 5,
  velocidade: 1,
};

export type CarrocaStore = {
  carroca: Carroca;
  receberDano: (quantidade: number) => void;
  ganharEssencia: (quantidade: number) => void;
  restaurarVida: () => void;
  calcularPoder: () => number;
};

export const useCarrocaStore = create<CarrocaStore>((set, get) => ({
  carroca: {
    ...atributosIniciais,
    habilidades: [],
    equipamentos: [],
    aprimoramentos: [],
    efeitosTemporarios: [],
    essencia: 0,
    poder: 0,
  },

  receberDano: (quantidade) =>
    set((state) => {
      const novaVida = Math.max(0, state.carroca.vidaAtual - quantidade);
      return {
        carroca: { ...state.carroca, vidaAtual: novaVida },
      };
    }),

  ganharEssencia: (quantidade) =>
    set((state) => ({
      carroca: {
        ...state.carroca,
        essencia: state.carroca.essencia + quantidade,
      },
    })),

  restaurarVida: () =>
    set((state) => ({
      carroca: { ...state.carroca, vidaAtual: state.carroca.vidaMaxima },
    })),

  calcularPoder: () => {
    const state = get().carroca;

    const poderBase =
      Math.floor(state.vidaMaxima / 10) + state.ataque + state.defesaBase;

    const efeitoBuffs = state.efeitosTemporarios.reduce((acc, buff) => {
      const mod = buff.efeito(state);
      return acc + (mod.ataque - state.ataque); // ajuste se quiser outros atributos
    }, 0);

    const efeitoEquipamentos = state.equipamentos.reduce((acc, eq) => {
      const mod = eq.efeito(state);
      return acc + (mod.ataque - state.ataque);
    }, 0);

    const total = poderBase + efeitoBuffs + efeitoEquipamentos;

    set((s) => ({
      carroca: { ...s.carroca, poder: total },
    }));

    return total;
  },
}));
