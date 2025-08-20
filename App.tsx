
import React, { useState, useCallback, useEffect } from 'react';
import { OptionsPanel } from './components/OptionsPanel';
import { DrawingCanvas } from './components/DrawingCanvas';
import { TutorialPanel } from './components/TutorialPanel';
import type { Tutorial, UserProfile, Manifest, ManifestSubject, ManifestCustomization } from './types';
import { LoadingSpinner } from './components/icons';
import { Auth } from './components/Auth';
import { GoogleClientIdModal } from './components/GoogleClientIdModal';
import { ModeSelection } from './components/ModeSelection';
import { useDrawing } from './hooks/useDrawing';
import { DrawingToolbar } from './components/DrawingToolbar';

const loadingMessages = [
    'Buscando el cuaderno de dibujos...',
    'Afilando los lápices...',
    '¡Abriendo la página correcta!',
    '¡Tu lección de dibujo casi está lista!',
];

const App: React.FC = () => {
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [canvasKey, setCanvasKey] = useState(0);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [drawingMode, setDrawingMode] = useState<'sophie' | 'papi' | null>(null);
  const [manifest, setManifest] = useState<Manifest | null>(null);
  
  const [googleClientId, setGoogleClientId] = useState<string | null>(
    () => localStorage.getItem('googleClientId') || '870032809817-r75gfueiis8sdmk8f34vdkk0s7rm3kc6.apps.googleusercontent.com'
  );
  const [isClientIdModalOpen, setIsClientIdModalOpen] = useState(false);
  
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(loadingMessages[0]);
  const [isDevMode, setIsDevMode] = useState(() => localStorage.getItem('isDevMode') === 'true');

  const drawing = useDrawing();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('sophieUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error("No se pudo parsear los datos del localStorage", err);
    }
    
    const fetchManifest = async () => {
        try {
          const response = await fetch('/tutorials/manifest.json');
          if (!response.ok) {
            throw new Error('No se pudo cargar el manifiesto de tutoriales.');
          }
          const data: Manifest = await response.json();
          setManifest(data);
        } catch (err) {
          let userMessage = 'No pudimos preparar los dibujos. Por favor, recargá la página.';
          let devDetails = (err instanceof Error) ? `${err.name}: ${err.message}` : String(err);
          setError(`${userMessage}|||${devDetails}`);
        }
      };
      fetchManifest();
  }, []);
  
  useEffect(() => {
    if (isLoading) {
      const intervalId = setInterval(() => {
        setCurrentLoadingMessage(prevMessage => {
          const currentIndex = loadingMessages.indexOf(prevMessage);
          const nextIndex = (currentIndex + 1) % loadingMessages.length;
          return loadingMessages[nextIndex];
        });
      }, 2500);

      return () => clearInterval(intervalId);
    }
  }, [isLoading]);

  const handleLogin = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('sophieUser', JSON.stringify(profile));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('sophieUser');
  };

  const handleSaveClientId = (clientId: string) => {
    setGoogleClientId(clientId);
    localStorage.setItem('googleClientId', clientId);
    setIsClientIdModalOpen(false);
  };
  
  const handleStartOver = () => {
    setTutorial(null);
    setCurrentStepIndex(0);
    setError(null);
    setIsLoading(false);
    setDrawingMode(null);
    drawing.clearCanvas();
  };
  
  const toggleDevMode = () => {
    setIsDevMode(prev => {
        const newMode = !prev;
        localStorage.setItem('isDevMode', String(newMode));
        handleLogout();
        return newMode;
    });
  };

  const handleLoadTutorial = useCallback(async (subject: ManifestSubject, customization: ManifestCustomization) => {
    setIsLoading(true);
    setError(null);
    setTutorial(null);
    drawing.clearCanvas();
    
    const path = `/tutorials/${subject.id}/${customization.id}.json`;

    try {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`No se pudo encontrar el tutorial en "${path}". ¿Olvidaste crearlo?`);
        }
        const newTutorial: Tutorial = await response.json();

        setTutorial(newTutorial);
        setCurrentStepIndex(0);
        setCanvasKey(prevKey => prevKey + 1);
    } catch (err) {
        let userMessage = 'Lo siento, no pude encontrar ese dibujo. ¡Por favor, intentá con otro!';
        let devDetails = '';

        if (err instanceof Error) {
            console.error("Error al cargar el tutorial:", err);
            devDetails = `${err.name}: ${err.message}`;
        } else {
            console.error("Ocurrió un error inesperado:", err);
            devDetails = String(err);
        }
        setError(`${userMessage}|||${devDetails}`);
    } finally {
        setIsLoading(false);
    }
  }, [drawing]);


  const handleNextStep = () => {
    if (tutorial && currentStepIndex < tutorial.steps.length) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const isFreeDrawStep = tutorial ? currentStepIndex === tutorial.steps.length : false;
  const isFinalGuidedStep = tutorial ? currentStepIndex === tutorial.steps.length - 1 : false;

  return (
    <div className="min-h-screen font-sans flex flex-col items-center p-4 bg-gradient-to-br from-blue-100 to-purple-100">
      <header className="w-full max-w-6xl mx-auto mb-4 flex justify-between items-start p-2">
        <div className="text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-purple-600 drop-shadow-md">
            El Rincón de Dibujo de Sophie
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">¡Aprendamos a dibujar juntos!</p>
        </div>
        <div className="flex flex-col items-end gap-2">
            <div className="flex-shrink-0">
                <Auth 
                    user={user} 
                    onLogin={handleLogin} 
                    onLogout={handleLogout} 
                    googleClientId={googleClientId}
                    onConfigure={() => setIsClientIdModalOpen(true)}
                    isDevMode={isDevMode}
                />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-200/50 p-1 rounded-md">
                <label htmlFor="devModeToggle" className="cursor-pointer select-none">Modo Desarrollador</label>
                <input 
                    type="checkbox" 
                    id="devModeToggle"
                    checked={isDevMode}
                    onChange={toggleDevMode}
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
            </div>
        </div>
      </header>
      
      <main className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col lg:flex-row gap-4">
        {!drawingMode && !tutorial && !isLoading && !error && (
            <ModeSelection onSelectMode={(mode) => setDrawingMode(mode)} />
        )}
        
        {drawingMode && !tutorial && !isLoading && !error && (
          manifest ? (
            <OptionsPanel 
              onGenerate={handleLoadTutorial} 
              mode={drawingMode}
              onBack={() => setDrawingMode(null)}
              manifest={manifest}
            />
          ) : (
            <div className="w-full flex-grow flex flex-col items-center justify-center h-96 md:h-[600px] text-center">
                <LoadingSpinner className="w-16 h-16 text-purple-500" />
                <p className="mt-4 text-lg text-gray-700">Cargando dibujos...</p>
            </div>
          )
        )}

        {(isLoading || error) && (
          <div className="w-full flex-grow flex flex-col items-center justify-center h-96 md:h-[600px] text-center">
            {isLoading && (
              <>
                <LoadingSpinner className="w-16 h-16 text-purple-500" />
                <p className="mt-4 text-lg text-gray-700">{currentLoadingMessage}</p>
                 <button 
                  onClick={handleStartOver} 
                  className="mt-6 bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancelar
                </button>
              </>
            )}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-left" role="alert">
                  <strong className="font-bold">¡Oh, no! </strong>
                  <span className="block sm:inline">{error.split('|||')[0]}</span>
                  
                  {error.includes('|||') && (
                    <details className="mt-2 text-xs">
                        <summary className="cursor-pointer font-semibold hover:underline">Detalles técnicos</summary>
                        <pre className="mt-1 bg-red-200 p-2 rounded whitespace-pre-wrap font-mono text-red-900">
                            {error.split('|||')[1]}
                        </pre>
                    </details>
                  )}

                  <div className="mt-3">
                    <button onClick={handleStartOver} className="bg-red-500 text-white font-bold py-1 px-3 rounded-md hover:bg-red-600 transition-colors">
                        Empezar de Nuevo
                    </button>
                  </div>
              </div>
            )}
          </div>
        )}

        {tutorial && !isLoading && (
          <>
            <div className="w-full lg:w-3/4 flex flex-col items-center gap-4">
              <DrawingCanvas
                key={canvasKey}
                guides={isFreeDrawStep ? [] : tutorial.steps[currentStepIndex]?.newGuides ?? []}
                pastGuides={tutorial.steps.slice(0, currentStepIndex).flatMap(s => s.newGuides)}
                drawing={drawing}
              />
               <DrawingToolbar
                brushColor={drawing.brushColor}
                setBrushColor={drawing.setBrushColor}
                brushSize={drawing.brushSize}
                setBrushSize={drawing.setBrushSize}
                clearCanvas={drawing.clearCanvas}
              />
            </div>
            <div className="w-full lg:w-1/4">
              <TutorialPanel
                step={isFreeDrawStep ? null : tutorial.steps[currentStepIndex]}
                currentStep={currentStepIndex + 1}
                totalSteps={tutorial.steps.length}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
                onStartOver={handleStartOver}
                isFinalGuidedStep={isFinalGuidedStep}
                isFreeDrawStep={isFreeDrawStep}
              />
            </div>
          </>
        )}
      </main>
      
      {isClientIdModalOpen && (
        <GoogleClientIdModal 
          onSave={handleSaveClientId}
          onClose={() => setIsClientIdModalOpen(false)}
        />
      )}
      
    </div>
  );
};

export default App;
