import React from "react";
import styles from './Header.module.css';
import logo from './../../img/LOGO.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo} >
        
         <img src={logo} alt="logo"  />
      </div>

      <div className={styles.info}>
        <ul>
          <li> МЕБЕЛЬ</li>
          <li>ОСВЕЩЕНИЕ</li>
          <li>СТУЛЬЯ</li>
        </ul>
      </div>

      <form className={styles.form}>
        <div className={styles.icon}>иконка поиск</div>
        <div className={styles.input}>
          <input
            type="search"
            name="search"
            placeholder="Search for anyting..."
            autoComplete="off"
            onChange={'handleSearch'}
            value=''
          />
        </div>

      </form>

     
    </div>
  );
};

export default Header;
