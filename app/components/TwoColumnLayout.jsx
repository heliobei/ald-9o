"use client";
import Image from 'next/image';

const TwoColumnLayout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-200 dark:bg-slate-700">
      {/* Imagem de fundo e gradiente */}
      <img
        src="/teachs.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-green-300"></div>

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

      {/* Conteúdo centralizado em duas colunas */}
      <div className="relative z-10 max-w-6xl w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da imagem e logo */}
        <div className="flex flex-col items-center justify-center text-center md:text-left">
          <Image
            src="/9o.png"
            alt="Capa do material"
            width={500}
            height={500}
            className="w-60 md:w-72 lg:w-80 xl:w-96 mb-6"
          />
          
        </div>

        {/* Coluna com os botões e textos */}
        <div className="bg-white/40 dark:bg-black/30 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-10 flex flex-col gap-8 justify-center">
          

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3">
              Acesse o Livro do Estudante
            </h2>
            <p className="text-slate-700 dark:text-slate-200 mb-4">
              Material didático completo para os estudantes acompanharem as aulas e atividades.
            </p>
            <a
              href="https://www.flipsnack.com/7E8DB9BBDC9/ajustes_28fev_ald_estudante_9/full-view.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Ver Livro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;

