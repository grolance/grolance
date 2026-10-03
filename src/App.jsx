import { SiteProvider } from "./context/SiteContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <SiteProvider>
      <AppRoutes />
    </SiteProvider>
  );
}

export default App;