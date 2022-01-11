import './form.scss'

const form = `
    <div class="container-fluid">
      <div class="col-xs-12">
        <div class="form-container">
          <div class="form-container__title">Свяжитесь с нами</div>
          <div class="form-input-container">
            <input name="fio" value="" type="text" placeholder="ФИО"></input>
            <input
              name="telefon"
              value=""
              type="tel"
              placeholder="Телефон*"
              data-mask="phone"
            ></input>
            <input
              name="e-mail"
              value=""
              type="email"
              placeholder="E-mail*"
            ></input>
          </div>

          <textarea name="vash-zapros" placeholder="Ваш запрос"></textarea>

          <span class="form-container__text">
            Нажимая на кнопку вы даете согласие на обработку персональных данных
          </span>
          <button type="submit" class="form-container__button">
            Отправить
          </button>
        </div>
      </div>
    </div>
  `

export default form
