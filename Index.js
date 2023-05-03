let rcbScore = document.getElementById("score-Rcb");

let cskScore = document.getElementById("score-Csk");

let score1 = 0;
let score2 = 0;

function increment1rcb() {
  score1 += 1;
  rcbScore.innerText = score1;
}

function increment4rcb() {
  score1 += 4;
  rcbScore.innerText = score1;
}

function increment6rcb() {
  score1 += 6;
  rcbScore.innerText = score1;
}

function increment1csk() {
  score2 += 1;
  cskScore.innerText = score2;
}

function increment4csk() {
  score2 += 4;
  cskScore.innerText = score2;
}

function increment6csk() {
  score2 += 6;
  cskScore.innerText = score2;
}
