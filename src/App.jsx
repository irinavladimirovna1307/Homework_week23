import { useState } from "react";
import "./App.css";
import Tariff from "./components/Tariff";
import arrayOfTariffs from "./data/data";
import TaiffList from "./components/TariffList";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const onTariffClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="App">
      <TaiffList
        tariffs={arrayOfTariffs}
        selectedId={selectedId}
        onTariffClick={onTariffClick}
      />
    </div>
  );
}

export default App;
