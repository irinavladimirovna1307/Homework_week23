import styles from "./Tariff.module.scss";

const Tariff = (props) => {
  const { id, name, price, speed, info: infoText, color } = props.info;

  const isSelectedCard = props.selectedId === id;
  const isHighlightedCard = Number(price) === 550;

  const cardClasses = [
    styles.card,
    styles[`card--${color}`],
    isSelectedCard ? styles["card--selected"] : "",
    isHighlightedCard ? styles["card--highlight"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.cardWrapper}>
      <div className={cardClasses} onClick={() => props.onClick(id)}>
        {isSelectedCard && <div className={styles.selectedIndicator}>✓</div>}
        <div className={styles.card__header}>{name}</div>
        <div className={styles.card__price}>
          <p>руб</p>
          <p>
            <span>{price}</span> /мес
          </p>
        </div>
        <div className={styles.card__speed}>{speed}</div>
        <div className={styles.card__info}>{infoText}</div>
      </div>
    </div>
  );
};

export default Tariff;
