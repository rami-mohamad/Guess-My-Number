'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;

let check = document.querySelector('.check').addEventListener('click', () => {
  let data = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!data || data < 1 || data > 20) {
      message.textContent = 'its not between 1 and 20';
    } else if (data > secretNumber) {
      message.textContent = 'its too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (data < secretNumber) {
      message.textContent = 'its too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      message.textContent = 'congragulation !!!!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = 'graddeen';
      message.style.color = 'yellow';
      score--;
    }
  } else {
    message.textContent = 'game over';
    message.style.color = 'red';
  }
});
// to reset every thing without highscore
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  message.style.color = 'white';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'black';
});
