(function ($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function (event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


setTimeout(function () {
  $('#preloader').fadeOut('fast');
  // window.location.replace('index.html');
}, 3000); // <-- time in milliseconds

$(document).ready(function () {

  // Hide the div
  $("#mainNav").hide();

  // Show the div in 5s
  $("#mainNav").delay(3000).fadeIn(500);


  recibeOpasaData();

});

function recibeOpasaData(valor) {
  // alert(valor)
  if (valor != undefined) {
    localStorage.setItem('ValorStorage', valor);
  }

  var ValorStorage = localStorage.getItem('ValorStorage');

  // if (ValorStorage == undefined) {
  //   location.replace("https://www.tangideas.com");
  // }

  var Texto;
  var VideoSrc;
  switch (ValorStorage) {
    case 'ERP .NET':
      Texto = 'Creado en el 2019 para la empresa en la cuál trabaje, todo fue desarrollado en Windows Form (C#) .NET se trataba de gestionar las venta' +
        'y compras de cualquier empresa hostelera de modo que estos modulos gestionaran contabilidad de la empresa.';
      VideoSrc = '../videos/CrownetCobrosConvertido.mp4';
      break;
    case 'Android App':
      Texto = 'Creado en el 2019 como proyecto final de mis estudios de DAM, se trató de una app completamente nativa en Android donde podías escanear cualquier codigo QR de multiples restaurantes' +
        'y a partir de allí hacer tu compra y demás, tiene una parte Web que simula monitores que estarían en la cocina de tales restaurantes para aceptar los pedidos hechos a traves del movil.';
      VideoSrc = '../videos/BuelaMovie1080p.mp4';
      break;
  }
  var fileName = location.href.split("/").slice(-1);
  if (fileName == 'Portfolio_Detalles.html') {
    document.getElementById("nombreProductoPortfolio").innerHTML = ValorStorage;
    document.getElementById("descripcionProductoPortfolio").innerHTML = Texto;

    var videlem = document.createElement("video");
    /// ... some setup like poster image, size, position etc. goes here...
    /// now, add sources:
    videlem.setAttribute("width", "320");
    videlem.setAttribute("height", "240");
    videlem.setAttribute("controls", "controls");

    var sourceMP4 = document.createElement("source");
    sourceMP4.type = "video/mp4";
    sourceMP4.src = VideoSrc;
    videlem.appendChild(sourceMP4);

    document.getElementById("puestoVideo").appendChild(videlem)

    // document.getElementById("video").setAttribute("src", VideoSrc);
    // var vid = document.getElementById("video");
    // vid.setAttribute("src", VideoSrc);
  }

}
function goBack() {
  location.replace("https://www.tangideas.com");
}