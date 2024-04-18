import { useEffect, useState } from "react";
import { GetAllBijus } from "../../actions/bijus.api";

export const PageBestias = () => {
  const [biju, setBiju] = useState([]);
  var [loading, setLoading] = useState(false);
  const [selectbestia, setSelectbestia] = useState(null);

  useEffect(() => {
    setLoading(true);
    GetAllBijus().then((res) => {
      if (res.tailedBeasts) {
        setTimeout(() => {
          setBiju(res.tailedBeasts);
          setLoading(false);
        }, 500);
      }
    });
  }, []);
  // console.log("bijus", biju);

  const openModal = (biju) => {
    setSelectbestia(biju);
  };

  const closeModal = () => {
    setSelectbestia(null);
  };

  if (loading === true) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>

          <div>Cargando ...</div>
        </div>
      </div>
    );
  }

  // (
  //   <div>
  //     <h1>Personajes Akatsuki</h1>
  //     <div>
  //       {biju.map((tailedBeasts) => (
  //         <div key={tailedBeasts.id}>
  //           <img src={tailedBeasts.images} alt="" />
  //           <p>{tailedBeasts.name}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
      {biju.map((bestia) => (
        <div key={bestia.id} className="bg-white p-4 rounded shadow-md">
          <img src={bestia.images} alt="" className="w-full h-auto" />
          <div>{bestia.name}</div>
          <div className=" flex md:flex-row flex-col items-center space-x-4">
            <button
              className="flex px-3 py-2 bg-orange-400 text-white font-semibold rounded"
              onClick={() => openModal(bestia)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="ml-1">Ver Info Detallada</span>
            </button>
            <button className="flex px-3 py-2 bg-green-400 text-white font-semibold rounded">
              <span className="ml-1">Seleccionar</span>
            </button>
          </div>
        </div>
      ))}

      {selectbestia && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Detalles del Personaje</h2>
            <div>
              <p>
                <strong>Nombre: </strong> {selectbestia.name}
              </p>
              <p>
                <strong>Jutsu: </strong>
                {selectbestia.jutsu ? selectbestia.jutsu.join(" / ") : ""}
              </p>
              <p>
                <strong>Rasgos Unicos: </strong>
                {selectbestia.uniqueTraits
                  ? selectbestia.uniqueTraits.join(" / ")
                  : ""}
              </p>
              <p>
                <strong>Naturaleza Tipo: </strong>
                {selectbestia.natureType
                  ? selectbestia.natureType.join(" / ")
                  : ""}
              </p>
              <p>
                <strong>KekkeiGenkai: </strong>
                {Array.isArray(selectbestia.personal.kekkeiGenkai)
                  ? selectbestia.personal.kekkeiGenkai.join(" / ")
                  : selectbestia.personal.kekkeiGenkai}
              </p>
              <p>
                <strong>jinchūriki: </strong>
                {Array.isArray(selectbestia.personal.jinchūriki)
                  ? selectbestia.personal.jinchūriki.join(" / ")
                  : selectbestia.personal.jinchūriki}
              </p>
              <p>
                <strong>Clasificación: </strong>
                {Array.isArray(selectbestia.personal.classification)
                  ? selectbestia.personal.classification.join(" / ")
                  : selectbestia.personal.classification}
              </p>
              <p>
                <strong>Estado: </strong>
                {Array.isArray(selectbestia.personal.status)
                  ? selectbestia.personal.status.join(" / ")
                  : selectbestia.personal.status}
              </p>
            </div>
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded mt-4"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
