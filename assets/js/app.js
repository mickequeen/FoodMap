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

  $("#sushi").click(function(){
    $('.random').css('display', 'none');
    $('.chinese').css('display', 'none');
    $('.peruvian').css('display', 'none');
    $('.sushi').css('display','block')
  })
  $("#chinese").click(function(){
    $('.random').css('display', 'none');
    $('.peruvian').css('display', 'none');
    $('.sushi').css('display', 'none');
    $('.chinese').css('display','block')
  })
  $("#peruvian").click(function(){
    $('.random').css('display', 'none');
    $('.chinese').css('display', 'none');
    $('.sushi').css('display', 'none');
    $('.peruvian').css('display','block')
  })
});