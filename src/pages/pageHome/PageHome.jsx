export const PageHome = () => {
  return (
    <div>
      <section className="">
        <div className="bg-[url('https://fondosmil.co/fondo/74523.jpg')] h-screen bg-cover bg-center flex justify-items-center items-center">
          <div className="px-10 lg:px-32 xl:px-40">
            <h1 className="text-6xl font-semibold font-serif mb-6">
              <spian className="text-red-500">Mundo Naruto</spian> <br />
              <span>
                ¡Mi sueño es convertirme <p></p>en el mejor Hokage!
              </span>
            </h1>
            <p className="text-lg max-w-md">
              Bienvenidos al mundo de Naruto, en esta página podrás adentrarte
              en cada uno de los personajes, conocerlos y descubrir sus
              habilidades, conocer más sobre los clanes y demás.
            </p>
            <br />
            <p className="text-lg max-w-md">
              Collecciona tus personajes favoritos, desde la pestaña PERSONAJES
            </p>
            <button
              onClick={() =>
                alert("Proximamente... por ahora disfruta de toda la pagina")
              }
              className="inline-block mt-10 px-10 py-3 bg-red-500 text-lg text-white font-semibold"
            >
              Ingresar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
