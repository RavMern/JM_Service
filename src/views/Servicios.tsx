import Alineacion from "../components/Servicios/Alineacion";
import Instalacion from "../components/Servicios/Instalacion";

function Servicios() {
  return (
    <div className="space-y-10 px-4 md:px-8">
      <h1 className="-top-6 relative font-bold text-white text-3xl">
        Servicios
      </h1>
      <section>
        <Instalacion />
      </section>
      <section>
        <Alineacion />
      </section>
      {/* <section>Servicios albañileria</section> */}
      {/* <section>Que ofrecemos?</section> */}
    </div>
  );
}

export default Servicios;
