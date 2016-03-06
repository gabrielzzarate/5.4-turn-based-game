var handlebars = require('handlebars');
var $ = require('jquery');
var _ = require('underscore');





///welc screen
/// window.heros templatew
function WelcomeView() {
  //$('.game-container').html();
}


WelcomeView.prototype.chooseHeroes = function(heroes){
  var context = heroes;

  var source = $('#choose-hero').html();
  var template = handlebars.compile(source);
  var renderedTemplate = template(context);

  $('.game-container').append(renderedTemplate);

};

function SetTheStageView() {
  $('.game-container').html();
}

SetTheStageView.prototype.setStage = function(heroSelectionCaptured, heroes, monsters, randomMonster) {
  var context = {
    'hero': heroSelectionCaptured,
    'heroes': heroes,
    'monsters': monsters,
    'randomMonster': randomMonster
  };

  var source = $('#setStage-template').html();
  var template = handlebars.compile(source);
  var renderedTemplate = template(context);

  $('.game-container').html(renderedTemplate);
};



function ArenaView() {
  //$('.game-container').html();
}

ArenaView.prototype.startGame = function(heroSelectionCaptured, heroes, monsters, randomMonster) {
  //console.log("start game monsters: ", monsters);
  var context = {
    'hero': heroSelectionCaptured,
    'heroes': heroes,
    'monsters': monsters,
    'randomMonster': randomMonster
  };
  //console.log('context', context);

  var source = $("#arena-template").html();
  var template = handlebars.compile(source);
  var renderedTemplate = template(context);

  $('.game-container').html(renderedTemplate);
  $(document).trigger('game-started');


};

function GameOverView() {
  $('.game-container').html();
}

GameOverView.prototype.endGame = function(heroSelectionCaptured, heroes, monsters, randomMonster) {
  var context = {
    'hero': heroSelectionCaptured,
    'heroes': heroes,
    'monsters': monsters,
    'randomMonster': randomMonster
  };

  var source = $('#gameOver-template').html();
  var template = handlebars.compile(source);
  var renderedTemplate = template(context);

  $('.game-container').html(renderedTemplate);
  $('#gameOverLaugh')[0].play();
};



module.exports = {
  'WelcomeView': WelcomeView,
  'SetTheStageView': SetTheStageView,
  'ArenaView': ArenaView,
  'GameOverView': GameOverView
};
