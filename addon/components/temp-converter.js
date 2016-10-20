import Ember from 'ember';
console.log("Ember converter.js is here");

export default Ember.Component.extend({
  typesOfTemp: ['Celsius', 'Fahrenheit'],
  tempType: 'Celsius',
  userTemp: 0,
  data: null,

  actions: {
    selectTempType(tempType) {
      this.set('tempType', tempType);
    },

    changed(data) {
      console.log("value is changed");
      debugger;
      console.log(data);
    },

    // setInputTempVal(userTemp) {
    //   debugger;
    //   console.log('Inside the setInputTempVal');
    //   this.set('userTemp', userTemp);
    // },

    convertTemp: function(){
      var t;
      console.log('Inside the convertTemp' + t);

      t = this.get('userTemp');
  
      console.log('And now' + t);
    }
  }
});