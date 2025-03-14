"use client";
import Image from 'next/image';

const TwoColumnLayout = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-slate-200 dark:bg-slate-600">
      {/* Imagem de fundo e gradiente */}
      <img
        src="/teachs.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-green-200 opacity-80"></div>

      {/* Logo no canto superior esquerdo */}
      <a
        href="http://www.beieducacao.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 left-4 z-10"
      >
        <Image
          src="/logo-white.png"
          alt="Logo BEĨ"
          width={70}
          height={70}
          className="mx-8"
        />
      </a>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-16">
        <Image
          src="/9o.png"
          alt="Aprendendo a lidar com dinheiro"
          width={500}
          height={500}
          className="w-64 sm:w-64 md:w-64 lg:w-80 xl:w-96"
        />
        <div className="mt-4">
          <Image
            src="/SEED.png"
            alt="Logo"
            width={200}
            height={100}
            className="mx-auto"
          />

          <h1 className='py-4 my-4 px-8 font-bold md:text-xl text-normal text-white bg-[rgba(155,155,155,0.5)] rounded-xl'>
            O Conteúdo será atualizado em breve.
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
