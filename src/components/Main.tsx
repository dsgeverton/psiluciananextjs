// components/Main.js
import React from 'react';
import { Experiencia, Formacao } from '../types';

interface Props {
  experiencias: Experiencia[];
  formacoes: Formacao[];
}

const Main: React.FC<Props> = ({ experiencias, formacoes }) => {
  return (
    <main className='sm:max-w-[600px] bg-gray-50 p-16 flex flex-col gap-8 text-gray-800'>
      <div>
        <h1 className='text-2xl font-extrabold'>Registros</h1>
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-bold'>CRP</p>
          <div>
            <p className='text-lg font-bold'>e-Psi</p>
            <span>Autorização pelo sistema  de psicologia a prestação de serviços de psicologia on-line</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-extrabold'>Experiências</h2>
        <ul className=' flex flex-col gap-4'>
          {experiencias.map((experiencia, index) => (
            <li key={index}>
              <h3 className='font-bold leading-relaxed'>{experiencia.cargo}</h3>
              <p>{experiencia.empresa}</p>
              <p className='text-gray-400 text-sm leading-tight'>{experiencia.periodo}</p>
              <p>{experiencia.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='text-2xl font-extrabold'>Formações</h2>
        <ul className=' flex flex-col gap-4'>
          {formacoes.map((formacao, index) => (
            <li key={index}>
              <h3 className='font-bold leading-relaxed'>{formacao.curso}</h3>
              <p>{formacao.instituicao}</p>
              <p className='text-gray-400 text-sm leading-tight'>{formacao.periodo}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;