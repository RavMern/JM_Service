import { useState } from "react";
import { motion } from "framer-motion";
import AboutAlbaButton from "../UI/AboutAlbaButton";

const AboutAlba = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const phoneNumber = "5491134705822";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    const whatsappMessage =
      `Hola, soy ${firstName} ${lastName}.\n` +
      `Mi correo es: ${email}\n` +
      `Mensaje: ${message}\n\n` +
      "#web-JM-Service";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="px-6 md:py-16 pt-6 text-n-text">
      <div className="items-center gap-12 grid md:grid-cols-2 mx-auto max-w-6xl">
        {/* Columna izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="font-extrabold text-titles text-4xl">
            Damián - Albañil Profesional
          </h2>
          <h3 className="font-medium text-subTitle text-lg">
            Más de 10 años de experiencia en obras, refacciones y soluciones a
            medida para tu hogar o empresa.
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Soy Damian, albañil especializado en construcción y mantenimiento
            integral, con amplia trayectoria en obras residenciales, comerciales
            e industriales.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Construcción de paredes, techos y ampliaciones. Revoques finos y
            gruesos, terminaciones prolijas. Colocación de cerámicos,
            porcelanatos y pisos. Refacciones y remodelaciones completas de
            interiores y exteriores. Mantenimiento integral y soluciones rápidas
            a problemas estructurales.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Mi compromiso es brindar un servicio responsable, seguro y de máxima
            calidad, respetando los tiempos de obra y asegurando resultados
            duraderos.
          </p>
          {/* Formulario */}
          <div className="bg-white/25 shadow-xl p-6 rounded-2xl">
            <h3 className="mb-4 font-semibold text-titles text-2xl">
              Contactame
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex md:flex-row flex-col gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nombre"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="flex-1 bg-white/80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-800 placeholder-gray-400"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="flex-1 bg-white/80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full text-gray-800 placeholder-gray-400"
                required
              />
              <textarea
                name="message"
                placeholder="Consulta el presupuesto tu servicio sin cargo..."
                value={formData.message}
                onChange={handleChange}
                className="bg-white/80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full h-32 text-gray-800 placeholder-gray-400"
                required
              />
              <AboutAlbaButton text="Enviar" />
            </form>
          </div>
        </motion.div>
        {/* Columna derecha - Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <span className="top-1 md:-top-48 left-50 md:left-76 -z-10 absolute border-9 border-cta w-48 h-[calc(100%-12rem)] -translate-x-10"></span>

          <img
            src="/alba1.webp"
            alt="Albañil"
            className="top-9 md:-top-39 relative shadow-lg rounded-2xl w-72 max-w-xs md:max-w-sm hover:scale-105 transition-transform duration-300 transform"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAlba;
