'use client';
import Image from 'next/image';

export const ProblemaHeader = () => {
    return (
    <div className="flex flex-col items-center justify-center space-y-4">
  {/* Div con el contenido y la imagen */}
  <div className="border border-primaryLila px-2 py-1 flex justify-center items-center text-primaryLila w-40">
    <Image
      src="/arrow-purple.svg"
      alt="arrow_icon"
      width={10}
      height={10}
      className="mr-4"
    />
    LA SOLUCIÓN
  </div>

  {/* Título h2 centrado */}
  <h2 className="text-center ">
    Así es cómo te guiaremos para que te diferencies y destaques en internet con la página principal de tu web
  </h2>

  {/* Párrafo centrado */}
  <p className="text-center ">
    Conoce nuestra metodología para empresas de servicios tecnológicos B2B y SaaS:
  </p>
</div>
)};
export default ProblemaHeader;