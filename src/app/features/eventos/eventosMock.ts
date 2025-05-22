import { useCarrocaStore } from "@/app/store/carrocaStore";
import toast from "react-hot-toast";


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

// Acesso direto ao estado global
const get = useCarrocaStore.getState;

export const todosEventos: Evento[] = [
  {
    id: "evento-01",
    titulo: "Encruzilhada Mística",
    descricao:
      "Você encontra uma velha encruzilhada com dois caminhos mágicos.",
    opcoes: [
      {
        id: "essencia",
        texto: "Caminho brilhante (ganhar 10 de essência)",
        acao: () => {
          get().ganharEssencia(10);
        },
      },
      {
        id: "cura",
        texto: "Caminho restaurador (restaurar vida)",
        acao: () => {
          get().restaurarVida();
        },
      },
    ],
  },
  {
    id: "evento-02",
    titulo: "Ataque de Bandidos",
    descricao: "Emboscada! Um grupo tenta saquear sua carroça.",
    opcoes: [
      {
        id: "defender",
        texto: "Enfrentar! (perder 20 de vida)",
        acao: () => {
          get().receberDano(20);
        },
      },
      {
        id: "fugir",
        texto: "Fugir e perder 5 de essência",
        acao: () => {
          get().ganharEssencia(-5);
        },
      },
    ],
  },
  {
    id: "evento-03",
    titulo: "Fonte do Conhecimento",
    descricao: "Você encontra uma ruína antiga coberta de inscrições kantika.",
    opcoes: [
      {
        id: "investigar",
        texto: "Beber da fonte (ganhar 15 de poder)",
        acao: () => {
          get().calcularPoder(); // recalcula
          toast.success(
            "Você absorveu conhecimento. Seu poder foi recalculado!"
          );
        },
      },
      {
        id: "ignorar",
        texto: "Seguir viagem",
        acao: () => {
          /* sem efeito */
        },
      },
    ],
  },
];

export const sortearEventoAleatorio = (): Evento => {
  const index = Math.floor(Math.random() * todosEventos.length);
  return todosEventos[index];
};
