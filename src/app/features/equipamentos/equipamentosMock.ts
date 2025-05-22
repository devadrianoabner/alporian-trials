import type { Equipamento, Refinamento, Encantamento, Runa } from "@/app/types/carroca";

export const refinamentoFerroRunico: Refinamento = {
  id: "refino-ferro-runico",
  nome: "Ferro Rúnico",
  descricao: "+10% de ataque do equipamento base",
  aplicar: (equip) => ({
    ...equip,
    efeitoBase: (atributos) => {
      const base = equip.efeitoBase(atributos);
      return { ...base, ataque: base.ataque + Math.floor(base.ataque * 0.1) };
    },
  }),
};

export const encantamentoVelocidade: Encantamento = {
  id: "encanto-vento",
  nome: "Vento Rápido",
  descricao: "+2 de velocidade temporária",
  aplicar: (atributos) => ({ ...atributos, velocidade: atributos.velocidade + 2 }),
};

export const runaDesespero: Runa = {
  id: "runa-desespero",
  nome: "Runa do Desespero",
  descricao: "Dobra o ataque se vida for menor que 20%",
  alterarAtributos: (atributos) => {
    if (atributos.vidaAtual < atributos.vidaMaxima * 0.2) {
      return { ...atributos, ataque: atributos.ataque * 2 };
    }
    return atributos;
  },
};

export const couracaPedraViva: Equipamento = {
  id: "couraca-pedra-viva",
  nome: "Couraça de Pedra Viva",
  alvo: "carroca",
  tipo: "defesa",
  descricao: "+10 de defesa base",
  efeitoBase: (atributos) => ({
    ...atributos,
    defesaBase: atributos.defesaBase + 10,
  }),
  refinamentos: [],
  encantamentos: [],
  runas: [],
};

export const trancaTatica: Equipamento = {
  id: "tranca-tatica",
  nome: "Tranca Tática",
  descricao: "Aumenta a moral da tripulação. +3 defesa geral.",
  alvo: "tripulacao",
  tipo: "suporte",
  efeitoBase: (atributos) => ({
    ...atributos,
    defesaBase: atributos.defesaBase + 3,
  }),
};

export const rodaDeEspinhos: Equipamento = {
  id: "roda-espinhos",
  nome: "Roda de Espinhos",
  descricao: "+5 de ataque",
  alvo: "carroca",
  tipo: "arma",
  efeitoBase: (atributos) => ({
    ...atributos,
    ataque: atributos.ataque + 5,
  }),
};
