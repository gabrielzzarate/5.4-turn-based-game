var $ = require('jquery');
var _ = require('underscore');


function Game(rounds){

  this.rounds = rounds;
  this.currentRoundIndex = 0;



}

Game.prototype.round = function(rounds) {

};


Game.prototype.getCurrentRound = function() {
  return this.rounds[this.currentRoundIndex];
};

function Hero(params){
  _.extend(this, params);

}

Hero.prototype.attack= function(Monster) {
  Monster.health = Monster.health - this.attack;
  $(document).trigger('health-changed');

};

var heroes = {
  'Link': new Hero ({
    name: 'Link',
    health: 12,
    attack: 1,
    avatar: "http://www.supermariobrosx.org/forums/download/file.php?avatar=4411_1430490375.jpg"


  }),

  'Zelda': new Hero ({
    name: 'Zelda',
    health: 8,
    attack: 3,
    avatar: "http://www.unikgamer.com/characters/face/princess-zelda-77.jpg"

  }),

  //getHero: function(){
  //  var hero = heroes.getHero(models.heroes[$('#hero-selection').val()]
//  }

};


function Monster(params){
  _.extend(this, params);

}


Monster.prototype.getRandomMonster = function(monsters){
  //var randomMonster = _.sample(monsters);

    var monsterArray = _.map(monsters, function(monster){
      return monster;
    });

    console.log(monsterArray);

};

var monsters= {
  'Ganondorf': new Monster ({
    name: 'Ganondorf',
    health: 12,
    attack: 1,
    avatar: 'http://pre02.deviantart.net/b1f2/th/pre/f/2012/268/7/6/ganondorf_by_theminttu-d5fwoo8.jpg'
  }),

  'Demise': new Monster ({
    name: 'Demise',
    health: 8,
    attack: 3
  })
};



module.exports = {
  monsters: monsters,
  heroes: heroes
};
