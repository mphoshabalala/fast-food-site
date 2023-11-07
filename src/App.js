import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { KotasProvider } from "./contexts/ItemsContext";
import { FAQsProvider } from "./contexts/FAQsContext";

function App() {
  return (
    <KotasProvider>
      <FAQsProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </FAQsProvider>
    </KotasProvider>
  );
}

export default App;
