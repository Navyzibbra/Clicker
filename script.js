let coins = 0;
let doubles = 0;
updateCoinsInLocalStorage(0);

function coin() {
  if (doubles < 1) {
    coins += 1;
    console.log(coins);
    document.getElementById("coins").innerHTML = "Coins: " + coins;
  } else {
    coins += 1 * doubles;
    console.log(coins);
    document.getElementById("coins").innerHTML = "Coins: " + coins;
  }
  updateCoinsInLocalStorage(coins);
}

function buyItem1() {
  if (coins >= 100) {
    coins -= 100;
    doubles += 2;
    console.log(doubles);
    console.log(coins);
    document.getElementById("coins").innerHTML = "Coins: " + coins;
  }
}

function buyItem2() {
  if (coins >= 1000) {
    coins -= 1000;
    doubles += 10;
    console.log(doubles);
    console.log(coins);
    document.getElementById("coins").innerHTML = "Coins: " + coins;
  }
}

function buyItem3() {
  if (coins >= 5000) {
    coins -= 5000;
    doubles += 50;
    console.log(doubles);
    console.log(coins);
    document.getElementById("coins").innerHTML = "Coins: " + coins;
  }
}

function buyItem4() {
  if (coins >= 15000) {
    coins -= 15000;
    doubles += 200;
    console.log(doubles);
    console.log(coins);
    document.getElementById("coins").innerHTML = "Coins: " + coins;
  }
}

function updateCoinsInLocalStorage(coins) {
  var highScore = localStorage.getItem("highscore");
  if (!highScore || coins > highScore) {
    localStorage.setItem("highscore", coins);
    document.getElementById("highscore").innerHTML = "Highscore: " + coins;
    alert("Congratulations! You beat the highscore!");
  } else {
    document.getElementById("highscore").innerHTML = "Highscore: " + highScore;
  }
}
