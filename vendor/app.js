App = Ember.Engine.create({
    ready: function() {
      console.log("engine created");
    }
})

$('document').ready(function(e){
  console.log( "document loaded" );
  var inputTemp = $('#temp').val();s
  debugger;
});

// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
// Example: 30°C x 1.8 + 32 = 86°F
// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
// Example: (50°F - 32) x .5556 = 10°C