import WhatsAppButton from "./components/Globo/WhatsAppButton";
import RoutesProvider from "./RoutesProvider";

function App() {
  return (
    <div>
      <RoutesProvider />
      <WhatsAppButton whatsappNumber="+541154781055" />
    </div>
  );
}

export default App;
