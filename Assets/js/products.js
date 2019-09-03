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
    let btnCloseCashMobile = document.getElementById('btn-cash-mobile');

    let cashToCashMobile = document.getElementById("content-cash");
    let cashToCardMobile = document.getElementById("content-card");
    let cashToAccountMobile = document.getElementById("content-account");

    let imgSeta = document.getElementById('closed-seta');
    let imgSeta1 = document.getElementById('closed-seta1');
    let imgSeta2 = document.getElementById('closed-seta2');


    let openCash =true;

    if (openCash = true) {
      // openCash = false;
      cashToCash.style.display = "flex";
      cashToCard.style.display = "none";
      cashToAccount.style.display = "none";

      cashToCashMobile.style.display = "flex";
      cashToCardMobile.style.display = "none";
      cashToAccountMobile.style.display = "none";

      imgSeta.style.display = "flex";
      imgSeta1.style.display = "none";
      imgSeta2.style.display = "none";
    }

    btnCloseCash.onclick = function (e) {
      e.preventDefault();
      cashToCash.style.display = "none";
      cashToCashMobile.style.display = "none";
      imgSeta.style.display = "none";
    }

    btnCloseCashMobile.onclick = function (e) {
      e.preventDefault();
      cashToCash.style.display = "none";
      cashToCashMobile.style.display = "none";
      imgSeta.style.display = "none";
    }

  }

  function showCashToCard() {
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let cashToAccount = document.getElementById("OurProducts-Inside-3");

    let btnCloseCard = document.getElementById("btn-card");
    let btnCloseCardMobile = document.getElementById("btn-card-mobile");

    let cashToCashMobile = document.getElementById("content-cash");
    let cashToCardMobile = document.getElementById("content-card");
    let cashToAccountMobile = document.getElementById("content-account");

    let imgSeta = document.getElementById('closed-seta');
    let imgSeta1 = document.getElementById('closed-seta1');
    let imgSeta2 = document.getElementById('closed-seta2');

    let openCard;

    if (!openCard) {
      openCard = true;

      cashToCard.style.display = "flex";
      cashToCash.style.display = "none";
      cashToAccount.style.display = "none";

      cashToCardMobile.style.display = "flex";
      cashToCashMobile.style.display = "none";
      cashToAccountMobile.style.display = "none";

      imgSeta1.style.display = "flex";
      imgSeta.style.display = "none";
      imgSeta2.style.display = "none";
    }

    btnCloseCard.onclick = function (e) {
      e.preventDefault();
      cashToCard.style.display = "none";
      cashToCardMobile.style.display = "none";
      imgSeta1.style.display = "none";
    }

    btnCloseCardMobile.onclick = function (e) {
      e.preventDefault();
      cashToCard.style.display = "none";
      cashToCardMobile.style.display = "none";
      imgSeta1.style.display = "none";
    }
  }

  function showCashToAccount() {
    let cashToAccount = document.getElementById("OurProducts-Inside-3");
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToCash = document.getElementById("OurProducts-Inside-1");

    let btnCloseAccount = document.getElementById("btn-account");
    let btnCloseAccountMobile = document.getElementById("btn-account-mobile");

    let cashToCashMobile = document.getElementById("content-cash");
    let cashToCardMobile = document.getElementById("content-card");
    let cashToAccountMobile = document.getElementById("content-account");

    let imgSeta = document.getElementById('closed-seta');
    let imgSeta1 = document.getElementById('closed-seta1');
    let imgSeta2 = document.getElementById('closed-seta2');

    let openAccount;

    if (!openAccount) {
      openAccount = true;

      cashToAccount.style.display = "flex";
      cashToCash.style.display = "none";
      cashToCard.style.display = "none";

      cashToAccountMobile.style.display = "flex";
      cashToCashMobile.style.display = "none";
      cashToCardMobile.style.display = "none";

      imgSeta2.style.display = "flex";
      imgSeta.style.display = "none";
      imgSeta1.style.display = "none";
    }

    btnCloseAccount.onclick = function (e) {
      e.preventDefault();
      cashToAccount.style.display = "none";
      cashToAccountMobile.style.display = "none";
      imgSeta2.style.display = "none";
    }

    btnCloseAccountMobile.onclick = function (e) {
      e.preventDefault();
      cashToAccount.style.display = "none";
      cashToAccountMobile.style.display = "none";
      imgSeta2.style.display = "none";
    }
  }

})();