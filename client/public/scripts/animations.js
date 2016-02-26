$("#projectsButton").click(function() {
  $("#mainMenu").animate({
    marginLeft: '25%'
  }, "slow");
  $("#projectsMenu").show('slow');
});

$("#homeButton").click(function() {
  if($("#projectsMenu").css('display') != 'none') {
    $("#projectsMenu").hide('slow');
    $("#mainMenu").animate({
      marginLeft: '41%'
    }, "slow");
  }
});
