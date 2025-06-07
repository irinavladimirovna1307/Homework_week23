import { useState } from "react";
import "./App.css";
import arrayOfTariffs from "./data/data";
import TariffList from "./components/TariffList";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const onTariffClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="App">
      <TariffList
        tariffs={arrayOfTariffs}
        selectedId={selectedId}
        onTariffClick={onTariffClick}
      />
    </div>
  );
}

export default App;
