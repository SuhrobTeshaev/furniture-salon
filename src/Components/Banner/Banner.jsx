import React from 'react'
import s from './Banner.module.css';
import bannerImg from './../../img/banner.png';
const Banner = () => {
  return (
    <section className={s.banner}>
    <div className={s.left}>
      <p className={s.content}>
       <span className={s.design}>ДИЗАЙНЕРСКАЯ МЕБЕЛЬ</span> 
        <span className={s.antikva}>Кресло 'Антиква'</span>
        <span>380$</span>
        <span>240$</span>
      </p>
      <button className={s.more}>КУПИТЬ</button>
    </div>
    <div className={s.middle}>
        <img src={bannerImg} alt="Banner-image" />
    </div>
    <div
      className={s.right}
    //   style={{ backgroundImage: `url(${bannerImg})` }}
    >
      
    </div>
  </section>
  )
}

export default Banner