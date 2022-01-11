import './product.scss'
import footer from '../../components/footer/index.js'
import form from '../../components/form/index.js'
import header from '../../components/header/index.js'
import 'bootstrap'
import catalogPage from '../catalog'
import mainPage from '../main'

const lorem = ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Placeat vel sapiente, officia sit, praesentium molestiae
				quaerat deserunt porro ullam aut natus explicabo totam
				voluptate consequuntur, commodi eaque obcaecati. Hic
				quibusdam numquam expedita harum omnis, minus molestiae
				placeat alias repellendus nesciunt amet consequatur
				pariatur officia doloremque animi illum delectus
				eligendi velit mollitia nihil commodi fugit unde ut
				saepe! Quo debitis voluptates soluta atque, sit
				provident tempora ab molestias vitae architecto dolore
				numquam. Ex commodi odio doloremque cumque distinctio
				doloribus totam voluptatem nemo praesentium pariatur,
				omnis id quaerat saepe, voluptates, alias unde ad velit
				dicta! Corrupti ea accusantium, numquam dolor eius in.`

const productContainer = `
  <div id="product-container" class="product-container">
  <div class="product-container__breadcrumbs">
      <div class="product-container__breadcrumbs--main">
        Главная <span class="product-container__breadcrumbs--arrow">→</span>
      </div>
      <span class="product-container__breadcrumbs--catalog">
        Автомобилеразгрузчики <span class="product-container__breadcrumbs--arrow">→</span>
      </span>
      <span class="product-container__breadcrumbs--product">
        Автомобилеразгрузчик У15-УРАГ
      </span>
    </div>
    <div class="product-container__header">Автомобилеразгрузчик У15-УРАГ</div>
    <div class="product-container__item">
      <div class="product-container__photo-container">
        <div class="slider slider-for">
          <img src='../../img/catalog/product-1.jpg' alt="" />
          <img src='../../img/catalog/product-2.jpg' alt="" />
          <img src='../../img/catalog/product-3.jpg' alt="" />
        </div>

        <div class="slider-nav">
          <img src='../../img/catalog/product-1.jpg' alt="" />
          <img src='../../img/catalog/product-2.jpg' alt="" />
          <img src='../../img/catalog/product-3.jpg' alt="" />
        </div>
      </div>

      <div class="product-container__content">
        <div class="product-container__text">
          <p>
            Разгрузчик автомобилей У15-УРАГ предназначен для разгрузки зерна
            через открытый задний борт из одиночных автомобилей и седельных
            тягачей с полуприцепами и разгрузки через открытый боковой борт
            одиночных автомобилей и прицепов без расцепки прицепов с
            автомобилями.
          </p>
          <p>Разгрузчик применяется на предприятиях России и СНГ.</p>
          <p>
            Разгрузчик автомобилей изготовлен в климатическом исполнении "У"
            категории 1 по ГОСТ 15150 - для работы на открытом воздухе в
            умеренном климате.
          </p>
        </div>
        <div class="product-container__price">
          Цена от <span>580 000</span> руб.
        </div>
        <div class="product-container__btn">Заказать</div>
        <div class="product-container__btn product-container__btn--download">
          Скачать наш каталог
        </div>
      </div>
    </div>

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="specifications-tab"
          data-bs-toggle="tab"
          data-bs-target="#specifications"
          type="button"
          role="tab"
          aria-controls="specifications"
          aria-selected="false"
        >
          Технические характеристики
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="operating-principle-tab"
          data-bs-toggle="tab"
          data-bs-target="#operating-principle"
          type="button"
          role="tab"
          aria-controls="operating-principle"
          aria-selected="false"
        >
          Принцип действия
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="advantages-tab"
          data-bs-toggle="tab"
          data-bs-target="#advantages"
          type="button"
          role="tab"
          aria-controls="advantages"
          aria-selected="false"
        >
          Преимущества
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="certificates-tab"
          data-bs-toggle="tab"
          data-bs-target="#certificates"
          type="button"
          role="tab"
          aria-controls="certificates"
          aria-selected="false"
        >
          Сертификаты
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="video-tab"
          data-bs-toggle="tab"
          data-bs-target="#video"
          type="button"
          role="tab"
          aria-controls="video"
          aria-selected="false"
        >
          Видео
        </button>
      </li>
    </ul>
    <div class="tab-content tab-content--table" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="specifications"
        role="tabpanel"
        aria-labelledby="specifications-tab"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Наименование технической характеристики</th>
              <th scope="col">Ед.изм</th>
              <th scope="col">У15-УРАГ</th>
              <th scope="col">У15-УРАГ-У</th>
              <th scope="col">У15-УРАГ-У-17,3/6,4</th>
              <th scope="col">У15-УРАГ-У/9</th>
              <th scope="col">У15-УРАГ-У-17,3/9</th>
              <th scope="col">У15-УРАГ без бок.</th>
              <th scope="col">У15-УРАГ-У без бок.</th>
              <th scope="col">У15-УРАГ-У-17,3 без бок.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Производительность техническая max.</td>
              <td>т/ч</td>
              <td>256</td>
              <td>330</td>
              <td>330</td>
              <td>330</td>
              <td>350</td>
              <td>250</td>
              <td>300</td>
              <td>300</td>
            </tr>
            <tr>
              <th rowSpan="3" scope="row">
                2
              </th>
              <td>Грузоподъемность, не более (в том числе):</td>
              <td rowSpan="3">т</td>
              <td>55</td>
              <td>70</td>
              <td>76</td>
              <td>82</td>
              <td>86</td>
              <td>35</td>
              <td>50</td>
              <td>56</td>
            </tr>
            <tr>
              <td>большой платформы</td>
              <td>35</td>
              <td>50</td>
              <td>56</td>
              <td>50</td>
              <td>56</td>
              <td>35</td>
              <td>50</td>
              <td>56</td>
            </tr>
            <tr>
              <td>боковой платформы</td>
              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>32</td>
              <td>30</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <th rowSpan="3" scope="row">
                3
              </th>
              <td>Длина платформ установочная</td>
              <td rowSpan="3">мм</td>
              <td class="no-border-right" colRow="8"></td>
              <td class="no-border-right"></td>
              <td class="no-border-right"></td>
              <td class="no-border-right"></td>
              <td class="no-border-right"></td>
              <td class="no-border-right"></td>
              <td class="no-border-right"></td>
              <td class="no-border-right"></td>
            </tr>
            <tr>
              <td>платформы большой</td>
              <td>55</td>
              <td>70</td>
              <td>76</td>
              <td>82</td>
              <td>86</td>
              <td>35</td>
              <td>50</td>
              <td>56</td>
            </tr>
            <tr>
              <td>платформы большой</td>
              <td>55</td>
              <td>70</td>
              <td>76</td>
              <td>82</td>
              <td>86</td>
              <td>35</td>
              <td>50</td>
              <td>56</td>
            </tr>
          </tbody>
        </table>

        <div class="info-container">
          <div class="info-container__title">
            Состав изделия и комплект поставки
          </div>
          <div class="info-container__specifications">
            <div>платформа большая - 1 шт,</div>
            <div>платформа боковая - 1 шт,</div>
            <div>гидросистема - 1 шт,</div>
            <div>решетка левая - 1 шт,</div>
            <div>решетка правая - 1 шт,</div>
            <div>стойка - 2 шт,</div>
            <div>система управления -1 шт.</div>
          </div>
          <div class="info-container__text">
            Разгрузчик поставляется заказчику комплектно, разобранным на
            составные части. Отдельно комплектующие изделия, сборочные единицы и
            детали упаковываются в дощатые ящики. Металлоконструкции
            поставляются без упаковки.
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="operating-principle"
        role="tabpanel"
        aria-labelledby="operating-principle-tab"
      >
        ${lorem}
      </div>
      <div
        class="tab-pane fade"
        id="advantages"
        role="tabpanel"
        aria-labelledby="advantages-tab"
      >
        ${lorem}
      </div>
      <div
        class="tab-pane fade"
        id="certificates"
        role="tabpanel"
        aria-labelledby="certificates-tab"
      >
        ${lorem}
      </div>
      <div
        class="tab-pane fade"
        id="video"
        role="tabpanel"
        aria-labelledby="video-tab"
      >
        ${lorem}
      </div>
    </div>
  </div>
`

export default function productPage() {
  document.body.innerHTML = productContainer
  const productContainerId = document.querySelector('#product-container')
  productContainerId.insertAdjacentHTML('beforebegin', header)
  productContainerId.insertAdjacentHTML('beforeend', form)
  productContainerId.insertAdjacentHTML('afterend', footer)

  document.querySelector(
    '.product-container__breadcrumbs--main',
  ).onclick = function () {
    mainPage()
  }

  document.querySelector(
    '.product-container__breadcrumbs--catalog',
  ).onclick = function () {
    catalogPage()
  }

  $(document).ready(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav',
      centerMode: true,
    })

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      centerMode: true,
      focusOnSelect: true,
    })
  })
}
