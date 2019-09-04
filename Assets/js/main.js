(function () {
  var menuItem = document.querySelectorAll(".menu-item");
  var menuOpen = document.querySelector(".menu-list");

  var menuMobile = document.querySelector(".menu-mobile");
  var fecharMenu = document.querySelector(".fechar-menu");

  var formOpen = document.getElementById("container-form");
  var formClose = document.getElementById("container-form");
  
  var newsOpen = document.getElementById("closed");
  
  
  document.getElementById("menu-mobile").addEventListener("click", openMenu);
  document.getElementById("fechar-menu").addEventListener("click", openMenu);
  document.getElementById("menu-item").addEventListener("click", closeMenu);
  document.getElementById("menu-item1").addEventListener("click", closeMenu);
  document.getElementById("menu-item2").addEventListener("click", closeMenu);  
  document.getElementById("btnForm").addEventListener("click", openForm);
  document.getElementById("close-form").addEventListener("click", closeForm);
  document.getElementById("button-cancel").addEventListener("click", closeForm);
  document.getElementById("box-news-span").addEventListener("click",  openNews);
  
  // 	Menu
  function openMenu() {
    menuOpen.classList.toggle("--menuOpen");
    menuMobile.classList.toggle("--menuMobile");
    fecharMenu.classList.toggle("--menuClose");;
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
  }
  function closeForm() {
    formClose.classList.remove("--isOpen");
  }

  function openNews() {
    newsOpen.classList.toggle("--openBoxNews");
  }

})();
