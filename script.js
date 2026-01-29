let coins = 0;

const circle = document.getElementById("circle");
const coinsText = document.getElementById("coins");

// ТАП
circle.addEventListener("click", () => {
  coins += 1;

  coinsText.textContent = "💰 Монеты: " + coins;

  // лёгкая вибрация (если поддерживается)
  if (navigator.vibrate) {
    navigator.vibrate(15);
  }
});
