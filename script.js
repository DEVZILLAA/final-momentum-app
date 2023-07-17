const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const uName = document.getElementById('name');
const uFocus = document.getElementById('focus');
const deleteFocusBtn = document.getElementById('delete-focus-btn');
const contentElement = document.getElementById('content');
const authorElement = document.getElementById('author');

/* time -------------------------------------------------------------*/
function getTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  let amPm;
  if (hour >= 12) {
    amPm = 'PM';
  } else {
    amPm = 'AM';
  }

  hour = hour % 12 || 12;

  time.innerHTML = hour + ':' + addZero(min) + ':' + addZero(sec) + ' ' + amPm;

  setTimeout(getTime, 1000);
}

function addZero(n) {
  if (n < 10) {
    return '0' + n;
  } else {
    return n;
  }
}

/* greeting ---------------------------------------------------------------*/
function setGreeting() {
  let hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = 'Good morning ';
  } else if (hour < 18) {
    greeting.textContent = 'Good afternoon ';
  } else {
    greeting.textContent = 'Good evening ';
  }
}

/* name -------------------------------------------------------------------*/
uName.addEventListener('keypress', function (Event) {
  if (Event.key === 'Enter') {
    Event.preventDefault();
    uName.blur();
  }
});

uName.addEventListener('blur', function () {
  const typedName = uName.textContent;
  localStorage.setItem('username', typedName);
});

function displayName() {
  const storedName = localStorage.getItem('username');
  if (storedName) {
    uName.textContent = storedName;
  }
}

/* main focus ---------------------------------------------------------------*/
uFocus.addEventListener('keypress', function (Event) {
  if (Event.key === 'Enter') {
    Event.preventDefault();
    uFocus.blur();
  }
});

uFocus.addEventListener('blur', function (Event) {
  const typedTask = uFocus.textContent;
  localStorage.setItem('task', typedTask);
});

function displayTask() {
  const storedTask = localStorage.getItem('task');
  if (storedTask) {
    uFocus.textContent = storedTask;
  }
}

/* Clear Placeholder ---------------------------------------------------------------*/
function clearPlaceholder(element) {
  if (element.textContent === "(type your name)" || element.textContent === "(put task here)") {
    element.textContent = "";
  }
}

/* Delete Main Focus ---------------------------------------------------------------*/
function deleteFocus() {
  uFocus.textContent = "(put task here)";
  localStorage.removeItem('task');
}

/* background --------------------------------------------------------------*/
const backgroundImages = [
  'skyline1.jpg',
  'skyline2.jpg',
  'skyline3.jpg',
  'skyline4.jpg',
  'skyline5.jpg',
];

function setBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const selectedImage = backgroundImages[randomIndex];
  document.body.style.backgroundImage = `url('${selectedImage}')`;
}

setInterval(setBackground, 60000);

/* quotes ----------------------------------------------------------------*/
const quotes = [
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { content: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
];

function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { content, author } = quotes[randomIndex];
  contentElement.textContent = content;
  authorElement.textContent = author;
}

/* store functions here---------------------------------------------------------------*/
getTime();
setGreeting();
displayName();
displayTask();
setBackground();
displayQuote();
