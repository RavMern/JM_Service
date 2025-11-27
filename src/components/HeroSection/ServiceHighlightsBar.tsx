import { FaBolt, FaSnowflake, FaTools } from "react-icons/fa";
import { TbCircuitVoltmeter } from "react-icons/tb";

export default function ServiceHighlightsBar(): React.ReactElement {
  const items = [
    { icon: <FaBolt size={26} />, label: "Electricidad" },
    { icon: <FaSnowflake size={26} />, label: "Aire Acondicionado" },
    { icon: <FaTools size={26} />, label: "Téc. Electromecánico" },
    { icon: <TbCircuitVoltmeter size={26} />, label: "Elevadores de Tensión" },
  ];

  return (
    <div className="-bottom-32 md:-bottom-18 left-1/2 absolute bg-gray-900 shadow-xl backdrop-blur-md px-4 py-6 w-[95%] md:w-full -translate-x-1/2">
      <div className="gap-6 grid grid-cols-2 md:grid-cols-4 text-cta text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 font-semibold"
          >
            {item.icon}
            <span className="text-sm md:text-base">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
