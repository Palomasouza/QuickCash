(function() {

  document.getElementById("box-product--Cash").addEventListener("click", showCashToCash);
  document.getElementById("box-product--Card").addEventListener("click", showCashToCard);
  document.getElementById("box-product--Account").addEventListener("click", showCashToAccount);

  // Products
  function showCashToCash() {
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToAccount = document.getElementById("OurProducts-Inside-3");
    let btnCloseCash = document.getElementById('btn-cash');

    let openCash =true;

    if (openCash = true) {
      // openCash = false;
      cashToCash.style.display = "flex";
      cashToCard.style.display = "none";
      cashToAccount.style.display = "none";
    }

    btnCloseCash.onclick = function (e) {
      e.preventDefault();

      cashToCash.style.display = "none";
    }

  }

  function showCashToCard() {
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let cashToAccount = document.getElementById("OurProducts-Inside-3");
    let btnCloseCard = document.getElementById("btn-card");

    let openCard;

    if (!openCard) {
      openCard = true;

      cashToCard.style.display = "flex";
      cashToCash.style.display = "none";
      cashToAccount.style.display = "none";
    }

    btnCloseCard.onclick = function (e) {
      e.preventDefault();

      cashToCard.style.display = "none";
    }
  }

  function showCashToAccount() {
    let cashToAccount = document.getElementById("OurProducts-Inside-3");
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let btnCloseAccount = document.getElementById("btn-account");

    let openAccount;

    if (!openAccount) {
      openAccount = true;

      cashToAccount.style.display = "flex";
      cashToCash.style.display = "none";
      cashToCard.style.display = "none";
    }

    btnCloseAccount.onclick = function (e) {
      e.preventDefault();

      cashToAccount.style.display = "none";
    }
  }

})();