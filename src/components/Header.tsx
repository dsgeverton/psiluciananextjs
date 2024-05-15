// components/Header.js
import React from 'react';

import { DadosPessoais, Competencia } from '../types';
import ProgressBar from './ProgressBar';
import Image from 'next/image';

interface Props {
  dadosPessoais: DadosPessoais;
  competencias: Competencia[];
}

const Header: React.FC<Props> = ({ dadosPessoais, competencias }) => {
  return (
    <aside className="md:max-w-[300px] flex flex-col gap-5 items-center justify-center px-12 py-8 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 break-words">
      <Image src={'/img/luciana-perfil.jpg'} width={128} height={128} className='rounded-full' alt={dadosPessoais.nome} />
      <p className="mb-1 text-2xl font-bold text-center">{dadosPessoais.nome}</p>
      <div className='w-8 h-[1px] bg-gray-300'></div>
      <p className='uppercase leading-snug'>Psicóloga</p>
      <div className="rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-2">Dados Pessoais</h2>
        <p>{dadosPessoais.endereco}</p>
        <p><span className="font-semibold">Contato: </span>{dadosPessoais.telefone}</p>
        <p><span className="font-semibold">Email: </span>{dadosPessoais.email}</p>
      </div>
      <div className="w-full mb-4">
        <h2 className="text-lg font-semibold mb-2">Links</h2>
        <div className='flex items-start flex-col gap-4'>
          {dadosPessoais.links.map(link => {
            return (
              <a href={link.url} target="_blank" rel="noreferrer" key={link.url} className="mb-2 underline">
                <span className="ml-2">{link.descricao}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Competências</h2>
        {competencias.map((competencia, index) => (
          <div key={index} className="mb-2">
            <p className="mb-1"><span className="font-semibold">{competencia.nome}:</span></p>
            <ProgressBar nivel={competencia.nivel} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Header;
