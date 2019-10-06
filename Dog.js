
var chalk = require('chalk');

function Dog(name){
    this.name = name;
}
Dog.prototype.balk = function(){
    console.log('Gâu gâu...I am '+ chalk.blue(this.name));
}
module.exports = Dog;