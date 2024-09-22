'use client';
import Image from "next/image";
export const Cont1 = () => {return(

    <div className="flex flex-col-reverse sm:flex-row items-center justify-between sm:space-x-6 space-y-6 sm:space-y-0">
      {/* Imagen en pantallas grandes a la izquierda, y en pantallas pequeñas abajo */}
      <div className="sm:basis-1/2">
        <Image
          src="/etapa1.png"
          alt="Etapa 1 - Imagen"
          width={600}
          height={600}
          className="mx-auto sm:mr-4"
        />
      </div>

      {/* Texto en pantallas grandes a la derecha, y en pantallas pequeñas arriba */}
      <div className="sm:basis-1/2 text-center sm:text-left m-6">
        <p className="text-primaryLila text-lg sm:text-xl mb-2">Etapa 1</p>
        <h2 className="text-2xl sm:text-3xl mb-4">
          Entendemos el mercado e identificamos oportunidades
        </h2>
        <p>
          Analizamos cómo se posicionan tus competidores principales e insights sobre sus mensajes y técnicas de persuasión
        </p>
      </div>
    </div>
)};

export default Cont1;