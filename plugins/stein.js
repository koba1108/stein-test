import SteinStore from 'stein-js-client'

export default ({ app }, inject) => {
  const stein = new SteinStore('https://api.steinhq.com/v1/storages/5e82fe0bb88d3d04ae081657')
  inject('stein', stein)
}
