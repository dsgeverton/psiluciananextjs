import { DadosPessoais } from '@/types';
import Header from '../../components/Header';
import Main from '../../components/Main';

export default function CurriculoPage() {
  // Dados fictícios para demonstração
  const dadosPessoais: DadosPessoais = {
    nome: 'Luciana Pereira de Assis',
    email: 'lucianapsiassis@gmail.com',
    telefone: '(22) 98182-7116',
    endereco: 'Avenida Presidente Vargas, 415, 28053-100, Campos dos Goytacazes, Brasil',
    links: [{
      descricao: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucianapsiassis/',
    },
    {
      descricao: 'Meu site',
      url: 'https://www.linkedin.com/in/lucianapsiassis/',
    },
    {
      descricao: 'Instagram',
      url: 'https://www.instagram.com/lucianapsiassis/',
    }
    ]
  };

  const competencias = [
    { nome: 'Responsabilidade', nivel: 100 },
    { nome: 'Trabalho em equipe', nivel: 80 },
    { nome: 'Comunicação Interpessoal', nivel: 100 },
    { nome: 'Capacidade de ouvir e questionar', nivel: 100 },
    { nome: 'Resolução de problemas', nivel: 100 },
    { nome: 'Análise e planejamento', nivel: 90 },
    { nome: 'Capacidade de adaptação', nivel: 90 },
    // Adicione outras competências aqui
  ];

  const experiencias = [
    {
      cargo: 'Serviço de psicologia aplicado',
      empresa: 'SPA, Estágio, Campos dos Goytacazes',
      periodo: '2019 - 2020',
      descricao: 'Estágio interno na Universidade Federal Fluminense em terapia cognitivo-comportamental (TCC).',
    }, {
      cargo: 'Projeto aplicado do protocolo Mindfulness',
      empresa: 'Estágio, Campos dos Goytacazes',
      periodo: '2021 - 2021',
      descricao: 'Projeto criado para avaliação dos níveis de ansiedade pré e pós aplicação do protocolo Mindfulness em universitários.',
    }, {
      cargo: 'Atendimento Psicológico Social',
      empresa: 'Estágio Extracurricular, Campos dos Goytacazes',
      periodo: '2021 - 2021',
      descricao: 'Atendimento de pacientes de forma online com participação de supervisão em grupo.',
    },
    {
      cargo: 'Experiência de atendimento clínico, Psicólogo',
      empresa: 'Campos dos Goytacazes e Remoto',
      periodo: '2021 - PRESENTE',
      descricao: 'Oferecido de forma online e presencial com público alvo crianças acima de 5 (cinco) anos, adolescentes e adultos pela abordagem Terapia Cognitivo-Comportamental (TCC).',
    },{
      cargo: 'Psicóloca TCC',
      empresa: 'Italva',
      periodo: '2023 - PRESENTE',
      descricao: 'Atendimento psicológico com crianças apartir de 4 anos, pela abordagem Terapia Cognitivo-Comportamental (TCC).',
    },
    // Adicione outras experiências aqui
  ];

  const formacoes = [
    {
      curso: 'Curso de informática',
      instituicao: 'Visual Mídia Formação	Profissional, Italva',
      periodo: '2008 - 2009',
    }, {
      curso: 'Curso de inglês básico e intermediário',
      instituicao: 'Visual Mídia Formação	Profissional, Italva',
      periodo: '20013 - 2013',
    }, {
      curso: 'Ensino Médio Completo',
      instituicao: 'Colégio Estadual João Guimarães, Italva',
      periodo: '2013 - 2015',
    }, {
      curso: 'Psicologia',
      instituicao: 'Universidade Federal Fluminense (UFF), Campos dos Goytacazes',
      periodo: '2016 - 2021',
    }, {
      curso: 'Programa Bolsa Desenvolvimento Acadêmico - Estimulação Cognitiva para idosos',
      instituicao: 'UNIT, Campos dos Goytacazes',
      periodo: '2018 - 2019',
    },
    // Adicione outras formações aqui
  ];

  return (
    <div className="w-full bg-white flex justify-center mx-auto p-4">
      <div className='shadow-lg shadow-indigo-500/50 flex sm:flex-row flex-col w-fit rounded overflow-hidden'>
        <Header dadosPessoais={dadosPessoais} competencias={competencias} />
        <Main experiencias={experiencias} formacoes={formacoes} />
      </div>
    </div>
  );
}