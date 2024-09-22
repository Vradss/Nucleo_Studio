'use client';
import { useState } from 'react';
import ProblemaHeader from './ProblemaHeader';
import Cont1 from './Cont1';


export const Problema: React.FC = () => {
    const [activeButton, setActiveButton] = useState<number>(1);

    // Función para manejar el cambio de contenido
    const handleToggle = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
    };

    return (
        <div className="w-full max-w-7xl mx-auto mt-10 px-4 ">
        <ProblemaHeader />
  
        {/* Toggle Buttons para pantallas grandes */}
        <div className="hidden sm:flex mt-6 justify-center ">
          {[1, 2, 3, 4, 5].map((button) => (
            <button
              key={button}
              onClick={() => handleToggle(button)}
              className={`px-2 w-full py-2 text-lg border border-primaryLila transition duration-300 text-center ${
                activeButton === button
                  ? 'bg-primaryLila text-white '
                  : 'bg-white text-primaryLila '
              } hover:bg-primaryLila hover:text-white`}
            >
              ETAPA {button}
            </button>
          ))}
        </div>
  
        {/* Contenido dinámico para pantallas grandes */}
        <div className="hidden sm:block mt-6 p-4 max-w-8xl">
          {activeButton === 1 && <div><Cont1 /></div>}
          {activeButton === 2 && <div>Contenido del botón 2</div>}
          {activeButton === 3 && <div>Contenido del botón 3</div>}
          {activeButton === 4 && <div>Contenido del botón 4</div>}
          {activeButton === 5 && <div>Contenido del botón 5</div>}
        </div>
  
        {/* Versión móvil: Mostrar cada botón con su contenido directamente uno debajo del otro */}
        <div className="sm:hidden mt-10 space-y-4">
          <div className="p-4">
            <div className="mb-2 text-lg font-bold">ETAPA 1</div>
            <div className="mt-2">
              <Cont1 />
            </div>
          </div>
          <div className="p-4">
            <div className="mb-2 text-lg font-bold">ETAPA 2</div>
            <div className="mt-2">Contenido del botón 2</div>
          </div>
          <div className="p-4">
            <div className="mb-2 text-lg font-bold">ETAPA 3</div>
            <div className="mt-2">Contenido del botón 3</div>
          </div>
          <div className="p-4">
            <div className="mb-2 text-lg font-bold">ETAPA 4</div>
            <div className="mt-2">Contenido del botón 4</div>
          </div>
          <div className="p-4">
            <div className="mb-2 text-lg font-bold">ETAPA 5</div>
            <div className="mt-2">Contenido del botón 5</div>
          </div>
        </div>
      </div>
    );
};

export default Problema;
