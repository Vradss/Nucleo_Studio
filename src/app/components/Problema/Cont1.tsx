'use client';
import Image from "next/image";
export const Cont1 = () => {return(

    <div className="flex flex-col-reverse border border-t-slate-400 sm:border-transparent sm:flex-row items-center justify-between sm:space-x-6 space-y-1 sm:space-y-0">
      {/* Imagen en pantallas grandes a la izquierda, y en pantallas pequeñas abajo */}
      <div className="sm:basis-2/3">
        <Image
          src="/etapa1.svg"
          alt="Etapa 1 - Imagen"
          width={700}
          height={700}
          className="mx-auto mt-4 sm:mr-4"
        />
      </div>

      {/* Texto en pantallas grandes a la derecha, y en pantallas pequeñas arriba */}
      <div className="sm:basis-1/3  ">
        <p className="text-primaryLila text-lg sm:text-xl mb-2 ">Etapa 1</p>
        <h3 className="text-2xl sm:text-3xl mb-4">
          Entendemos el mercado e identificamos oportunidades
        </h3>
        <p className="subp">
          Analizamos cómo se posicionan tus competidores principales e insights sobre sus mensajes y técnicas de persuasión
        </p>
      </div>
    </div>
)};

export default Cont1;