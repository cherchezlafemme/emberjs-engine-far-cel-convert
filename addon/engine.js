import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

const modulePrefix = 'ember-engine-far-cel-convert';
const Eng = Engine.extend({
  modulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;

// Javascript logic for the converter;
// $('document').ready(function(e){
//   var inputTemp, tempType, resultTemp;
//   console.log("Hi Hamster!");

//   inputTemp = $('#temp').val();
//   tempType = $('#type-temperature option:selected').val();

// // trigger this on the selection option change
//   function convertTemperature () {
//     if (tempType === 'cel' ) {
//       resultTemp = convertCelToFar(inputTemp);
//     } else if (tempType === 'far' ) {
//       resultTemp = convertFarToCel(inputTemp);
//     } 

//     function convertCelToFar(temp) {
//       return (temp*1.8+32).toString + 'Fahrenheit' ; 
//     }

//     function convertFarToCel(temp) {
//       return ((temp-32)*0.5556).toString + 'Celsius';
//     }

//     $('#result').html(resultTemp);
//   }
 
// // end of the piece that shoud be updating 
// });
