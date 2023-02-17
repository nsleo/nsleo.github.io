function realTime() {
  var refresh=1000; //recarregar em milisegundos
  setTimeout('mostrarHora()',refresh) //mytime=
}

function formatar() {
  return userName[0].toUpperCase() + userName.slice(1)
}

function mostrarHora() {
  var data = new Date()     //armazenar os dados Date()

  var dia = data.getDay()   //armazenar os dados do Dia

  var diaSem = ""           //vai armazenar o dia da semana
  switch (dia) {
    case 0:
        var diaSem = "Sunday"
        break
      case 1:
        var diaSem = "Monday"
        break
      case 2:
        var diaSem = "Tuesday"
        break
      case 3:
        var diaSem = "Wednesday"
        break
      case 4:
        var diaSem = "Thursday"
        break
      case 5:
        var diaSem = "Friday"
        break
      case 6:
        var diaSem = "Saturday"
        break
      default:
        var diaSem = "nonexistent day :("
  }
  var DiaSemana = diaSem   //dia da semana

  var minutos = ""         //formatar os minutos
  if (data.getMinutes() < 10) {
    minutos = "0" + data.getMinutes()
  } else {
    minutos = data.getMinutes()
  }

  var hora = data.getHours() + ":" + minutos
  document.getElementById('clock').innerHTML = "It's " + DiaSemana + ", " + hora + "."
  realTime()
}

var nameInfo = ''

function helloUser() {
  userName = document.getElementById('username').value

  if (document.getElementById('username').value.length > 15) {
      document.getElementById('hello').innerText = "your name is too big..."
      // document.getElementById('username').placeholder = ":("
      nameInfo = false
  } else if (document.getElementById('username').value.length == 0) {
      document.getElementById('hello').innerText = "type your name!"
      // document.getElementById('username').placeholder = "'-'"
      nameInfo = false
  } else {
      userName = document.getElementById('username').value
      document.getElementById('hello').innerText = "Hello, " + formatar() + "! :)"
      document.getElementById('hello').className = "capitalize"
      // document.getElementById('username').placeholder = ":)"
      document.getElementById('username').disabled = "disabled"
      // document.getElementById('username').readOnly = "readOnly"
      nameInfo = true
  }
  // document.getElementById('hello').innerText = "Have a great day."
  document.getElementById('username').value = ""
  // document.getElementById('userGreet').innerHTML = "Hello, " + userName
}

function hideButton() {
  var botao = document.getElementById('welcome')
  var botao2 = document.getElementById('contin')
  if (nameInfo === true) {
    botao.style.display = "none"
    botao2.style.display = "flex"
  } else {
    botao.style.display = "flex"
    botao2.style.display = "none"
  }
}






//theme functionality



//armazena o botao
const themeButton = document.getElementById('toggle-theme')


//verifica se existe a seleção de theme no localstorage
if (localStorage.getItem("data-theme") == "light") {
    themeButton.checked = true
}


//muda o valor do data-theme para dark e guarda no localstorage
function darkTheme() {
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
}

//muda o valor do data-theme para light e guarda no localstorage
function lightTheme() {
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", "light")
}


//onchange para aplicar a mudança de theme
themeButton.addEventListener("change",
    function themeUpdate() {
        const theme = localStorage.getItem('data-theme')
        if (themeButton.checked) {
            lightTheme()
        } else if (!themeButton.checked) {
            darkTheme()  
        }
    }
)

//final da lógica
let theme = localStorage.getItem('data-theme')
if (theme == 'light') lightTheme()