import React from "react";
import css from "./Card.module.css";
import { cardInfo } from "../../data/data";
import CardChart from "../CardChart/CardChart";

const Card = () => {
  return (
    <div className={css.card}>
      {cardInfo.map((card, id) => {
        return (
          <div className={css.card__container}>
            <CardChart
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              icon={card.icon}
              description={card.description}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Card;
