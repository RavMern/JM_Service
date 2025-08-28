import WhatsAppButton from "./components/Globo/WhatsAppButton";
import RoutesProvider from "./RoutesProvider";

function App() {
  return (
    <div className="bg-background">
      <RoutesProvider />
      <WhatsAppButton
        whatsappNumber="+541154781055"
        message="Hola, quiero información"
      />
    </div>
  );
}

export default App;
