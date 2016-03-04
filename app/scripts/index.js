var $ = require('jquery');
var _ = require('underscore');
var handelbars = require('handlebars');
var models = require('./model');
var views = require('./view');


//var selectedMonster;
//var heroSelected;
//var heroSelectionCaptured = {};



function init() {
  var welcome = new views.WelcomeView();
  welcome.chooseHeroes(models.heroes);

  //randomly select villian from villains array.

}

init();



$('.start-button').on('click', function(){
    var heroSelected = $('#hero-selection').val();
    //console.log(heroSelected);

    var heroSelectionCaptured = models.heroes[heroSelected];
  //  console.log(heroSelectionCaptured);
    //console.log(heroSelectionCaptured.name);

    var arena = new views.ArenaView();
    arena.startGame(models.heroes[heroSelected], models.heroes, models.monsters);

    //console.log(models.heroes[heroSelected]);



});





//event listener .value()




// $('.attack-button').on('click', function(e) {
//
//     $(document).trigger('attack:monster');
//
//
// });
//
//
// $(document).on('hero:selected', function(event, hero) {
//   selectedHero = hero;
// });
//
// $(document).on('monster:selected', function(event, monster) {
//   selectedMonster = monster;
// });
//
// $(document).on('attack:monster', function(event) {
//   selectedHero.attack(selectedMonster);
//
// });
//
// $(document).on('health-changed', function(event, health) {
//
//
// });
