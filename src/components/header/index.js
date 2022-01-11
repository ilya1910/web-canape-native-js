import './header.scss'

const header = `
  <div class="header-container">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <div id="menu">
        <ul class="menu menu--modal">
          <li class="menu__item menu__item--modal">О компании</li>
          <li class="menu__item menu__item--modal">Вакансии</li>
          <li class="menu__item menu__item--modal">Новости</li>
          <li class="menu__item menu__item--modal">Контакты</li>
        </ul>

        <div class="header-container__phone header-container__phone--modal">
          8 (86138) 6-34-03, 6-34-06
        </div>

        <div class="header-container__email header-container__email--modal">
          sale@semm.ru
        </div>

        <div class="header-container__work-time header-container__work-time--modal">
          пн-пт 8:00-17:00, перерыв 12:00-13:00, сб-вс: выходной
        </div>
      </div>
    </div>
    <div class="header-container__logo">
      <a href="/">
        <img src="../../../img/main/logo.png" alt="logo" />
      </a>
    </div>
    <div class="header-container__menu">
      <ul class="menu">
        <li class="menu__item">О компании</li>
        <li class="menu__item">Вакансии</li>
        <li class="menu__item">Новости</li>
        <li class="menu__item">Контакты</li>
      </ul>
    </div>
    <div class="header-container__work-time">
      пн-пт 8:00-17:00, перерыв 12:00-13:00, сб-вс: выходной
    </div>
    <div class="header-container__email">sale@semm.ru</div>
    <div class="header-container__language-select">
      <span class="lang lang--ru">Ru</span>
      <span class="lang lang--en">En</span>

      <select class="lang-select">
        <option value="">Выбрать язык</option>
        <option value="ru">русский</option>
        <option value="en">английский</option>
      </select>
    </div>
    <div class="header-container__phone">8 (86138) 6-34-03, 6-34-06</div>
  </div>
`

export default header
