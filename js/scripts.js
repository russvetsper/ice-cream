$(function() {
  var flavors = ['Chocolate', 'Vanilla', 'Eggplant'];
  flavors.forEach(function (flavor) {
    $('body').append("<h3>" + flavor + "</h3>");
  });

  var colors= ['yellow','blue','red'];
  colors.forEach(function(color) {
    $('body').append('<h2>' + color + '</h2>');

  });

});
