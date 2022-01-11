import './main.scss'
import footer from '../../components/footer/index.js'
import form from '../../components/form/index.js'
import header from '../../components/header/index.js'
import mainContainer from './mainContainer.js'
import catalogPage from '../catalog'

export default function mainPage() {
  document.body.innerHTML = mainContainer

  const mainContainerId = document.querySelector('#main-container')
  mainContainerId.insertAdjacentHTML('beforebegin', header)
  mainContainerId.insertAdjacentHTML('beforeend', form)
  mainContainerId.insertAdjacentHTML('beforeend', footer)

  document.querySelector('#catalog').onclick = function () {
    catalogPage()
  }
}
