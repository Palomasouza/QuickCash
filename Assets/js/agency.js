function handleForm () {
  var form = document.querySelector(".map-form");
  var campo = form.querySelector('select[name="campo"]');
  var estado = form.querySelector('select[name="city"]');

  function handleOption() {
      for (var form = estado.querySelectorAll("option"),
          campo = cidade.querySelectorAll("option"),
          a = 0; a < form.length; a++) {
          "-1" != (n = form[a]).id && n.remove()
      }
      for (a = 0; a < campo.length; a++) {
          var n; "-1" != (n = campo[a]).id && n.remove()
      }
  }
  campo.addEventListener("change", function(form) {
      switch (campo.value) {
          case "advogados":
              console.log('1')
              resetContent()
              handleEstado()
              break;
          default:
              console.log('2')
              resetContent()
      }
  })

  function resetContent() {
      var estado = form.querySelector('select[name="city"]');
      if (estado) {
          var length = estado.options.length;
          for (i = 0; i < length; i++) {
              estado.options[i] = null;
          }
      }
  }

  function handleEstado(form) { 

      var lista= [
          {
            "agent":"Messan",
            "agency":"ETS TIONOS",
            "city":"ABENGOUROU",
            "location":"AU CHATEAU,EN FACE DU DISPENSAIRE DIOULAKRO",
            "phone":22504229165,
          },
          {
            "agent":"Messan",
            "agency":"SOURCE D'EAU VIVE",
            "city":"ABIDJAN ABOBO DOUME",
            "location":"ABOBO DOUME A LA GARE DE WORO WORO, BATEAU BUS",
            "phone":22505710552,
          },
          {
            "agent":"Messan",
            "agency":"MIMOYE FINANCES",
            "city":"ABIDJAN COCODY",
            "location":"DERRIERE LA RTI, VOIE INADES, ENTREE RT2",
            "phone":"22557889344",
            "F":"COTE D'IVOIRE",
          },
          {
            "agent":"Messan",
            "agency":"BREHON SERVICES",
            "city":"ABIDJAN KOUMASSI",
            "location":"SICOGI 2, PETIT MARCHE, PHCIE BETHANIE AU TOURNANT DU GLACIER",
            "phone":22504101857,
            "F":"CÔTE D'IVOIRE",
          },  
      ]
      

      console.log("country", lista)



      // var estado = form.querySelector('select.[name="city"]');
      
      var mapContent = document.querySelector(".map-content"),
      list = document.createElement("ul");        
      list.classList.add("map-content__list");

      for (var n = 0; n < lista.length; n++) { 
          var fruta = lista[n]
          console.log("item", fruta.city)
          var option = document.createElement("option")
          option.value = fruta.city,
          option.textContent = fruta.city,
          estado.appendChild(option)

          itemList = document.createElement("li");
          itemList.classList.add("map-content__list__item"), itemList.innerHTML = fruta.agency, list.appendChild(itemList)           
      }
      mapContent.append(list),document.querySelector(".map .container").appendChild(mapContent)
    }
  }

function init() { handleForm() }
init();