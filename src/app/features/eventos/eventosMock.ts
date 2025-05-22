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

export const todosEventos: Evento[] = [];

export const sortearEventoAleatorio = (): Evento => {
  const index = Math.floor(Math.random() * todosEventos.length);
  return todosEventos[index];
};
