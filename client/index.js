const styles = require('./style.css')

function ready () {
  let $app = document.querySelector('#app')

  $app.innerHTML = `<div class='${styles.circle}'>Hola</div>`
}

document.addEventListener('DOMContentLoaded', ready)
