import { useState } from "react";
import "./App.css";
import Tariff from "./components/Tariff";
import arrayOfTariffs from "./data/data";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const onTariffClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="App">
      {arrayOfTariffs.map((tariff) => (
        <Tariff
          key={tariff.id}
          info={tariff}
          selectedId={selectedId}
          onClick={onTariffClick}
        />
      ))}
    </div>
  );
}

export default App;
