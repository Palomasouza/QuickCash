(function () {
  var menuItem = document.querySelectorAll(".menu-item");
  var menuOpen = document.querySelector(".menu-list");

  var menuMobile = document.querySelector(".menu-mobile");
  var fecharMenu = document.querySelector(".fechar-menu");

  var formOpen = document.getElementById("div-form");
  var formClose = document.getElementById("div-form");
  
  
  document.getElementById("menu-mobile").addEventListener("click", openMenu);
  document.getElementById("fechar-menu").addEventListener("click", openMenu);
  document.getElementById("menu-item").addEventListener("click", closeMenu);
  document.getElementById("menu-item1").addEventListener("click", closeMenu);
  document.getElementById("menu-item2").addEventListener("click", closeMenu);  
  document.getElementById("btnForm").addEventListener("click", openForm);
  document.getElementById("close-form").addEventListener("click", closeForm);
  
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

})();
