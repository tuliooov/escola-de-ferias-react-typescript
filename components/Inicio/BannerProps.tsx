import Link from "next/link";
import React from "react";

export default function BannerProps(props) {


  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              {props.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              {props.description}
              </p>
            <div className="mt-12">
              <Link href={`/exemplos`} >
                <a
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded ou tline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Voltar
                </a>
              </Link >
              {props.buttonAction && <button onClick={props.buttonAction.action}>{props.buttonAction.text}</button>}
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
  )
}