const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const nam = document.getElementById('name');
const focus = document.getElementById('focus');

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  
  time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;
  setTimeout(showTime, 1000);

  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  };


  function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();

    if (hour > 18 || hour < 6) {
      document.body.style.backgroundImage = "url('assets/img/night.jpg')";
      greeting.textContent = 'Доброй ночи,';
      document.body.style.color = "white";
    } else if ( hour > 6) {
      document.body.style.backgroundImage = "url('assets/img/day.jpg')";
      greeting.textContent = 'Добрый день,';
    }
  };
  setBgGreet();
};
showTime();

function getName() {
  if (localStorage.getItem('name') === null) {
    nam.textContent = '[Введите Ваше имя]';
  } else {
      nam.textContent = localStorage.getItem('name');
  }
};
getName();

function setName(e) {
  if(e.type === 'keypress') {
    if(e.wich == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      nam.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
};

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Введите задачу на сегодня]';
  } else {
      focus.textContent = localStorage.getItem('focus');
  }
};
getFocus();

function setFocus(e) {
  if(e.type === 'keypress') {
    if(e.wich == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      nam.blur();
    }
  } else {
    localStorage.setItem(focus, e.target.innerText);
  }
};

nam.addEventListener('keypress', setName);
nam.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);