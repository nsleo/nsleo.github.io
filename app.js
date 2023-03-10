// text reveal

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))


// link selected




// scrollspy


let sections = document.querySelectorAll(".hidden")
let navigation = document.querySelector(".menu-links")

let observerA = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const { id } = entry.target //
    const activedLink = navigation.querySelector(`[href="#${id}"]`)
    const activedIcon = document.querySelector("i.fa-house")

    activedLink.classList.remove("active")
    if (!entry.isIntersecting) {
      return
    } else {
    activedLink.classList.add("active") 
    // activedIcon.classList.add("active")

    if (entry.target == document.querySelector("#home") && entry.isIntersecting) {
      activedIcon.classList.add("active")
      console.log(entry)
    } else {
      activedIcon.classList.remove("active")
    }}
  })}, {
  rootMargin:"-5% 0% -95% 0%",
})

sections.forEach((el) => observerA.observe(el))

// let observerA = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     let { id } = entry.target
//     let spy = sectionLink.querySelector(`[href="#${id}"]`)
//     spy.classList.remove("active")
//     if (entry.isIntersecting) {
//       // console.log(entry)
//       entry.target.classList.add('active')
//     } else {
//       entry.target.classList.remove('active')
//     }
//   })
// })


// THEME FUNCTIONALITY

// get theme button
const themeSwitch = document.querySelector("input#toggle-theme")
// get label area
const themeBut = document.querySelector("div.theme-button label")

// get localstorage info
if (localStorage.getItem("data-theme") == "dark") {
  themeSwitch.checked = true
}

// change to light
function toLight() {
  document.documentElement.setAttribute("data-theme", "light")
  //save on local storage
  localStorage.setItem("data-theme", "light")
}

// change to dark
function toDark() {
  document.documentElement.setAttribute("data-theme", "dark")
  //save on local storage
  localStorage.setItem("data-theme", "dark")
}

// on change to change
themeSwitch.addEventListener("change", () => {
  // console.log("listening")
  if (themeSwitch.checked) {
    toDark()
    
    // const moon = document.querySelector("i.fas fa-moon")
    // moon.style.display = "none"

  } else {
    toLight()
  }
  console.log(localStorage.getItem('data-theme'))
})

// get final info and apply
let theme = localStorage.getItem('data-theme')
if (theme == 'dark') toDark()