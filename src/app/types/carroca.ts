export type AtributosBase = {
  nome: string;
  experiencia: number;
  nivel: number;
  ataque: number;
  vidaMaxima: number;
  vidaAtual: number;
  capacidade: number;
  defesaBase: number;
  velocidade: number;
};

export type Habilidade = {
  id: string;
  nome: string;
  descricao: string;
  cooldown: number; // em turnos ou segundos
  ultimaAtivacao?: number; // opcional: timestamp ou turno
  ativa?: boolean;
  efeito?: () => void; // função opcional para aplicar efeito
};

export type Modificador = {
  id: string;
  nome: string;
  descricao: string;
  efeito: (atributos: AtributosBase) => AtributosBase;
};

export type BuffDebuff = {
  id: string;
  nome: string;
  tipo: "buff" | "debuff";
  origem: "consumivel" | "passageiro" | "equipamento" | "habilidade";
  duracao: number; // em turnos
  efeito: (atributos: AtributosBase) => AtributosBase;
};

export type Carroca = AtributosBase & {
  habilidades: Habilidade[];
  equipamentos: Modificador[];
  aprimoramentos: Modificador[];
  efeitosTemporarios: BuffDebuff[];
  essencia: number; // moeda para upgrades
  poder: number; // soma total dos atributos + efeitos
};
