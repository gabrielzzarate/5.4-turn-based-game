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

    // Get the hero and monster
    var heroSelected = $('#hero-selection').val();
    var heroSelectionCaptured = models.heroes[heroSelected];
    var monster = getRandomMonster();


    // Save hero and moster to "global" game object
    game = new models.Game();

    game.hero = heroSelectionCaptured;
    game.monster = monster;


    // kick the tires and light the fires!
    arena.startGame(models.heroes[heroSelected], models.heroes, models.monsters, monster);




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

  if (game.hero.health || game.monster.health <= 0) {
      gameOver.endGame();
    }


}

$(document).on('game-started', function(){
  $('.attack-button').on('click', function() {
    var hero = game.hero,
        monster = game.monster;


        hero.attack(monster);

        $('.monster-health').html(monster.health);




        setTimeout(function(){
          monster.attack(hero);
          $('.hero-health').html(hero.health);

        }, 2000);

  });


});


/*
 $(document).on('hero:selected', function(event, hero) {
   selectedHero = hero;
 });

 $(document).on('monster:selected', function(event, monster) {
   selectedMonster = monster;
 });
 $(document).on('attack:monster', function(event) {
   selectedHero.attack(selectedMonster);

 });



 $(document).on('health-changed', function(event, health) {
   if (game.hero.health || game.monster.health <= 0) {
       displayGameOver();
     }
     console.log(game.hero.health);
     console.log(game.monster.health);
});
*/
