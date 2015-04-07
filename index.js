var co = require( 'co' );

module.exports = function cothunkify( fn ) {
	return function cothunkified( done ) {
		var ctx = this;
		co.wrap( function* () {
			yield fn.call( ctx );

			done();
		} )();
	};
};
