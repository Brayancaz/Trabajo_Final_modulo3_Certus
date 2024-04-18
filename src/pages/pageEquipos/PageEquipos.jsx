import { useEffect, useState } from "react";
import { GetAllEquipos } from "../../actions/equipos.api";

export const PageEquipos = () => {
  const [equipo, setEquipo] = useState([]);
  var [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetAllEquipos().then((res) => {
      if (res.teams) {
        setTimeout(() => {
          setEquipo(res.teams);
          setLoading(false);
        }, 500);
      }
    });
  }, []);

  // console.log("equipo", equipo);

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

  // <h1>Equipos</h1>
  // <div>
  //   {equipo.map((equi) => (
  //     <div key={equi.id}>
  //       {/* <img src={equipos.images} alt="" /> */}
  //       <p>{equi.name}</p>
  //     </div>
  //   ))}
  // </div>
  return (
    <div>
      {/* <div>pageClanes</div> */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-center text-sm font-medium text-gray-900 px-6 py-4 "
                    >
                      Nombre del Equipo
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <table className="min-w-full">
            <tbody>
              {equipo.map((equi) => (
                <tr
                  key={equi.id}
                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {equi.id + 1}
                  </td>
                  <td className="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {equi.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
