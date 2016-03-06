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

  //displayGameOver();
  //$(document).trigger('health-changed');

};

var heroes = {
  'Link': new Hero ({
    name: 'Link',
    sfx: function(){
      $('#linkSfx')[0].play();
    },
    die: function(){
      $('#linkDie')[0].play();
    },
    health: 12,
    power: 1,
    avatar: "http://www.supermariobrosx.org/forums/download/file.php?avatar=4411_1430490375.jpg",
    victory: "http://static.srcdn.com/slir/w620-h320-q90-c620:320/wp-content/uploads/legend-zelda-netflix-tv-series-link.jpg"


  }),

  'Zelda': new Hero ({
    name: 'Zelda',
    sfx: function(){
      $('#zeldaSfx')[0].play();
    },
    die: function(){
      $('#zeldaDie')[0].play();
    },
    health: 8,
    power: 3,
    avatar: "http://www.unikgamer.com/characters/face/princess-zelda-77.jpg",
    victory: "http://www.wallpaperhi.com/thumbnails/detail/20130512/the%20legend%20of%20zelda%20princess%20zelda_www.wallpaperhi.com_7.jpg"

  }),




  'Sheik': new Hero ({
    name: 'Sheik',
    sfx: function(){
      $('#sheikSfx')[0].play();
    },
    die: function(){
      $('#sheikDie')[0].play();
    },
    health: 8,
    power: 3,
    avatar: 'http://vignette2.wikia.nocookie.net/zelda/images/8/82/Sheik_(SSB_3DS_%26_Wii_U).png/revision/latest?cb=20140414232000',
    victory: "http://www.ssbwiki.com/images/thumb/7/78/OoT_Sheik_PM.png/180px-OoT_Sheik_PM.png"

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
    sfx: function(){
      $('#ganondorfSfxA')[0].play();
      setTimeout(function(){
        $('#ganondorfSfxB')[0].play();
      }, 800);

    },
    die: function(){
      $('#ganondorfDie')[0].play();
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
    sfx: function(){
      $('#twinrovaSfx')[0].play();
    },
    die: function(){
      $('#twinrovaDie')[0].play();
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
    sfx: function(){
      $('#gohmaSfx')[0].play();
    },
    die: function(){
      $('#gohmaDie')[0].play();
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
