var $ = require('jquery');
var _ = require('underscore');


function Game(rounds){

  //this.rounds = rounds;
  //this.currentRoundIndex = 0;



}

Game.prototype.round = function(rounds) {

};


Game.prototype.getCurrentRound = function() {
  return this.rounds[this.currentRoundIndex];
};


function Hero(params){
  params = params || {};
  _.extend(this, params);

}

Hero.prototype.attack= function(victim) {

  victim.health = victim.health - this.power;
  //$(document).trigger('health-changed');

};

var heroes = {
  'Link': new Hero ({
    name: 'Link',
    health: 12,
    power: 1,
    avatar: "http://www.supermariobrosx.org/forums/download/file.php?avatar=4411_1430490375.jpg"


  }),

  'Zelda': new Hero ({
    name: 'Zelda',
    health: 8,
    power: 3,
    avatar: "http://www.unikgamer.com/characters/face/princess-zelda-77.jpg"

  }),

  'Younglink': new Hero ({
    name: 'Young Link',
    health: 4,
    power: 2,
    avatar: "http://img01.deviantart.net/5c28/i/2010/365/d/0/young_link_with_master_sword_by_skilarbabcock-d362wym.jpg"

  })

};


function Monster(params){
  _.extend(this, params);

}

Monster.prototype = new Hero();

var monsters= {
  'Ganondorf': new Monster ({
    name: 'Ganondorf',
    health: 12,
    power: 1,
    warCry: function(){
      $('#ganonLaugh')[0].play();
      //document.getElementById('ganonLaugh').play();
    },
    avatar: 'http://pre02.deviantart.net/b1f2/th/pre/f/2012/268/7/6/ganondorf_by_theminttu-d5fwoo8.jpg'
  }),

  'Demise': new Monster ({
    name: 'Demise',
    health: 8,
    power: 3,
    avatar: 'http://vignette2.wikia.nocookie.net/zelda/images/4/45/Demise_Artwork.png/revision/latest?cb=20111109235625'

  }),

  'Twinrova': new Monster ({
    name: 'Twinrova',
    health: 10,
    power: 2,
    warCry: function(){
      $('#twinrovaAppear')[0].play();
      setTimeout(function(){
        $('#twinrovaLaugh')[0].play();
      }, 800);
    },
    avatar: 'http://images1.wikia.nocookie.net/__cb20110721220244/villains/images/b/b8/Twinrova_seperated.png'
  }),

  'Gohma': new Monster ({
    name: 'Gohma',
    health: 8,
    power: 5,
    warCry: function(){
      $('#gohmaScream')[0].play();
    },
    avatar: 'http://vignette4.wikia.nocookie.net/zelda/images/b/b1/Queen_Gohma_Artwork.png/revision/latest?cb=20110427012302'
  }),

  'Majora': new Monster ({
    name: 'Majora',
    health: 8,
    power: 5,
    avatar: 'http://images.wikia.com/villains/images/2/2e/Majora_god.png',
  })
};



module.exports = {
  Game: Game,
  Hero: Hero,
  Monster: Monster,
  monsters: monsters,
  heroes: heroes
};
