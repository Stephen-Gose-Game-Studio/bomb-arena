var Preloader = function () {};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
    this.load.spritesheet("bomberman", "assets/sprites/bomberman.png", 28, 50);
    this.load.spritesheet("bomb", "assets/sprites/bomb.png", 26, 40);
    this.load.spritesheet("explosion_top", "assets/sprites/explosion_top.png", 40, 40);
    this.load.spritesheet("explosion_bottom", "assets/sprites/explosion_bottom.png", 40, 40);
    this.load.spritesheet("explosion_left", "assets/sprites/explosion_left.png", 40, 40);
    this.load.spritesheet("explosion_right", "assets/sprites/explosion_right.png", 40, 40);
    this.load.spritesheet("explosion_center", "assets/sprites/explosion_center.png", 40, 40);
    this.load.spritesheet("explosion_horizontal", "assets/sprites/explosion_horizontal.png", 40, 40);
    this.load.spritesheet("explosion_vertical", "assets/sprites/explosion_vertical.png", 40, 40);

    this.load.tilemap("levelOne", 'assets/levels/level_one.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image("tiles", "assets/tiles/tileset.png");
  },

  create: function () {
    game.state.start("Level");
  }
};
