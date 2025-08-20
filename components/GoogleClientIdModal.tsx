import React, { useState, useEffect } from 'react';

interface GoogleClientIdModalProps {
  onSave: (clientId: string) => void;
  onClose: () => void;
}

export const GoogleClientIdModal: React.FC<GoogleClientIdModalProps> = ({ onSave, onClose }) => {
  const [clientId, setClientId] = useState('');
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    // Se asegura de que se ejecute solo en el cliente donde window está disponible
    setOrigin(window.location.origin);
  }, []);


  const handleSave = () => {
    if (clientId.trim()) {
      onSave(clientId.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Configurar Inicio de Sesión</h2>
        <p className="text-gray-600 mb-4">
          Para habilitar el inicio de sesión con Google, necesitás un "Client ID" configurado correctamente.
        </p>

        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4 text-sm text-yellow-800">
            <p className="font-bold mb-2">¡Paso Importante!</p>
            <p>El error <code className="text-xs">Error 401: invalid_client</code> ocurre cuando la URL de esta aplicación no está autorizada. En la configuración de tu Client ID en Google Cloud, asegurate de que la siguiente URL esté en la lista de <strong className="font-semibold">"Orígenes de JavaScript autorizados"</strong>:</p>
            <div className="mt-2 bg-gray-100 p-2 rounded text-center font-mono select-all text-gray-900">
              {origin || 'Cargando...'}
            </div>
        </div>

        <a
          href="https://console.cloud.google.com/apis/credentials"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mb-4 block"
        >
          Obtener o verificar un Client ID de Google →
        </a>
        <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">
          Tu Google Client ID
        </label>
        <input
          type="text"
          id="clientId"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          placeholder="xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={!clientId.trim()}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-purple-300 transition-colors"
          >
            Guardar y Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
