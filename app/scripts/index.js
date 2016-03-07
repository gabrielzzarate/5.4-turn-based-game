var $ = require('jquery');
var _ = require('underscore');
var handelbars = require('handlebars');
var models = require('./model');
var views = require('./view');

var game;
//var selectedMonster;
//var heroSelected;
//var heroSelectionCaptured = {};
//var randomMonster = getRandomMonster();


function init() {
  var welcome = new views.WelcomeView();
  welcome.chooseHeroes(models.heroes);
  $('#zeldaTheme')[0].play();

  //randomly select villian from villains array.

}

init();



$('.start-button').on('click', function(){
    // Setup view
    var arena = new views.ArenaView();
    var setTheStage = new views.SetTheStageView();
    // Get the hero and monster
    var heroSelected = $('#hero-selection').val();
    var heroSelectionCaptured = models.heroes[heroSelected];
    var monster = getRandomMonster();


    // Save hero and moster to "global" game object
    game = new models.Game();

    game.hero = heroSelectionCaptured;
    game.monster = monster;


    // kick the tires and light the fires!
    setTheStage.setStage();
    $('#setStage')[0].play();
    setTimeout(function(){
      arena.startGame(models.heroes[heroSelected], models.heroes, models.monsters, monster);
    }, 2300);
    //arena.startGame(models.heroes[heroSelected], models.heroes, models.monsters, monster);




});

function getRandomMonster() {
  var monsterArray = _.map(models.monsters, function(monster){
    return monster;
  });

  var randomMonster = _.sample(monsterArray);

  return randomMonster;
}


function displayGameOver(){
  var gameOver = new views.GameOverView();
  var winGame = new views.YouWinView();
  var hero = game.hero,
    monster = game.monster;

  if (game.hero.health <= 0) {
      gameOver.endGame();


  } else if (game.monster.health <= 0) {
      winGame.youWin();


  }


}

$(document).on('game-started', function(){
  var hero = game.hero,
      monster = game.monster;
  $('.attack-button').on('click', function() {


        if (hero.health > 0 && monster.health > 0) {
          hero.attack(monster);
          hero.sfx();
          monster.hurt();
          $('.monster-health').html(monster.health);

        }


        setTimeout(function(){
          if(monster.health > 0 && hero.health > 0) {
            monster.attack(hero);
            $('.hero-health').html(hero.health);
            monster.sfx();
            hero.shake();

          }

          $(document).trigger('attack-completed');
        }, 2000);

  });
});



 $(document).on('attack-completed', function() {
   var hero = game.hero,
       monster = game.monster;

   if(monster.health <= 0) {

       monster.die();
       setTimeout(function(){
         displayGameOver();
       }, 2000);



   } else if (hero.health <= 0) {
     hero.die();
     setTimeout(function(){
       displayGameOver();
     }, 2500);



   }
 });
