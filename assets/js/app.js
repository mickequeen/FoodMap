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
    $('.chinese').css('display','block')
  });
  $("#peruvian").click(function(){
    $('.random').css('display', 'none');
    $('.chinese').css('display', 'none');
    $('.sushi').css('display', 'none');
    $('.peruvian').css('display','block')
  });
  /*
  *funciones para modificar contenido de modal
  */
  $('#chineseOne').click(function(){
    $('#lineModalLabel').text('El Wok');
    $('#subtitle').text('Comida china al paso');
    $('#adress').text('Francia #5465');
    $('#price').text('$2990-$19.990')
  })
  $('#chineseTwo').click(function(){
    $('#lineModalLabel').text('China Town');
    $('#subtitle').text('Bar & Restaurant');
    $('#adress').text('Inglaterra #1267');
    $('#price').text('$5990-$29.990')
  })
  $('#chineseThree').click(function(){
    $('#lineModalLabel').text('Xing Fu');
    $('#subtitle').text('Comida China para llevar');
    $('#adress').text('Belisario Prats #1867');
    $('#price').text('$1990-$15.990')
  })
  $('#chineseFour').click(function(){
    $('#lineModalLabel').text('Fu Lin');
    $('#subtitle').text('Fusión asiática');
    $('#adress').text('Lafayette #167');
    $('#price').text('$4990-$17.990')
  })
  $('#chineseFive').click(function(){
    $('#lineModalLabel').text('Hao Hwa');
    $('#subtitle').text('Ambiente relajado, buenos precios');
    $('#adress').text('Santo Domingo #769');
    $('#price').text('$3990-$16.990')
  })
});