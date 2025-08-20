
import React from 'react';
import type { DrawingStep } from '../types';
import { NextIcon, PrevIcon, StartOverIcon, LightbulbIcon, SparklesIcon } from './icons';

interface TutorialPanelProps {
  step: DrawingStep | null;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onStartOver: () => void;
  isFinalGuidedStep: boolean;
  isFreeDrawStep: boolean;
}

export const TutorialPanel: React.FC<TutorialPanelProps> = ({
  step,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onStartOver,
  isFinalGuidedStep,
  isFreeDrawStep,
}) => {
  if (isFreeDrawStep) {
    return (
       <div className="flex flex-col h-full justify-center text-center p-4 bg-green-50 rounded-2xl border-2 border-green-200">
          <SparklesIcon className="w-16 h-16 text-green-500 mx-auto" />
          <h3 className="text-2xl font-bold text-green-800 mt-4">¡Ahora te toca a ti!</h3>
          <p className="text-lg text-green-700 mt-2">
            El dibujo es tuyo. ¡Agrega colores, un fondo, o lo que tu imaginación quiera! Hazlo único.
          </p>
          <button
            onClick={onStartOver}
            className="mt-8 w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            ¡Dibujar Otro!
          </button>
        </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-between p-4 bg-purple-50 rounded-2xl border-2 border-purple-200">
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-bold text-purple-700">Paso {currentStep}/{totalSteps}</p>
           <button 
              onClick={onStartOver}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
           >
             <StartOverIcon className="w-4 h-4" />
             Empezar de Nuevo
          </button>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{step?.name}</h3>
        
        <p className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-inner min-h-[100px]">
          {step?.instruction}
        </p>

        {step?.hint && (
            <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <LightbulbIcon className="h-5 w-5 text-yellow-500"/>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-semibold">Pista: <span className="font-normal">{step.hint}</span></p>
                    </div>
                </div>
            </div>
        )}
      </div>
      
      <div className="flex gap-4 mt-auto pt-4">
        <button
          onClick={onPrev}
          disabled={currentStep === 1}
          className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 font-bold py-3 px-4 rounded-lg shadow-sm hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <PrevIcon className="w-5 h-5" />
          Atrás
        </button>
        <button
          onClick={onNext}
          className="flex-1 flex items-center justify-center gap-2 bg-purple-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-purple-600 transition-colors"
        >
          {isFinalGuidedStep ? '¡Terminar!' : 'Siguiente'}
          <NextIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
