let passwordLength = 16
const inputEl = document.querySelector("input#password")

const rangeEl = document.querySelector("input#password-length")

const regenButton = document.querySelector("button#regen")
const copyButton = document.querySelector("button#copy2")
const copyPass = document.querySelector("button#copy")
const alertMsg = document.querySelector("span.alert")

const safeIndic = document.querySelector("div.bar")
var safeLvl = 50
const sizeSpan = document.querySelector("span#customSize")

const uppChars = document.querySelector("input.upp")
const numChars = document.querySelector("input.num")
const symChars = document.querySelector("input.sym")

function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyz" 
  const uppCharsKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numCharsKeys = "1234567890"
  const symCharsKeys = "?!@&*()[]"
  var chars2 = chars
  
  if (uppChars.checked) {
    chars2 += uppCharsKeys
  }
  if (numChars.checked) {
    chars2 += numCharsKeys
  }
  if (symChars.checked) {
    chars2 += symCharsKeys
  }

  let password = ""

  for (let i=0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars2.length)
    password += chars2.substring(randomNumber, randomNumber + 1)
  }


  inputEl.value = password
  safetyIndicator()
  sizeSpan.innerHTML = inputEl.value.length

  alertMsg.classList.remove("show")
  calcFontSize()
}


rangeEl.addEventListener("input", () => {
  passwordLength = rangeEl.value
  generatePassword()
})



function copy() {
  navigator.clipboard.writeText(inputEl.value)
  alertMsg.classList.add("show")
}

function calcFontSize() {
  if (passwordLength > 50) {
    inputEl.classList.add("fontSS")
    inputEl.classList.remove("fontS")
    inputEl.classList.remove("fontX")
    inputEl.classList.remove("fontXX")
  } else if (passwordLength > 40) {
    inputEl.classList.add("fontS")
    inputEl.classList.remove("fontSS")
    inputEl.classList.remove("fontX")
    inputEl.classList.remove("fontXX")
  } else if (passwordLength > 30) {
    inputEl.classList.add("fontX")
    inputEl.classList.remove("fontSS")
    inputEl.classList.remove("fontS")
    inputEl.classList.remove("fontXX")
  } else {
    inputEl.classList.add("fontXX")
    inputEl.classList.remove("fontX")
    inputEl.classList.remove("fontSS")
    inputEl.classList.remove("fontS")
  }
}

function safetyVerify() {
  var lengthSafeLvl = ''

  if (passwordLength >= 60) {
    lengthSafeLvl = 90
  } else if (passwordLength >= 50) {
    lengthSafeLvl = 75
  } else if (passwordLength >= 40) {
    lengthSafeLvl = 60
  } else if (passwordLength >= 25) {
    lengthSafeLvl = 45
  } else if (passwordLength >= 16) {
    lengthSafeLvl = 35
  } else if (passwordLength > 10) {
    lengthSafeLvl = 20
  } else if (passwordLength > 8) {
    lengthSafeLvl = 10
  } else {
    lengthSafeLvl = 0
  }

  safeLvl = Math.round((uppChars.checked ? 15 : 0) + (numChars.checked ? 20 : 0) + (symChars.checked ? 30 : 0) + lengthSafeLvl)
}

function safetyIndicator() {
  safetyVerify()

  if (safeLvl > 100) {
    safeIndic.classList.remove("safe")
    safeIndic.classList.add("golden")
  } else if (safeLvl >= 87) {
    safeIndic.classList.remove("golden")
    safeIndic.classList.remove("warning")
    safeIndic.classList.remove("critical")
    safeIndic.classList.add("safe")
    safeIndic.style.width = "100%"
    console.log(safeLvl)
  } else if (safeLvl >= 70) {
    safeIndic.classList.remove("golden")
    safeIndic.classList.remove("warning")
    safeIndic.classList.remove("critical")
    safeIndic.classList.add("safe")
    safeIndic.style.width = `${safeLvl}%`
    console.log(safeLvl)
  } else if (safeLvl >= 40) {
    safeIndic.classList.remove("golden")
    safeIndic.classList.remove("safe")
    safeIndic.classList.remove("critical")
    safeIndic.classList.add("warning")
    safeIndic.style.width = `${safeLvl}%`
    console.log(safeLvl)
  } else {
    safeIndic.classList.remove("golden")
    safeIndic.classList.remove("safe")
    safeIndic.classList.remove("warning")
    safeIndic.classList.add("critical")
    safeIndic.style.width = `${safeLvl}%`
    console.log(safeLvl)
  }
}




generatePassword()
// inputEl.addEventListener("change", safetyIndicator)
regenButton.addEventListener("click", generatePassword)
copyButton.addEventListener("click", copy)
copyPass.addEventListener("click", copy)
uppChars.addEventListener("click", () => {
  generatePassword()
})
numChars.addEventListener("click", () => {
  generatePassword()
})
symChars.addEventListener("click", () => {
  generatePassword()
})