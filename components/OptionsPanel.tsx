
import React, { useState } from 'react';
import type { Manifest, ManifestSubject, ManifestCustomization } from '../types';
import { subjectIcons, customizationIcons, BackIcon } from './icons';

interface OptionsPanelProps {
  onGenerate: (subject: ManifestSubject, customization: ManifestCustomization) => void;
  mode: 'sophie' | 'papi';
  onBack: () => void;
  manifest: Manifest;
}

export const OptionsPanel: React.FC<OptionsPanelProps> = ({ onGenerate, mode, onBack, manifest }) => {
  const [selectedSubject, setSelectedSubject] = useState<ManifestSubject | null>(null);
  const [selectedCustomization, setSelectedCustomization] = useState<ManifestCustomization | null>(null);
  
  const handleSelectSubject = (subject: ManifestSubject) => {
    setSelectedSubject(subject);
    setSelectedCustomization(null); // Reset customization on new subject selection
  }

  const handleGenerate = () => {
    if (selectedSubject) {
        // Use selected customization, or the first one if none is selected (e.g. for drawings with only one 'default' option)
        const customizationToUse = selectedCustomization || selectedSubject.customizations[0];
        onGenerate(selectedSubject, customizationToUse);
    }
  };
  
  const filteredSubjects = manifest.subjects.filter(s => s.mode === mode);
  const showCustomizations = selectedSubject && selectedSubject.customizations.length > 1;

  return (
    <div className="w-full p-6 flex flex-col items-center justify-center bg-gray-50 rounded-lg relative">
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition-colors"
        aria-label="Volver a la selección de modo"
      >
        <BackIcon className="w-4 h-4" />
        Volver
      </button>
      
      <h2 className="text-2xl font-bold text-gray-700 mb-4">¿Qué dibujamos hoy?</h2>
      
      <div className="mb-6 w-full">
        <h3 className="text-lg font-semibold text-gray-600 mb-3 text-center">1. Elegí un tema</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSubjects.map(subject => {
            const Icon = subjectIcons[subject.iconId];
            return (
              <button
                key={subject.id}
                onClick={() => handleSelectSubject(subject)}
                className={`p-4 rounded-xl border-4 transition-all duration-200 flex flex-col items-center justify-center text-center ${
                  selectedSubject?.id === subject.id
                    ? 'border-purple-500 bg-purple-100 scale-110'
                    : 'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <div className="w-16 h-16 mx-auto text-gray-600">{Icon ? <Icon /> : null}</div>
                <span className="font-semibold mt-2 block text-sm">{subject.name}</span>
              </button>
            )
          })}
        </div>
      </div>
      
      {showCustomizations && selectedSubject ? (
        <div className="mb-6 w-full max-w-md">
          <h3 className="text-lg font-semibold text-gray-600 mb-3 text-center">2. Personalizalo (opcional)</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {selectedSubject.customizations.map(customization => {
              // We show all options including default, but handle no-selection case
              // Or filter out default
              if (customization.id === 'default') return null;

              const CustomizationIcon = customization.iconId ? customizationIcons[customization.iconId] : null;

              return (
              <button
                key={customization.id}
                onClick={() => setSelectedCustomization(custom => custom?.id === customization.id ? null : customization)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-colors ${
                  selectedCustomization?.id === customization.id
                    ? 'border-purple-500 bg-purple-100 text-purple-700'
                    : 'border-gray-300 bg-white text-gray-600 hover:border-purple-300'
                }`}
              >
                {CustomizationIcon && <CustomizationIcon className="w-5 h-5" />}
                {customization.name}
              </button>
            )})}
          </div>
        </div>
      ) : <div className="mb-6 h-[7.5rem] flex items-center justify-center"></div>}

      <button
        onClick={handleGenerate}
        disabled={!selectedSubject}
        className="w-full max-w-xs text-xl font-bold text-white bg-green-500 rounded-lg py-4 px-6 shadow-lg transition-transform transform hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:scale-100"
      >
        ¡A dibujar!
      </button>
    </div>
  );
};