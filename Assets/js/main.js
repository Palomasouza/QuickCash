(function () {
  var menuItem = document.querySelectorAll(".menu-item");
  var menuOpen = document.querySelector(".menu-list");

  var menuMobile = document.querySelector(".menu-mobile");
  var fecharMenu = document.querySelector(".fechar-menu");

  var formOpen = document.getElementById("container-form");
  var formClose = document.getElementById("container-form");
  
  var newsOpenBox = document.getElementById("closed");
  var newsOpenBox1 = document.getElementById("closed1");
  var newsOpenBox2 = document.getElementById("closed2");
  
  
  document.getElementById("menu-mobile").addEventListener("click", openMenu);
  document.getElementById("fechar-menu").addEventListener("click", openMenu);
  document.getElementById("menu-item").addEventListener("click", closeMenu);
  document.getElementById("menu-item1").addEventListener("click", closeMenu);
  document.getElementById("menu-item2").addEventListener("click", closeMenu);  
  document.getElementById("btnForm").addEventListener("click", openForm);
  document.getElementById("close-form").addEventListener("click", closeForm);
  document.getElementById("button-cancel").addEventListener("click", closeForm);

  document.getElementById("box-news-span").addEventListener("click",  openNews);
  document.getElementById("box-news-span1").addEventListener("click",  openNews1);
  document.getElementById("box-news-span2").addEventListener("click",  openNews2);
  
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
    console.log('teste clicou ')
    newsOpenBox.classList.toggle("--openBoxNews");
  }
  function openNews1() { 
    console.log('teste clicou 1')
    newsOpenBox1.classList.toggle("--openBoxNews1");
  }
  function openNews2() {
    console.log('teste clicou 2')
    newsOpenBox2.classList.toggle("--openBoxNews2");
  }

})();


