
import React, { useEffect, useRef } from 'react';
import type { UserProfile } from '../types';

declare global {
  interface Window {
    google: any;
  }
}

interface AuthProps {
  user: UserProfile | null;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
  googleClientId: string | null;
  onConfigure: () => void;
}

export const Auth: React.FC<AuthProps> = ({ user, onLogin, onLogout, googleClientId, onConfigure }) => {
  const signInDiv = useRef<HTMLDivElement>(null);

  const handleCredentialResponse = (response: any) => {
    try {
      const idToken = response.credential;
      const base64Url = idToken.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );

      const profile = JSON.parse(jsonPayload);
      onLogin({
        name: profile.name,
        email: profile.email,
        picture: profile.picture,
      });
    } catch (error) {
      console.error("Error al decodificar el token de Google:", error);
    }
  };
  
  const handleLogout = () => {
    if (window.google) {
      window.google.accounts.id.disableAutoSelect();
    }
    onLogout();
  };

  useEffect(() => {
    if (!googleClientId || user) {
      return;
    }

    if (window.google?.accounts?.id) {
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleCredentialResponse,
      });
      
      if (signInDiv.current) {
         window.google.accounts.id.renderButton(signInDiv.current, {
            theme: 'outline',
            size: 'large',
            type: 'standard',
            text: 'signin_with',
            shape: 'pill',
            locale: 'es'
         });
      }
    }
  }, [user, onLogin, googleClientId]);

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full" />
        <div className="text-right hidden sm:block">
          <div className="font-semibold text-gray-700">{user.name}</div>
          <div className="text-xs text-gray-500">{user.email}</div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors"
        >
          Salir
        </button>
      </div>
    );
  }

  if (!googleClientId) {
    return (
        <button 
            onClick={onConfigure}
            className="bg-yellow-400 text-yellow-900 font-bold text-sm px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
        >
            Configurar Login
        </button>
    );
  }

  return <div ref={signInDiv} id="signInDiv"></div>;
};
