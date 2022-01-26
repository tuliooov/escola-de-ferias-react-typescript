import Link from "next/link";
import React from "react";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function ExemplosPage() {

  const exemplos = [
    {
      link: '1componentes',
      title: 'Componentes',
    },
    {
      link: '2props',
      title: 'Props',
    },
    {
      link: '3typescript',
      title: 'Typescript',
    },
    {
      link: '4usestate',
      title: 'useState',
    },
    {
      link: '5useeffect',
      title: 'useEffect',
    },
    {
      link: '6useContextLocal',
      title: 'useContext Local',
    },
    {
      link: '7useContextGlobal',
      title: 'useContext Global',
    },
    {
      link: '8ConexaoBackend',
      title: 'Conexão BackEnd',
    },
    {
      link: '9StyledComponent',
      title: 'Styled Component',
    },
  ]

  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Exemplos
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Acesse a cada exemplo de citados
              </p>
              <div className="mt-12">
                {
                  exemplos.map((exemplo) => (
                    <Link href={`/${exemplo.link}`} >
                      <div
                        style={{ width: 'min-content', cursor: "pointer" }}
                        className="github-star ml-1 text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                      >
                        <a
                        >
                          {exemplo.title}
                        </a>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>
    </>
  );
}