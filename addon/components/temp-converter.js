import Ember from 'ember';
console.log("Ember converter.js is here");

export default Ember.Component.extend({
  foo: 0,
  typesOfTemp: ['Celsius', 'Fahrenheit'],
  tempType: 'Celsius',

  actions: {
    selectTempType(tempType) {
      this.set('tempType', tempType);
    },
    // setInputTempVal(temp) {
    //   console.log('Inside the setInputTempVal');
    //   this.set('temp', temp);
    // },
    convertTemp: function(){
      debugger;
    }
  }
});