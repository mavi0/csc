$(document).ready(function(){

   enquire.register("screen and (max-width:949px)", function() {

    $("#show").slideDown("1");
    $("#hide").hide();
    $("#rule").slideDown("1");
    $("header").slideUp("1");


    $("#hide").click(function(){
      $("header").slideUp("1");
      $("#hide").hide();
      $("#show").show();
      $("#rule").show();
    });

    $("#show").click(function(){
      $("header").slideDown("1");
      $("#show").hide();
      $("#hide").show();
      $("#rule").hide();
    });
   });

  enquire.register("screen and (min-width:950px)", function() {
    $("header").slideDown("1");
    $("#show").hide();
    $("#hide").hide();
    $("#rule").hide();
  });

});