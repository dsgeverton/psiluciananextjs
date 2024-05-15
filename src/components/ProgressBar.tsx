'use client'
import React, { useEffect, useState } from 'react';

interface Props {
  nivel: number;
}

const ProgressBar: React.FC<Props> = ({ nivel }) => {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progresso < nivel) {
        setProgresso(progresso + 1);
      }
    }, 10);

    // Limpando o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [progresso, nivel]);

  return (
    <div className="flex progress-bar">
      <div className="progress bg-blue-200 h-1" style={{ width: `${progresso}%` }}></div>
    </div>
  );
};

export default ProgressBar;
