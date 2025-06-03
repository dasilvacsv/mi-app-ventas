import React from 'react';
import { Moon, Sun, Store } from 'lucide-react'; // Añadido Store para un icono más temático
import { useTheme } from './ThemeContext'; // Asegúrate que la ruta sea correcta

interface HeaderProps {
  userId: string | null;
  storeName?: string; // Nombre de la tienda para el subtítulo (opcional)
  mainTitle?: string; // Título principal (opcional, con valor por defecto)
}

export const Header: React.FC<HeaderProps> = ({
  userId,
  storeName = "Anaco Cachatina", // Valor por defecto si no se provee
  mainTitle = "Registro de Ventas Diarias" // Valor por defecto
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="pb-6 pt-3 md:pt-4 mb-6 border-b border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/30 -mx-4 md:-mx-6 px-4 md:px-6"> {/* Extiende el fondo y borde */}
      {/* Barra superior para ID de tienda y cambio de tema */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <Store size={18} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate max-w-[150px] sm:max-w-xs">
            ID Tienda: {userId || <span className="italic text-slate-400 dark:text-slate-500">No asignado</span>}
          </span>
        </div>

        <button
          onClick={toggleTheme}
          className="relative p-2 rounded-full text-slate-500 dark:text-slate-400 
                     hover:bg-slate-200 dark:hover:bg-slate-700 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                     dark:focus:ring-offset-slate-900/30 transition-all duration-200"
          aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          <span className="sr-only">Cambiar tema</span> {/* Para accesibilidad */}
          <Sun
            size={20}
            className={`transition-all duration-300 ease-in-out transform
                        ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100 text-amber-400' : 'opacity-0 -rotate-90 scale-0'}`}
          />
          <Moon
            size={20}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out transform
                        ${theme === 'light' ? 'opacity-100 rotate-0 scale-100 text-indigo-500' : 'opacity-0 rotate-90 scale-0'}`}
          />
        </button>
      </div>

      {/* Título principal y subtítulo */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-slate-50 tracking-tight">
          {mainTitle}
        </h1>
        {storeName && (
          <p className="mt-1 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
            {storeName}
          </p>
        )}
      </div>
    </header>
  );
};

