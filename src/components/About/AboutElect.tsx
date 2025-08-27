import { useState } from "react";
import {motion} from 'framer-motion';
import AboutElectButton from "../UI/AboutElectButton";

const AboutElect = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // el número de WhatsApp del electricista en formato internacional (ej: Argentina +54)
  const phoneNumber = "5491154781055";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    const whatsappMessage = `Hola, soy ${firstName} ${lastName}.\n` +
  `Mi correo es: ${email}\n` +
  `Mensaje: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-background text-n-text py-16 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      {/* Columna izquierda */}
      <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >

        <h2 className="text-4xl font-extrabold text-titles">Juan Manuel - Electricista Matriculado</h2>
        <h3 className="text-lg text-subTitle font-medium">
          Más de 30 años de experiencia brindando soluciones eléctricas rápidas, eficientes y con garantía profesional.
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Soy Juan Manuel, Electricista Matriculado, especializado en instalaciones y mantenimiento eléctrico residencial, comercial e industrial.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Instalaciones nuevas y adecuación a normativas vigentes.
          Reparación de fallas eléctricas, tableros, disyuntores y térmicas.
          Colocación de luminarias LED, sensores de movimiento y sistemas de ahorro energético.
          Cableado estructurado y mantenimiento preventivo integral.
          Asesoramiento técnico personalizado y garantía de seguridad en cada trabajo.
          </p>
          <p className="text-gray-500 leading-relaxed">Mi compromiso es ofrecer soluciones profesionales, confiables y seguras, cuidando cada detalle con responsabilidad y eficiencia.
        </p>
        {/* Formulario */}
        <div className="bg-white/25 shadow-xl rounded-2xl p-6">
        <h3 className="text-2xl font-semibold mb-4 text-titles">Contactame</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-3 rounded-lg border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 p-3 rounded-lg border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            name="message"
            placeholder="Consulta sobre tu servicio eléctrico..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg  h-32 border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <AboutElectButton text="Enviar" />
        </form>
        </div>
        </motion.div>
      {/* Columna derecha - Imagen */}
      <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
        <img
          src="/electricista.png"
          alt="Electricista"
          className="rounded-2xl shadow-lg max-w-xs md:max-w-sm transform transition-transform duration-300 hover:scale-105"
        />
        </motion.div>
      </div>
    </section>      
  );
};

export default AboutElect;
