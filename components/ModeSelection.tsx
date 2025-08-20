import React from 'react';

interface ModeSelectionProps {
  onSelectMode: (mode: 'sophie' | 'papi') => void;
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({ onSelectMode }) => {
  return (
    <div className="w-full flex-grow flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Quién va a dibujar hoy?</h2>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Elegí un modo de dibujo. ¡Cada uno tiene sus propios tutoriales!
      </p>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sophie's Mode */}
        <button
          onClick={() => onSelectMode('sophie')}
          className="p-8 rounded-2xl border-4 border-pink-300 bg-pink-50 hover:bg-pink-100 hover:border-pink-400 transition-all duration-200 text-left flex flex-col justify-between transform hover:scale-105"
        >
          <div>
            <h3 className="text-2xl font-bold text-pink-600">Dibujar con Sophie</h3>
            <p className="text-pink-800 mt-2">
              Los dibujos más tiernos y bonitos para aprender paso a paso. ¡Perfectos para crear obras de arte!
            </p>
          </div>
          <span className="mt-6 text-lg font-bold text-pink-600 self-end">Elegir →</span>
        </button>

        {/* Papi's Mode */}
        <button
          onClick={() => onSelectMode('papi')}
          className="p-8 rounded-2xl border-4 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all duration-200 text-left flex flex-col justify-between transform hover:scale-105"
        >
          <div>
            <h3 className="text-2xl font-bold text-blue-600">Dibujar con Papi</h3>
            <p className="text-blue-800 mt-2">
              ¡Los dibujos más chistosos y clásicos! No son perfectos, pero son muy divertidos de hacer.
            </p>
          </div>
          <span className="mt-6 text-lg font-bold text-blue-600 self-end">Elegir →</span>
        </button>
      </div>
    </div>
  );
};
