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
Hero.prototype.shake = function() {
  $('#hero-image').addClass('shake');
  setTimeout(function(){
    $('#hero-image').removeClass('shake');
  }, 1500);
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


    health: _.random(9, 10),
    power: _.random(5,8),
    avatar: "http://vignette4.wikia.nocookie.net/zelda/images/c/ca/Link_Artwork_2_(Twilight_Princess).png/revision/20160110212446",
    victory: "http://static.srcdn.com/slir/w620-h320-q90-c620:320/wp-content/uploads/legend-zelda-netflix-tv-series-link.jpg"


  }),

  'Zelda': new Hero ({
    name: 'Zelda',
    sfx: function(){
      $('#zeldaSfx')[0].play();
      setTimeout(function(){
        $('#damageSfx')[0].play();
      }, 700);
    },
    die: function(){
      $('#zeldaDie')[0].play();
    },
    health: _.random(8,9),
    power: _.random(4,5),
    avatar: "http://vignette3.wikia.nocookie.net/zelda/images/2/22/Zelda_(SSB_3DS_%26_Wii_U).png/revision/latest?cb=20140610212822",
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

Monster.prototype.hurt = function() {
  $('#monster-image').addClass('shake');
  setTimeout(function(){
    $('#monster-image').removeClass('shake');
  }, 1500);
};

var monsters= {
  'Ganondorf': new Monster ({
    name: 'Ganondorf',
    health: _.random(10,12),
    power: _.random(7,8),
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
    avatar: 'http://vignette1.wikia.nocookie.net/dynastywarriors/images/b/b7/Ganondorf_Costume_1_-_HW_DLC.png/revision/latest?cb=20140809043142'
  }),

  'Volvagia': new Monster ({
    name: 'Volvagia',
    warCry: function(){
      $('#volvagiaWarCryA')[0].play();
      setTimeout(function(){
        $('#volvagiaWarCryB')[0].play();
      }, 800);

    },
    sfx: function(){
      $('#volvagiaSfx')[0].play();


    },
    die: function(){
      $('#die_sfx')[0].play();
    },
    health: _.random(8, 9),
    power: _.random(6,8),
    avatar: 'http://vignette2.wikia.nocookie.net/zelda/images/5/52/Volvagia_Artwork.png/revision/latest?cb=20100504170218'

  }),

  'Twinrova': new Monster ({
    name: 'Twinrova',
    health: _.random(7, 9),
    power: _.random(6,7),
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
    avatar: 'http://vignette3.wikia.nocookie.net/zelda/images/8/8e/Twinrova_(Oracle_of_Ages_and_Seasons).png/revision/latest?cb=20100328042014'
  }),

  'Ganon': new Monster ({
    name: 'Ganon',
    health: _.random(5, 10),
    power: _.random(3,5),
    warCry: function(){
      $('#gohmaScream')[0].play();
    },
    sfx: function(){
      $('#gohmaSfx')[0].play();
    },
    die: function(){
      $('#gohmaDie')[0].play();
    },
    avatar: 'http://www.nintendojo.com/wp-content/uploads/2011/10/Zelda-Top-Ten-Bosses-Ganon-276x360.png'
  }),

  'King Dodongo': new Monster ({
    name: 'King Dodongo',
    warCry: function(){
      $('#dogongoWarCryA')[0].play();
      setTimeout(function(){
        $('#dogongoWarCryB')[0].play();
      }, 800);
    },
    sfx: function(){
      $('#dogongoSfx')[0].play();
    },
    die: function(){
      $('#die_sfx')[0].play();
    },
    health: _.random(5,8),
    power: _.random(5,8),
    avatar: "http://vignette3.wikia.nocookie.net/zelda/images/9/9a/Dodongo_Artwork_(Ocarina_of_Time_and_Majora's_Mask).png/revision/latest?cb=20140526085919",
  })
};



module.exports = {
  Game: Game,
  Hero: Hero,
  Monster: Monster,
  monsters: monsters,
  heroes: heroes
};
