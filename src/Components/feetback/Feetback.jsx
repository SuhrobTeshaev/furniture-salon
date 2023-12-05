import React from "react";
import feetback from "./../../img/user-feadback.png";
const Feetback = () => {
  return (
    <section className="feetbacks-carusel">
      <div className="feetback-card">
        <img src={feetback} alt="feetback" />
        <h4>Елена Новикова</h4>
        <span>Студентка</span>
        <p>
          «Хочу поделиться своими впечатлениями по использованию дивана
          «Бродвей», заказывала в конце 2016 года. Держится великолепно.
          Спасибо, большое сотрудникам этого чудесного магазина.»
        </p>
      </div>
      <span>тут будет карусел из точек</span>
    </section>
  );
};

export default Feetback;
