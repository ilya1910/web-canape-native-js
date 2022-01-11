import './catalog.scss'
import footer from '../../components/footer/index.js'
import form from '../../components/form/index.js'
import header from '../../components/header/index.js'
import productPage from '../product/index.js'
import mainPage from '../main/index.js'

const catalog = `
  <div class="catalog-container" id="catalog-container">
    <div class="catalog-container__breadcrumbs">
      <div class="catalog-container__breadcrumbs--main">
        Главная <span class="catalog-container__breadcrumbs--arrow">→</span>
      </div>
      <span class="catalog-container__breadcrumbs--catalog">
        Автомобилеразгрузчики
      </span>
    </div>
    <div class="catalog-container__header">Автомобилеразгрузчики</div>
    <div class="catalog-box">
      <div class="catalog-box__item">
        <div class="catalog-box__img">
          <img
            src="../../img/catalog/product-1.jpg"
            alt="Автомобилеразгрузчик механический боковой У10-РМБ"
          />
        </div>
        <div class="catalog-box__content">
          <div class="catalog-box__title">
            Автомобилеразгрузчик механический боковой У10-РМБ
          </div>
          <div class="catalog-box__text">
            Разгрузчик автомобилей механический боковой РМБ, предназначен для
            разгрузки зерновых культур, зернопродуктов и других сыпучих
            материалов через открытый боковой борт автомобилей и автопоездов.
          </div>
          <div class="catalog-box__btn">Подробнее</div>
        </div>
      </div>

      <div class="catalog-box__item">
        <div class="catalog-box__img">
          <img
            src="../../img/catalog/product-2.jpg"
            alt="Автомобилеразгрузчик механический боковой У10-РМБ"
          />
        </div>
        <div id="product">
          <div class="catalog-box__content">
            <div class="catalog-box__title">Автомобилеразгрузчик У15-УРАГ</div>
            <div class="catalog-box__text">
              Разгрузчик автомобилей У15-УРАГ предназначен для разгрузки зерна
              через открытый задний борт из одиночных автомобилей и седельных
              тягачей с полуприцепами и разгрузки через открытый боковой борт
              одиночных автомобилей и прицепов без расцепки прицепов с
              автомобилями.
            </div>
            <div class="catalog-box__btn">Подробнее</div>
          </div>
        </div>
      </div>

      <div class="catalog-box__item">
        <div class="catalog-box__img">
          <img
            src="../../img/catalog/product-3.jpg"
            alt="Автомобилеразгрузчик механический боковой У10-РМБ"
          />
        </div>
        <div class="catalog-box__content">
          <div class="catalog-box__title">
            Автомобилеразгрузчик гидравлический боковой У10-РГБ
          </div>
          <div class="catalog-box__text">
            Разгрузчики автомобилей гидравлический боковой РГБ предназначены для
            разгрузки зерновых культур, зернопродуктов и других сыпучих
            материалов через открытый боковой борт автомобилей и автопоездов.
          </div>
          <div class="catalog-box__btn">Подробнее</div>
        </div>
      </div>
    </div>
  </div>
`

export default function catalogPage() {
  document.body.innerHTML = catalog
  const catalogContainerId = document.querySelector('#catalog-container')
  catalogContainerId.insertAdjacentHTML('beforebegin', header)
  catalogContainerId.insertAdjacentHTML('beforeend', form)
  catalogContainerId.insertAdjacentHTML('afterend', footer)

  document.querySelector('#product').onclick = function () {
    productPage()
  }

  document.querySelector(
    '.catalog-container__breadcrumbs--main',
  ).onclick = function () {
    mainPage()
  }
}
