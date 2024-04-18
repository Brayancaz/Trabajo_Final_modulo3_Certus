import { useState } from "react";

export const Conten = () => {
  // console.log("search", search);
  return (
    <>
      <div className=" items-center justify-center ">
        <div
          className="flex items-center max-w-md mx-auto bg-white rounded-lg border border-solid border-gray-400"
          x-data="{ search: '' }"
        >
          <div className="w-full">
            <input
              type="search"
              className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
              placeholder="Ingresa el nombre a buscar"
              x-model="search"
            />
          </div>
        </div>

        <div className=" flex gap-5 justify-center items-center overflow-hidden  py-6 sm:py-5">
          <button className="btn overflow-hidden relative w-40 bg-blue-500 text-white py-3 px-4 rounded-xl font-bold before:block before:absolute before:h-full before:w-full before:bg-red-300 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform">
            {/* <span className="relative">Buscar</span> */}
            Buscar
          </button>

          <form>
            <button className="btn overflow-hidden relative w-40 bg-blue-500 text-white py-3 px-4 rounded-xl font-bold before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300">
              <span className="relative">Limpiar</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
