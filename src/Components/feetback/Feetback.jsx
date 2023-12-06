import React from "react";
import s from './feedback.module.css';
import feetback from "./../../img/user-feadback.png";
const Feetback = () => {
  return (
    <section className={s.feetback_carusel}>
      <div className={s.feetback_card}>
        <img src={feetback} alt="feetback" />
        <h4>Елена Новикова</h4>
        <span>Студентка</span>
        <p>
          «Хочу поделиться своими впечатлениями по использованию дивана
          «Бродвей», заказывала в конце 2016 года. Держится великолепно.
          Спасибо, большое сотрудникам этого чудесного магазина.»
        </p>
      </div>
    </section>
  );
};

export default Feetback;
