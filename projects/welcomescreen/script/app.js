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