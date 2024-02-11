
const time = document.getElementById('time')

// function TimeAndDate() {
//     const currentTime = new Date()
//     currentTime.innertext = time

//     const currentDate = 

    

// }

let today = new Date()

const todayTime = today.toLocaleTimeString()
const dd = today.getDay()
const month = today.getMonth()
const year = today.getFullYear()
// console.log(dd)
today = dd + month + year
console.log(today)