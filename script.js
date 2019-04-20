/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log("Right :" +this.left);
  }
  this.setSpeed = function (speed) {
    this.speed = speed;

  }
  this.moveLeft = function () {
    this.left -= this.speed;
    console.log("Left :" + this.left);
  }
  this.moveDown = function () {
    this.top += this.speed;
    console.log("Down :" + this.top);
  }
  this.moveUp = function () {
    this.top -= this.speed;
    console.log("Up :" + this.top);
  }

}

var hero = new Hero('troll.png', 20,10 , 100);
hero.setSpeed(10);
function check() {
  /*if (hero.left > 500) {
    hero.moveLeft();
  }*/
  if(hero.left < window.innerWidth - hero.size && hero.top < hero.size){
    hero.moveRight();
  }
  if (hero.left >window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  }
  if(hero.top >= window.innerHeight - hero.size && hero.left >=  hero.size) {
    hero.moveLeft();
  }
  if (hero.left <=  hero.size && hero.top >= hero.size) {
    hero.moveUp();
  }
}
function start(){
  check();
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();