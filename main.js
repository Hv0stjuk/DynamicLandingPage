const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const nam = document.getElementById('name');
const task = document.getElementById('task');

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  
  time.innerHTML = `<span class="fix">${hour}</span><span>:</span><span class="fix">${addZero(minutes)}</span><span>:</span><span class="fix">${addZero(seconds)}</span>`;
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
  if (localStorage.getItem('task') === null) {
    task.textContent = '[Введите задачу на сегодня]';
  } else {
    task.textContent = localStorage.getItem('task');
  }
};
getFocus();

function setFocus(e) {
  if(e.type === 'keypress') {
    if(e.wich == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      // task.blur();
    }
  } else {
    localStorage.setItem('task', e.target.innerText);
  }
};


nam.addEventListener('focus', () => {
  if (nam.textContent ==='[Введите Ваше имя]') {
    nam.textContent = '';
  }
});

nam.addEventListener('blur', () => {
  if (nam.textContent ==='') {
    nam.textContent = '[Введите Ваше имя]';
  }
});

task.addEventListener('focus', () => {
  if (task.textContent === '[Введите задачу на сегодня]') {
    task.textContent = ''
  }
});

task.addEventListener('blur', () => {
  if (task.textContent === '') {
    task.textContent = '[Введите задачу на сегодня]';
  }
});


nam.addEventListener('keypress', setName);
nam.addEventListener('blur', setName);
task.addEventListener('keypress', setFocus);
task.addEventListener('blur', setFocus);
