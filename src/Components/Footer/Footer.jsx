import React from 'react'
import s from './Footer.module.css';
const Footer = () => {
  return (
<section className={s.footer}>
      <div className={s.logo}>
        {/* <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link> */}
      </div>

      <div className={s.right}>
        Developed by{""}
        <a href="ссылка на гитхаб" target="_blank" rel="norefferer">
          Suhrob
        </a>
      </div>
      
      <div className={s.links}>
        <a
          href="ссылка на фейсбук"
          target="_blank"
          rel="norefferer"
          className="icon"
        >
         ДОСТАВКА
        </a>
        <a
          href="ссылка на инстаграм"
          target="_blank"
          rel="norefferer"
          className="icon"
        >
          ОПЛАТА
        </a>
        <a
          href="ссылка на гитхаб"
          target="_blank"
          rel="norefferer"
          className="icon"
        >
          КОНТАКТЫ
        </a>
        <a
          href="ссылка на гитхаб"
          target="_blank"
          rel="norefferer"
          className="icon"
        >
          ГАРАНТИИ
        </a>
      </div>
      
    </section>  )
}

export default Footer;