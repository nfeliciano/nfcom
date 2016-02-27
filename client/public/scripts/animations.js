/*Using Jquery for animations on the menu
*/

//Clicking on the project button expands it
//TODO: Is it possible to not do this when on mobile?
$("#projectsButton").click(function() {
  $("#mainMenu").animate({
    marginLeft: '25%'
  }, "slow");
  $("#projectsMenu").show('slow');
});

//Clicking on the home button collapses side menu(s)
$("#homeButton").click(function() {
  if($("#projectsMenu").css('display') != 'none') {
    $("#projectsMenu").hide('slow');
    $("#mainMenu").animate({
      marginLeft: '41%'
    }, "slow");
  }
});
