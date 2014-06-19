var co = require( 'co' );

module.exports = function cothunkify( fn ) {
	return function cothunkified( done ) {
		co( function* () {
			yield fn();
		} )( done );
	};
};
