(function () {
  var menuItem = document.querySelectorAll(".menu-item");
  var menuOpen = document.querySelector(".menu-list");

  var menuMobile = document.querySelector(".menu-mobile");
  var fecharMenu = document.querySelector(".fechar-menu");

  
  document.getElementById("menu-mobile").addEventListener("click", openMenu);
  document.getElementById("fechar-menu").addEventListener("click", openMenu);
  document.getElementById("menu-item").addEventListener("click", closeMenu);
  document.getElementById("menu-item1").addEventListener("click", closeMenu);
  document.getElementById("menu-item2").addEventListener("click", closeMenu);  
  document.getElementById("btnForm").addEventListener("click", openForm);
  document.getElementById("close-form").addEventListener("click", closeForm);
  
  var formOpen = document.getElementById("div-form");
  var formClose = document.getElementById("div-form");
  // 	Menu
  function openMenu() {
    menuOpen.classList.toggle("--menuOpen");
    menuMobile.classList.toggle("--menuMobile");
    fecharMenu.classList.toggle("--menuClose");
    menuItem.forEach(element => {
      element.classList.add("--openItem");
    });
  }
  function closeMenu() {
    menuOpen.classList.remove("--isOpen");
  }

  //  Form
  function openForm() {
    formOpen.classList.toggle("--isOpen");
    console.log('oi chegou')
  }
  function closeForm() {
    formClose.classList.remove("--isOpen");
  }


  

  // Products
  function showCashToCash() {
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToAccount = document.getElementById("OurProducts-Inside-3");
    let btnCloseCash = document.getElementById('btn-cash');

    let openCash;

    if (!openCash) {
      openCash = true;
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
