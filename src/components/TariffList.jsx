import Tariff from "./Tariff";

const TaiffList = ({ tariffs, selectedId, onTariffClick }) => {
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

export default TaiffList;
