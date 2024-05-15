// types.ts
export interface DadosPessoais {
  nome: string;
  email: string;
  endereco: string;
  telefone: string;
  links: Link[];
}

export interface Link {
  descricao: string;
  url: string;
}

export interface Competencia {
  nome: string;
  nivel: number;
}

export interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
}