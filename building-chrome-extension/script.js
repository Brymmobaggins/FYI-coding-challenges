const displayTime = document.getElementById('display-time')
const displayDate = document.getElementById('display-date')

let now = new Date()
displayTime.textContent = String(now.toLocaleTimeString()).slice(0, -3)

// get date
let date = now.getDate()

// Get the year
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let DD = now.getDay()
let dayName = daysInWeek[DD]

// Get the Month
const monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let MM = now.getMonth()
let monthName = monthsInYear[MM]

// get the year
let year = now.getFullYear()

let currentDate = dayName + ", " + monthName + " " + date + ", " + year
displayDate.textContent = currentDate
console.log(currentDate)


