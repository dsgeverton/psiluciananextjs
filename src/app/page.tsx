import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div className="relative] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>

          </div>
        </div>

        <nav className="flex w-full justify-center">
          <Link href={'/curriculo'} className="w-40 flex items-center text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center">Meu Currículo</Link>
        </nav>

        <div className="mx-auto max-w-6xl py-16 sm:py-16 lg:py-44">
          <div className="grid sm:grid-cols-1  lg:grid-cols-2 justify-around items-center">
            <figure className="w-3/4 md:w-2/5 lg:w-3/4 mx-auto mb-8">
              <Image src="/img/luciphoto.jpg" width={432} height={540} alt="" className="rounded-lg shadow-lg shadow-indigo-500/50" />
            </figure>

            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Luciana Assis
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Formada em psicologia pela Universidade Federal Fluminense em 2021
                e atualmente atendo pacientes online com depressão e ansiedade.
                Meus estudos são mais avançados para queixas envolvendo depressão
                e ansiedade.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5522981827116&text=Olá Luciana! Gostaria de falar com você, pode me ajudar?"
                  className="flex items-center text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"
                    fill="#ffffff">
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <span aria-hidden="true" className="ml-2">Fale comigo →</span>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div className="gradient-background"></div>
        </div>
      </div>

      {/* <!-- Hero --> */}
      <div className="relative isolate px-6 pt-14 lg:px-8 lg: mt-36">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div className="gradient-background-rotate"></div>
        </div>

        <div className="mx-auto max-w-2xl py-34 sm:py-34 lg:py-34">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Aprendendo sobre ansiedade
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Esse e-book descreve brevemente as características da ansiedade, que é um tema bem relevante
              nos
              dias de hoje. Por isso, eu e minha amiga e parceira de profissão <i><a
                className="hover:text-fuchsia-400 text-fuchsia-600"
                href="https://www.instagram.com/psihellorainyrangel/">Hellorainy Rangel</a></i>,
              decidimos
              elaborar esse conteúdo com algumas informações importantes sobre o tema para ajudar a
              esclarecer
              e responder diversas dúvidas sobre essa questão.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a download="aprendendo_sobre_ansiedade.pdf" type="application/pdf" target="_blank"
                href="./storage/aprendendo_sobre_ansiedade.pdf"
                className="flex items-center text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" fill="white" viewBox="0 0 512 512">
                  <path
                    d="M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z" />
                </svg>
                <span aria-hidden="true" className="ml-2">Aprendendo sobre ansiedade</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div className="gradient-background-offset"></div>
        </div>
      </div>
      <footer className="w-full h-40 flex justify-center items-end">
        <p className='flex gap-1 items-center text-[#36382E] py-4'>
          <a href="#" className="cursor-pointer">
            <Image className='w-8 rounded-sm' src='/img/codever.png' width={32} height={32} alt="Logo" />
          </a>
          <span className='text-[#F06449] font-bold'>Codever Group</span> &copy; 2023
        </p>
      </footer>
    </main>
  );
}
