import { useCarrocaStore } from "@/app/store/carrocaStore";

type OpcaoEvento = {
  id: string;
  texto: string;
  acao: () => void;
};

export type Evento = {
  id: string;
  titulo: string;
  descricao: string;
  opcoes: OpcaoEvento[];
};

export const todosEventos: Evento[] = [
  {
    id: "fonte-magica",
    titulo: "Fonte Mágica",
    descricao: "Você encontrou uma fonte misteriosa no caminho.",
    opcoes: [
      {
        id: "beber",
        texto: "Beber da fonte (+15 de vida)",
        acao: () => useCarrocaStore.getState().restaurarVida(),
      },
      {
        id: "ignorar",
        texto: "Ignorar e seguir em frente",
        acao: () => console.log("Ignorou a fonte."),
      },
    ],
  },
];

export const sortearEventoAleatorio = (): Evento => {
  const index = Math.floor(Math.random() * todosEventos.length);
  return todosEventos[index];
};
