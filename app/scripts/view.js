var handlebars = require('handlebars');
var $ = require('jquery');
var _ = require('underscore');





///welc screen
/// window.heros templatew
function WelcomeView() {
  $('.game-container').html();
}


WelcomeView.prototype.chooseHeroes = function(heroes){
  var context = heroes;

  var source = $('#choose-hero').html();
  var template = handlebars.compile(source);
  var renderedTemplate = template(context);

  $('.game-container').append(renderedTemplate);

};



//console.log(window.Heroes);





function ArenaView() {
  //$('.game-container').html();
}

ArenaView.prototype.startGame = function(heroSelectionCaptured, heroes, monsters) {
  //console.log("start game monsters: ", monsters);
  var context = {
    'hero': heroSelectionCaptured,
    'heroes': heroes,
    'monsters': monsters
  };
  console.log("context", context);
  var source = $("#arena-template").html();
  var template = handlebars.compile(source);
  var renderedTemplate = template(context);

  $('.game-container').html(renderedTemplate);
  console.log(heroSelectionCaptured);
};

function GameOverView() {
  $('.game-container').html();
}

module.exports = {
  'WelcomeView': WelcomeView,
  'ArenaView': ArenaView,
  'GameOverView': GameOverView
};
