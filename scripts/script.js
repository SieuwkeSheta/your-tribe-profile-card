/* Stap 1: Selecteer de knop */
// let expandButton = document.querySelector('.profile-card-example-button')

// /* Stap 2: Wacht tot iemand op die knop klikt */
// expandButton?.addEventListener('click', function() {

//   /* Stap 3: Verander een class zodra iemand op die knop klikt */
//   document.body.classList.toggle('is-expanded')
// })

let werkButton = document.querySelector('#werk')

werkButton.addEventListener('click', function() {
  console.log("werk");
  document.querySelector(".werk1").classList.toggle('is-shown')
  document.querySelector(".werk2").classList.toggle('is-shown')
})

let hobbiesButton = document.querySelector('#hobbies')

hobbiesButton.addEventListener('click', function() {
  console.log("hobbies");
  document.querySelector(".hobbies1").classList.toggle('is-shown')
  document.querySelector(".hobbies2").classList.toggle('is-shown')
  document.querySelector(".hobbies3").classList.toggle('is-shown')
})

let ambitiesButton = document.querySelector('#ambities')

ambitiesButton.addEventListener('click', function() {
  console.log("ambities");
  document.querySelector(".ambities").classList.toggle('is-shown')
})