const _= require('lodash');

module.exports  = class Calculator{
  constructor(object){
    this.object = _.filter(object, function(item){
       if(_.isNumber(item)){
         return item;
       } else {
         console.log("Uwaga! Wykryto składnij innego typu", item);
       }
    });
  }

  sum() {
    return _.reduce(this.object, function(addition, i) {
      return addition + i;
    }, 0);
  }

  subtract() {
    return _.reduce(this.object.slice(1,this.object.length), function(sub, i) {
      return sub - i;
    }, this.object[0]);
  }
}
