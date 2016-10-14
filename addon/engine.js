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