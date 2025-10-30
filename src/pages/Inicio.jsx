import About from "../components/sections/About";
import Contacto from "../components/sections/Contacto";
import Hero from "../components/sections/Hero";
import Publicaciones from "../components/sections/Publicaciones";
import Team from "../components/sections/Team";

function Inicio() {
  return (
    <div>
      <Hero />
      <About />
      <Publicaciones />
      <Team />
      <Contacto />
    </div>
  );
}

export default Inicio;  