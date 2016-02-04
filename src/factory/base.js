/**
 * @package EntegreJS
 * @subpackage Factories
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.factory.base = class extends E.factory.iterable {

	constructor() {
		super();
	}

	buildchildren() {
		var s = [];
		for( var k in this.c ) {
			if( this.c[ k ].build ) {
				s.push( this.c[ k ].build() );
			} else if( this.c[ k ].toString ) {
				s.push( this.c[ k ].toString() );
			} else {
				s.push( this.c[ k ] );
			}
		}
		return s.join( '' );
	}

};
