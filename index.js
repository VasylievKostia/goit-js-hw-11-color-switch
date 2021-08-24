const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector("[data-action='start']"),
  stopBtn: document.querySelector("[data-action='stop']"),
  body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let timerId = null;
function randomBgColor() {
  return colors[randomIntegerFromInterval(0, colors.length)];
}

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = randomBgColor()
  },1000)
}
)


refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.disabled = false
  timerId = clearInterval(timerId)
}
)