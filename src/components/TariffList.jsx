import Tariff from "./Tariff";

const TariffList = ({ tariffs, selectedId, onTariffClick }) => {
  return (
    <>
      {tariffs.map((tariff) => (
        <Tariff
          key={tariff.id}
          info={tariff}
          selectedId={selectedId}
          onClick={onTariffClick}
        />
      ))}
    </>
  );
};

export default TariffList;
