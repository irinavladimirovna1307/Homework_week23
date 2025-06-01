import styles from "./Tariff.module.scss";

const Tariff = (props) => {
  const { id, name, price, speed, info: infoText, color } = props.info;

  const cardClasses = [
    styles.card,
    styles[`card--${color}`],
    props.selectedId === id ? styles["card--selected"] : "",
    Number(price) === 550 ? styles["card--highlight"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.cardWrapper}>
      <div className={cardClasses} onClick={() => props.onClick(id)}>
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
