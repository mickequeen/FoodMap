$(document).ready(function() {
	/*
  *función de splash
  */
  setTimeout(function() {
    $(".splash").fadeOut(1500);
  },2500);
  /*
  *función para mostrar contenido de la página
  */
  setTimeout(function() {
      $(".content").fadeIn(1500);
  },3500);
  /*
  *funciones para aplicar filtros
  */
  $("#sushi").click(function(){
    $('.random').css('display', 'none');
    $('.chinese').css('display', 'none');
    $('.peruvian').css('display', 'none');
    $('.sushi').css('display','block')
  });
  $("#chinese").click(function(){
    $('.random').css('display', 'none');
    $('.peruvian').css('display', 'none');
    $('.sushi').css('display', 'none');
    $('.chinese').css('display','block');
  });
  $("#peruvian").click(function(){
    $('.random').css('display', 'none');
    $('.chinese').css('display', 'none');
    $('.sushi').css('display', 'none');
    $('.peruvian').css('display','block');
  });
  /*
  *funciones para modificar contenido de modal
  */
  $('#chineseOne').click(function(){
    $('#lineModalLabel').text('El Wok');
    $('#subtitle').text('Comida china al paso');
    $('#adress').text('Francia #5465');
    $('#price').text('$2990-$19.990');
  });
  $('#chineseTwo').click(function(){
    $('#lineModalLabel').text('China Town');
    $('#subtitle').text('Bar & Restaurant');
    $('#adress').text('Inglaterra #1267');
    $('#price').text('$5990-$29.990');
  });
  $('#chineseThree').click(function(){
    $('#lineModalLabel').text('Xing Fu');
    $('#subtitle').text('Comida China para llevar');
    $('#adress').text('Belisario Prats #1867');
    $('#price').text('$1990-$15.990');
  });
  $('#chineseFour').click(function(){
    $('#lineModalLabel').text('Fu Lin');
    $('#subtitle').text('Fusión asiática');
    $('#adress').text('Lafayette #167');
    $('#price').text('$4990-$17.990');
  });
  $('#chineseFive').click(function(){
    $('#lineModalLabel').text('Hao Hwa');
    $('#subtitle').text('Ambiente relajado, buenos precios');
    $('#adress').text('Santo Domingo #769');
    $('#price').text('$3990-$16.990');
  });
  /*
  *funciones para cambiar modales de comida peruana
  */
  $('#peruvianOne').click(function(){
    $('#lineModalLabel').text('Ají seco');
    $('#subtitle').text('Comida típica peruana');
    $('#adress').text('Teatinos #435');
    $('#price').text('$4590-$20980');
  });
  $('#peruvianTwo').click(function(){
    $('#lineModalLabel').text('Sol de mancora');
    $('#subtitle').text('Los mejores pisco sour');
    $('#adress').text('Catedral #134');
    $('#price').text('$2990-$15980');
  });
  $('#peruvianThree').click(function(){
    $('#lineModalLabel').text('El encuentro peruano');
    $('#subtitle').text('Un trozo del Perú');
    $('#adress').text('San Pablo #459');
    $('#price').text('$1990-$25990');
  });
  $('#peruvianFour').click(function(){
    $('#lineModalLabel').text('El cántaro de oro');
    $('#subtitle').text('Comida tradicional peruana');
    $('#adress').text('Morandé #984');
    $('#price').text('$5000-$49000');
  });
  $('#peruvianFive').click(function(){
    $('#lineModalLabel').text('El alpamayo');
    $('#subtitle').text('Los mejores ceviches');
    $('#adress').text('Monjitas #938');
    $('#price').text('$3990-$40990');
  });
  /*
  *funciones para cambiar contenido de modales sushi
  */
  $('#sushiOne').click(function(){
    $('#lineModalLabel').text('Niu Sushi');
    $('#subtitle').text('Sushi bar & delivery');
    $('#adress').text('Av. Tobalaba #2345');
    $('#price').text('$2990-$30990');
  });
  $('#sushiTwo').click(function(){
    $('#lineModalLabel').text('Natural Sushi');
    $('#subtitle').text('Sushi fresco, opciones veganas');
    $('#adress').text('El puma #345');
    $('#price').text('$4990-$20990');
  });
  $('#sushiThree').click(function(){
    $('#lineModalLabel').text('Sensei Sushi');
    $('#subtitle').text('Sushi a precio justo');
    $('#adress').text('Av. Recoleta #345');
    $('#price').text('$3990-$30990');
  });
  $('#sushiFour').click(function(){
    $('#lineModalLabel').text('Mr. Sushi');
    $('#subtitle').text('Promociones de lunes a viernes');
    $('#adress').text('Av. Independencia #1345');
    $('#price').text('$4990-$33990');
  });
  $('#sushiFive').click(function(){
    $('#lineModalLabel').text('Yoko ono');
    $('#subtitle').text('Grato ambiente, gran comida');
    $('#adress').text('Domingo Sta María #564');
    $('#price').text('$3990-$40990');
  });
  /*
  *funciones para imagenes iniciales
  */
  $('#randomOne').click(function(){
    $('#lineModalLabel').text('El Wok');
    $('#subtitle').text('Comida china al paso');
    $('#adress').text('Francia #5465');
    $('#price').text('$2990-$19.990');
  });
  $('#randomTwo').click(function(){
    $('#lineModalLabel').text('Ají seco');
    $('#subtitle').text('Comida típica peruana');
    $('#adress').text('Teatinos #435');
    $('#price').text('$4590-$20980');
  });
  $('#randomThree').click(function(){
    $('#lineModalLabel').text('Niu Sushi');
    $('#subtitle').text('Sushi bar & delivery');
    $('#adress').text('Av. Tobalaba #2345');
    $('#price').text('$2990-$30990');
  });
  $('#randomFour').click(function(){
    $('#lineModalLabel').text('Xing Fu');
    $('#subtitle').text('Comida China para llevar');
    $('#adress').text('Belisario Prats #1867');
    $('#price').text('$1990-$15.990');
  });
  $('#randomFive').click(function(){
    $('#lineModalLabel').text('Mr. Sushi');
    $('#subtitle').text('Promociones de lunes a viernes');
    $('#adress').text('Av. Independencia #1345');
    $('#price').text('$4990-$33990');
  });
});