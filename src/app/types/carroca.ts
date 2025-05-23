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
  equipamentos: Equipamento[]; // espadas, armaduras, selas...
  aprimoramentos: Modificador[]; // atualizações diretas da carroça
  efeitosTemporarios: BuffDebuff[]; // buffs/debuffs ativos
  essencia: number;
  poder: number;
};

export type Equipamento = {
  id: string;
  nome: string;
  descricao: string;
  alvo: "carroca" | "tripulacao" | "passageiro" | "global";
  tipo: "arma" | "defesa" | "suporte" | "magia";
  efeitoBase: (atributos: AtributosBase) => AtributosBase;
  refinamentos?: Refinamento[];
  encantamentos?: Encantamento[];
  runas?: Runa[];
};

export type Refinamento = {
  id: string;
  nome: string;
  descricao: string;
  aplicar: (equip: Equipamento) => Equipamento;
};

export type Encantamento = {
  id: string;
  nome: string;
  descricao: string;
  aplicar: (atributos: AtributosBase) => AtributosBase;
};

export type Runa = {
  id: string;
  nome: string;
  descricao: string;
  alterarEfeito?: (equip: Equipamento) => Equipamento;
  alterarAtributos?: (atributos: AtributosBase) => AtributosBase;
};
