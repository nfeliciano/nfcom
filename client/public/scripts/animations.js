/*Using Jquery for animations on the menu
*/

//Clicking on the project button expands it
//TODO: Is it possible to not do this when on mobile?
$("#projectsButton").click(function() {
  $("#mainMenu").animate({
    marginLeft: '-5%'
  }, "slow");
  $("#projectsButton").hide();
  $("#projectsMenu").show('slow');
});

//Clicking on the home button collapses side menu(s)
$("#homeButton").click(function() {
  if($("#projectsMenu").css('display') != 'none') {
    $("#projectsMenu").hide();
    $("#projectsButton").show();
    $("#mainMenu").animate({
      marginLeft: '0%'
    }, "slow");
  }
});
